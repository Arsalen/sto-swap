pragma solidity ^0.5.0;


contract IDAI {

    function canCall(address src, address dst, bytes4 sig) public view returns (bool);
    event LogSetAuthority(address indexed authority);
    event LogSetOwner(address indexed owner);
    event LogNote(bytes4 indexed sig, address indexed guy, bytes32 indexed foo, bytes32 indexed bar, uint wad, bytes fax ) anonymous;
    event Approval(address indexed src, address indexed guy, uint wad);
    event Transfer(address indexed src, address indexed dst, uint wad);
    function totalSupply() public view returns (uint);
    function balanceOf(address guy) public view returns (uint);
    function allowance(address src, address guy) public view returns (uint);
    function approve(address guy, uint wad) public returns (bool);
    function transfer(address dst, uint wad) public returns (bool);
    function transferFrom(address src, address dst, uint wad) public returns (bool);
    event Mint(address indexed guy, uint wad);
    event Burn(address indexed guy, uint wad);
}
