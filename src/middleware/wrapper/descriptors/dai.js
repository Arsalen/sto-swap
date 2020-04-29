const artifacts = require('../../../../swap/build/contracts/Dai');

const AppConfig = require(`../../../../config/config.json`);

const DaiDescriptor = {

  address: artifacts.networks[AppConfig.network_id].address,
  abi: artifacts.abi,
  options : {
    gas: 3000000
  }
};


module.exports = DaiDescriptor;