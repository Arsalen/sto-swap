const FiatTokenV1 = artifacts.require("../contracts/FiatTokenV1.sol");

module.exports = function(deployer) {
  
  deployer.deploy(FiatTokenV1);
};