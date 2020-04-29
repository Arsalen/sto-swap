const TetherToken = artifacts.require("../contracts/TetherToken.sol");

/**
 * @dev Environment variables.
 */
const AppConfig = require(`../../config/config.json`);

module.exports = function(deployer) {
  
  deployer.deploy(TetherToken, AppConfig.usdt_supply, AppConfig.usdt_name, AppConfig.usdt_symbol, AppConfig.usdt_decimals)
    .then(async (contract) => {
      let contractObject = await TetherToken.at(contract.address);
      await contractObject.transfer(process.env.USER_ADDRESS, '1');
    });
};
