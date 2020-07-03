class ProxyContract {

    constructor(web3, descriptor) {

        this._instance = new web3.eth.Contract(descriptor.abi,
            descriptor.address, descriptor.options);
    }

    authorize(name, authorization, account) {
        return this._instance.methods.authorize(name, authorization).send({
            from: account
        });
    }

    deposit(name, amount, account) {
        return this._instance.methods.deposit(name, amount).send({
            from: account
        });
    }

    withdraw(name, amount, account) {
        return this._instance.methods.withdraw(name, amount).send({
            from: account
        });
    }

}

module.exports = ProxyContract;
