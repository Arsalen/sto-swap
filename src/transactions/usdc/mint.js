require('dotenv').config({path: '.env'});

const api = require('../../middleware/provider/api');
const usdcWrapper = require('../../middleware/wrapper').UsdcWrapper;

const privateKey = process.env.ACCOUNT_2_PK;

const usdc = usdcWrapper(privateKey);

const mint = (data) => {

    let account = api.account();
    return usdc.mint(data.to, data.amount, account);
};

const data = {
    to: process.env.USER_ADDRESS,
    amount: '100000000000000000000'
}

mint(data)
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