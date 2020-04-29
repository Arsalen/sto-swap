class UsdtContract {

    constructor(web3, descriptor) {

        this._instance = new web3.eth.Contract(descriptor.abi,
            descriptor.address, descriptor.options);
    }

    approve(spender, value, account) {
        return this._instance.methods.approve(spender, value).send({
            from: account
        });
    }

}

module.exports = UsdtContract;
