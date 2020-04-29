require('dotenv').config({path: '.env'});
const AsDai = require('../../../swap/build/contracts/AsDAI');

const api = require('../../middleware/provider/api');
const daiWrapper = require('../../middleware/wrapper').DaiWrapper;

const AppConfig = require(`../../../config/config.json`);

const privateKey = process.env.USER_PK;

const dai = daiWrapper(privateKey);

const approve = (data) => {

    let account = api.account();
    return dai.approve(data.spender, data.amount, account);
};

const data = {
    spender: AsDai.networks[AppConfig.network_id].address,
    amount: '10000000000000000000'
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