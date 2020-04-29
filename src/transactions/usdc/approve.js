require('dotenv').config({path: '.env'});
const AsUsdc = require('../../../swap/build/contracts/AsUSDC');

const api = require('../../middleware/provider/api');
const usdcWrapper = require('../../middleware/wrapper').UsdcWrapper;

const AppConfig = require(`../../../config/config.json`);

const privateKey = process.env.USER_PK;

const usdc = usdcWrapper(privateKey);

const approve = (data) => {

    let account = api.account();
    return usdc.approve(data.spender, data.amount, account);
};

const data = {
    spender: AsUsdc.networks[AppConfig.network_id].address,
    amount: '10000000'
}

approve(data)
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
