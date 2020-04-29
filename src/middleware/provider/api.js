const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require("web3");

const AppConfig = require(`../../../config/config.json`);

class Api {

    constructor(endPoint) {

        this._mnemonic = process.env.MNEMONIC.trim();
        this._provider = new HDWalletProvider(this._mnemonic, endPoint);
        this._web3 = new web3(this._provider);
    }

    setup() {
        this._web3.setProvider(this._provider);
    }

    register(privateKey) {
        const account = this._web3.eth.accounts.privateKeyToAccount(privateKey);
        this._web3.eth.accounts.wallet.add(account);
        this._web3.eth.defaultAccount = account.address;
    }

    mnemonic() {
        return this._mnemonic;
    }

    provider() {
        return this._provider;
    }

    web3() {
        return this._web3;
    }

    account() {
        return this._web3.eth.defaultAccount;
    }

}

const endPoint = `${AppConfig.infura_end_point}${process.env.INFURA_API_KEY}`;

const instance = new Api(endPoint);

instance.setup();

module.exports = instance;