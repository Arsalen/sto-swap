pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "./IERC20.sol";
import "./IUSDT.sol";
import "./IAS.sol";
import "./Owned.sol";
import "./SafeMath.sol";


contract AsUSDT is IAS, Owned {

    using safeMath for uint256;

    constructor(address _address, string memory _symbol, string memory _name, uint _decimals) public {
        swap.coin._address = _address;
        swap.coin._symbol = _symbol;
        swap.coin._name = _name;
        swap.coin._decimals = _decimals;
    }

    /**
     * @dev only if authorized.
     */
    modifier authorized() {
        require(swap.authorized == true, 'unauthorized');
        _;
    }

    function setup(address _address, string calldata _symbol, string calldata _name, uint _decimals) external onlyOwner {
        sto._address = _address;
        sto._symbol = _symbol;
        sto._name = _name;
        sto._decimals = _decimals;
        emit Setup(sto._address, sto._symbol, sto._name, sto._decimals);
    }

    function authorize(bool _auth) external onlyOwner returns(bool) {
        swap.authorized = _auth;
        emit Authorize(swap.authorized);
        return(swap.authorized);
    }

    function deposit(address _user, uint _amount) external onlyOwner authorized {
        uint amount = _amount.mul(10**(sto._decimals.sub(swap.coin._decimals)));
        IUSDT(swap.coin._address).transferFrom(_user, address(this), _amount);
        IERC20(sto._address).transfer(_user, amount);
        emit Deposit(_user, amount);
    }

    function withdraw(address _user, uint _amount) external onlyOwner authorized {
        uint amount = _amount.mul(10**(sto._decimals.sub(swap.coin._decimals)));
        IERC20(sto._address).transferFrom(_user, address(this), amount);
        IUSDT(swap.coin._address).transfer(_user, _amount);
        emit Withdraw(_user, amount);
    }
}