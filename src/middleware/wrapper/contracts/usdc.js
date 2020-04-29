class UsdcContract {

    constructor(web3, descriptor) {

        this._instance = new web3.eth.Contract(descriptor.abi,
            descriptor.address, descriptor.options);
        this._txFactory = web3.eth.sendTransaction;
    }

    initialize(name, symbol, currency, decimals, masterMinter, pauser, blacklister, owner, account) {
        const callData = this._instance.methods.initialize(name, symbol, currency, decimals, masterMinter, pauser, blacklister, owner).encodeABI();
        const contractAddress = this._instance.options.address;
        const transactionGas = this._instance.options.gas;

        const transactionObject = {
            to: contractAddress,
            from: account,
            gas: transactionGas,
            data: callData
        };

        return this._txFactory(transactionObject);
    }

    configureMinter(minter, minterAllowedAmount, account) {
        const callData = this._instance.methods.configureMinter(minter, minterAllowedAmount).encodeABI();
        const contractAddress = this._instance.options.address;
        const transactionGas = this._instance.options.gas;

        const transactionObject = {
            to: contractAddress,
            from: account,
            gas: transactionGas,
            data: callData
        };

        return this._txFactory(transactionObject);
    }

    mint(to, amount, account) {
        const callData = this._instance.methods.mint(to, amount).encodeABI();
        const contractAddress = this._instance.options.address;
        const transactionGas = this._instance.options.gas;

        const transactionObject = {
            to: contractAddress,
            from: account,
            gas: transactionGas,
            data: callData
        };

        return this._txFactory(transactionObject);
    }

    approve(spender, value, account) {
        const callData = this._instance.methods.approve(spender, value).encodeABI();
        const contractAddress = this._instance.options.address;
        const transactionGas = this._instance.options.gas;

        const transactionObject = {
            to: contractAddress,
            from: account,
            gas: transactionGas,
            data: callData
        };

        return this._txFactory(transactionObject);
    }

}

module.exports = UsdcContract;
