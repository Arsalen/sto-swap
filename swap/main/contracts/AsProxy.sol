pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "./IAS.sol";
import "./Owned.sol";


contract AsProxy is Owned {

    mapping(bytes32 => address) swaps;

    /**
     * @dev set atomic-swap.
     * @param _name atomic-swap.
     * @param _address atomic-swap address.
     */
    function set(string memory _name, address _address) public onlyOwner {
        bytes32 nameHash = keccak256(abi.encode(_name));
        swaps[nameHash] = _address;
    }

    /**
     * @dev authorize stable token.
     * @param _name atomic-swap.
     * @param _auth authorized.
     */
    function authorize(string memory _name, bool _auth) public onlyOwner {
        bytes32 nameHash = keccak256(abi.encode(_name));
        IAS(swaps[nameHash]).authorize(_auth);
    }

    /**
     * @dev deposit stable token.
     * @param _name deposit atomic-swap.
     * @param _amount deposit amount.
     */
    function deposit(string memory _name, uint _amount) public {
        bytes32 nameHash = keccak256(abi.encode(_name));
        address _user = msg.sender;
        IAS(swaps[nameHash]).deposit(_user, _amount);
    }
}