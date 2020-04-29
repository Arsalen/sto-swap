const artifacts = require('../../../../swap/build/contracts/TetherToken');

const AppConfig = require(`../../../../config/config.json`);

const UsdtDescriptor = {

  address: AppConfig.usdt_address,
  abi: artifacts.abi,
  options : {
    gas: 3000000
  }
};


module.exports = UsdtDescriptor;