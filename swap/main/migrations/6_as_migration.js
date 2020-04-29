/**
 * @dev Environment variables.
 */
const AppConfig = require(`../../config/config.json`);

/**
 * @dev AS contracts.
 */
const AsUSDT = artifacts.require("../contracts/AsUSDT.sol");
const AsUSDC = artifacts.require("../contracts/AsUSDC.sol");
const AsDAI = artifacts.require("../contracts/AsDAI.sol");

module.exports = function(deployer) {

    /**
     * @dev Migration of AsUDST contract.
     * @arg tokenAddress stable coin address.
     * @arg symbol stable coin symbol.
     * @arg name stable coin name.
     * @arg decimals stable coin decimals.
     */
    deployer.deploy(AsUSDT, AppConfig.usdt_address, AppConfig.usdt_symbol, AppConfig.usdt_name, AppConfig.usdt_decimals/**, {overwrite: false}*/)
        .then(async (contract) => {
            
            /**
             * @dev Instanciate usdt contract.
             */
            let asObject = await AsUSDT.at(contract.address);

            /**
             * @dev Setup sto.
             * @arg tokenAddress security token address.
             * @arg symbol security token symbol.
             * @arg name security token name.
             * @arg decimals security token decimals.
             */
            asObject.setup(AppConfig.sto_address, AppConfig.sto_symbol, AppConfig.sto_name, AppConfig.sto_decimals);
        });

    /**
     * @dev Migration of AsUDSC contract.
     * @arg tokenAddress stable coin address.
     * @arg symbol stable coin symbol.
     * @arg name stable coin name.
     * @arg decimals stable coin decimals.
     */
    deployer.deploy(AsUSDC, AppConfig.usdc_address, AppConfig.usdc_symbol, AppConfig.usdc_name, AppConfig.usdc_decimals/**, {overwrite: false}*/)
        .then(async (contract) => {
            
            /**
             * @dev Instanciate usdc contract.
             */
            let asObject = await AsUSDC.at(contract.address);

            /**
             * @dev Setup sto.
             * @arg tokenAddress security token address.
             * @arg symbol security token symbol.
             * @arg name security token name.
             * @arg decimals security token decimals.
             */
            asObject.setup(AppConfig.sto_address, AppConfig.sto_symbol, AppConfig.sto_name, AppConfig.sto_decimals);
        });

    /**
     * @dev Migration of AsDAI contract.
     * @arg tokenAddress stable coin address.
     * @arg symbol stable coin symbol.
     * @arg name stable coin name.
     * @arg decimals stable coin decimals.
     */
    deployer.deploy(AsDAI, AppConfig.dai_address, AppConfig.dai_symbol, AppConfig.dai_name, AppConfig.dai_decimals/**, {overwrite: false}*/)
        .then(async (contract) => {
            
            /**
             * @dev Instanciate dai contract.
             */
            let asObject = await AsDAI.at(contract.address);

            /**
             * @dev Setup sto.
             * @arg tokenAddress security token address.
             * @arg symbol security token symbol.
             * @arg name security token name.
             * @arg decimals security token decimals.
             */
            asObject.setup(AppConfig.sto_address, AppConfig.sto_symbol, AppConfig.sto_name, AppConfig.sto_decimals);
        });
};
