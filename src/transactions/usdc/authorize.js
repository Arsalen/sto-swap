require('dotenv').config({path: '.env'});

const api = require('../../middleware/provider/api');
const proxyWrapper = require('../../middleware/wrapper').ProxyWrapper;

const privateKey = process.env.ADMIN_PK;

const proxy = proxyWrapper(privateKey);

const authorize = (data) => {

    let account = api.account();
    return proxy.authorize(data.name, data.authorization, account);
};

const data = {
    name: 'usdc',
    authorization: true
}

authorize(data)
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