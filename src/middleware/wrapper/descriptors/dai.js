const artifacts = require('../../../../swap/build/contracts/Dai');

const AppConfig = require(`../../../../config/config.json`);

const DaiDescriptor = {

  address: AppConfig.dai_address,
  abi: artifacts.abi,
  options : {
    gas: 3000000
  }
};


module.exports = DaiDescriptor;