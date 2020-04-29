require('dotenv').config({path: '.env'});

const api = require('../../middleware/provider/api');
const usdcWrapper = require('../../middleware/wrapper').UsdcWrapper;

const AppConfig = require(`../../../config/config.json`);

const privateKey = process.env.USER_PK;

const usdc = usdcWrapper(privateKey);

const initialize = (data) => {

    let account = api.account();
    return usdc.initialize(data.name, data.symbol, data.currency, data.decimals, data.masterMinter, data.pauser, data.blacklister, data.owner, account);
};

const data = {
    name: AppConfig.usdc_name, 
    symbol: AppConfig.usdc_symbol, 
    currency: AppConfig.usdc_currency, 
    decimals: AppConfig.usdc_decimals, 
    masterMinter: process.env.ACCOUNT_1_ADDRESS, 
    pauser: process.env.ACCOUNT_1_ADDRESS, 
    blacklister: process.env.ACCOUNT_1_ADDRESS, 
    owner: process.env.ACCOUNT_1_ADDRESS
}

initialize(data)
    .once('transactionHash', hash => {
        console.log('hash: ', hash);
    })
    .once('receipt', receipt => {
        console.log('receipt: ', receipt);
    })
    .on('confirmation', confirmation => {
        console.log('confirmation: ', confirmation);
    })
    .on('error', error => {
        console.log('error: ', error);
    })
    .then(result => {
        console.log('result: ', result);
    })
    .catch(revert => {
        console.log('revert: ', revert);
    })

api.provider().engine.stop();