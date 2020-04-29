const api = require('../provider/api');
const { ProxyContract, DaiContract, UsdtContract, UsdcContract } = require('./contracts');
const { ProxyDescriptor, DaiDescriptor, UsdtDescriptor, UsdcDescriptor } = require('./descriptors');

/**
 * contracts factory
 */

const web3 = api.web3();

const proxy = new ProxyContract(web3, ProxyDescriptor);
const dai = new DaiContract(web3, DaiDescriptor);
const usdt = new UsdtContract(web3, UsdtDescriptor);
const usdc = new UsdcContract(web3, UsdcDescriptor);

exports.ProxyWrapper = (privateKey) => {

    api.register(privateKey);
    return proxy;
};

exports.DaiWrapper = (privateKey) => {

    api.register(privateKey);
    return dai;
};

exports.UsdtWrapper = (privateKey) => {

    api.register(privateKey);
    return usdt;
};

exports.UsdcWrapper = (privateKey) => {

    api.register(privateKey);
    return usdc;
};