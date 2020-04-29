const artifacts = require('../../../../swap/build/contracts/AsProxy');

const AppConfig = require(`../../../../config/config.json`);

const ProxyDescriptor = {

  address: artifacts.networks[AppConfig.network_id].address,
  abi: artifacts.abi,
  options : {
    gas: 3000000
  }
};


module.exports = ProxyDescriptor;