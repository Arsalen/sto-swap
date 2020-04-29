pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;


contract IAS {

    struct Coin {
        address _address;
        string _symbol;
        string _name;
        uint _decimals;
    }

    struct Swap {
        Coin coin;
        bool authorized;
    }

    /**
     * @dev underlying sto.
     */
    Coin sto;

    /**
     * @dev underlying swap.
     */
    Swap swap;

    /**
     * @dev setup coin.
     * @param _address coin address.
     * @param _symbol coin symbol.
     * @param _name coin name.
     * @param _decimals coin decimals.
     */
    function setup(address _address, string calldata _symbol, string calldata _name, uint _decimals) external;

    /**
     * @dev authorize stable coin.
     * @param _auth authorized.
     */
    function authorize(bool _auth) external returns(bool);

    /**
     * @dev deposit stable coin.
     * @param _amount deposit amount.
     */
    function deposit(address _user, uint _amount) external;

    /**
     * @dev withdraw stable coin.
     * @param _amount withdraw amount.
     */
    function withdraw(address _user, uint _amount) external;

    /**
     * @dev setup event.
     */
    event Setup(address _address, string _symbol, string _name, uint _decimals);

    /**
     * @dev authorize event.
     */
    event Authorize(bool _auth);

    /**
     * @dev deposit event.
     */
    event Deposit(address _user, uint _amount);

    /**
     * @dev withdraw event.
     */
    event Withdraw(address _user, uint _amount);
}