/**
 * @dev Proxy and AS contracts.
 */
const AsProxy = artifacts.require("../contracts/AsProxy.sol");
const AsUSDT = artifacts.require("../contracts/AsUSDT.sol");
const AsUSDC = artifacts.require("../contracts/AsUSDC.sol");
const AsDAI = artifacts.require("../contracts/AsDAI.sol");

module.exports = function(deployer) {

    /**
     * @dev Migration of AsUDST contract.
     * @arg AsProxy proxy address.
     */
    deployer.deploy(AsProxy).then(async (contract) => {
        
        /**
         * @dev Instanciate proxy contract.
         */
        let asProxyObject = await AsProxy.at(contract.address);
        
        /**
         * @dev Instanciate usdt contract.
         */
        let asUsdtObject = await AsUSDT.at(AsUSDT.address);

        /**
         * @dev Instanciate usdc contract.
         */
        let asUsdcObject = await AsUSDC.at(AsUSDC.address);
        
        /**
         * @dev Instanciate dai contract.
         */
        let asDaiObject = await AsDAI.at(AsDAI.address);

        /**
         * @dev transfer ownership to proxy.
         */
        await asUsdtObject.transferOwnership(contract.address);
        await asUsdcObject.transferOwnership(contract.address);
        await asDaiObject.transferOwnership(contract.address);

        /**
         * @dev set data.
         */

        const usdt = {
            _token: 'usdt',
            _address: AsUSDT.address,
        };

        const usdc = {
            _token: 'usdc',
            _address: AsUSDC.address,
        };

        const dai = {
            _token: 'dai',
            _address: AsDAI.address,
        };

        /**
         * @dev set tokens.
         */
        await asProxyObject.set(usdt._token, usdt._address);
        await asProxyObject.set(usdc._token, usdc._address);
        await asProxyObject.set(dai._token, dai._address);

    });
};