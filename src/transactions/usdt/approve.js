require('dotenv').config({path: '.env'});
const AsUsdt = require('../../../swap/build/contracts/AsUSDT');

const api = require('../../middleware/provider/api');
const usdtWrapper = require('../../middleware/wrapper').UsdtWrapper;

const AppConfig = require(`../../../config/config.json`);

const privateKey = process.env.USER_PK;

const usdt = usdtWrapper(privateKey);

const approve = (data) => {

    let account = api.account();
    return usdt.approve(data.spender, data.amount, account);
};

const data = {
    spender: AsUsdt.networks[AppConfig.network_id].address,
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