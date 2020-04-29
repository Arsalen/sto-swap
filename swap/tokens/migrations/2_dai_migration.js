const Dai = artifacts.require("../contracts/Dai.sol");
/**
 * @dev Environment variables.
 */
const AppConfig = require(`../../config/config.json`);

module.exports = function(deployer) {
  
  deployer.deploy(Dai, AppConfig.network_id)
    .then(async (contract) => {
        let contractObject = await Dai.at(contract.address);
        await contractObject.mint(process.env.ADMIN_ADDRESS, AppConfig.dai_balance);
    });
};
