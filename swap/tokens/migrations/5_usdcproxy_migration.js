require('dotenv').config({path: '.env'});

const FiatTokenV1 = artifacts.require("../contracts/FiatTokenV1.sol");
const FiatTokenProxy = artifacts.require("../contracts/FiatTokenProxy.sol");


module.exports = function(deployer) {
  
  deployer.deploy(FiatTokenProxy, FiatTokenV1.address)
  .then(async (contract) => {

    let contractObject = await FiatTokenV1.at(contract.address);
    
    await contractObject.initialize(
      AppConfig.usdc_name, 
      AppConfig.usdc_symbol, 
      AppConfig.usdc_currency, 
      AppConfig.usdc_decimals, 
      process.env.ACCOUNT_1_ADDRESS, // '0xe982615d461dd5cd06575bbea87624fda4e3de17', 
      process.env.ACCOUNT_1_ADDRESS, // '0xf0d160dec1749afaf5a831668093b1431f7c8527', 
      process.env.ACCOUNT_1_ADDRESS, // '0x5db0115f3b72d19cea34dd697cf412ff86dc7e1b', 
      process.env.ACCOUNT_1_ADDRESS // '0xfcb19e6a322b27c06842a71e8c725399f049ae3a'
    );

    await contractObject.configureMinter(
      process.env.ACCOUNT_2_ADDRESS, 
      '1000000000000000000000'
    );

    await contractObject.mint(
      process.env.USER_ADDRESS, 
      '100000000000000000000', 
    );
  });
};
