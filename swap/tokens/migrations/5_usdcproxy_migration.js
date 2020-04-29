const FiatTokenV1 = artifacts.require("../contracts/FiatTokenV1.sol");
const FiatTokenProxy = artifacts.require("../contracts/FiatTokenProxy.sol");


module.exports = function(deployer) {
  
  deployer.deploy(FiatTokenProxy, FiatTokenV1.address);
};
