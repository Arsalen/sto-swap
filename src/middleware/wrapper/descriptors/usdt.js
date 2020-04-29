const artifacts = require('../../../../swap/build/contracts/TetherToken');

const AppConfig = require(`../../../../config/config.json`);

const UsdtDescriptor = {

  address: artifacts.networks[AppConfig.network_id].address,
  abi: artifacts.abi,
  options : {
    gas: 3000000
  }
};


module.exports = UsdtDescriptor;