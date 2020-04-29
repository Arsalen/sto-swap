const artifacts = require('../../../../swap/build/contracts/FiatTokenV1');

const AppConfig = require(`../../../../config/config.json`);

const UsdcDescriptor = {

  address: AppConfig.usdc_address,
  abi: artifacts.abi,
  options : {
    gas: 3000000
  }
};


module.exports = UsdcDescriptor;