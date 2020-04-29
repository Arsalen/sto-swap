class DaiContract {

    constructor(web3, descriptor) {

        this._instance = new web3.eth.Contract(descriptor.abi,
            descriptor.address, descriptor.options);
    }

    approve(spender, amount, account) {
        return this._instance.methods.approve(spender, amount).send({
            from: account
        });
    }

}

module.exports = DaiContract;
