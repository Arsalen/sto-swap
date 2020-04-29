pragma solidity ^0.5.0;


contract IUSDT {

    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);
    function totalSupply() public view returns (uint);
    function balanceOf(address account) public view returns (uint);
    function transfer(address to, uint value) public returns (bool);
    function allowance(address owner, address spender) public view returns (uint);
    function transferFrom(address from, address to, uint value) public;
    function approve(address spender, uint value) public returns (bool);
}
