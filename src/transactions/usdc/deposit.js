require('dotenv').config({path: '.env'});

const api = require('../../middleware/provider/api');
const proxyWrapper = require('../../middleware/wrapper').ProxyWrapper;

const privateKey = process.env.USER_PK;

const proxy = proxyWrapper(privateKey);

const deposit = (data) => {

    let account = api.account();    
    return proxy.deposit(data.name, data.amount, account);
};

const data = {
    name: 'usdc',
    amount: '1000000',
};

deposit(data)
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
