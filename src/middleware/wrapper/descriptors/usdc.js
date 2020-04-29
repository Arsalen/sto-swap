const proxyArtifacts = require('../../../../swap/build/contracts/FiatTokenProxy');
const tokenArtifacts = require('../../../../swap/build/contracts/FiatTokenV1');

const AppConfig = require(`../../../../config/config.json`);

const UsdcDescriptor = {

  address: proxyArtifacts.networks[AppConfig.network_id].address,
  abi: tokenArtifacts.abi,
  options : {
    gas: 3000000
  }
};


module.exports = UsdcDescriptor;