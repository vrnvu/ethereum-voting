pragma solidity ^0.4.18;

contract Owned {
  address public owner;

  /* Function to dictate that only the designated owner can call a function */
  // https://ethereum.stackexchange.com/questions/15166/difference-between-require-and-assert-and-the-difference-between-revert-and-thro
  modifier onlyOwner {
    require(owner == msg.sender);
    _;
  }

  /* Initialise contract creator as owner */
  function Owned() public {
    owner = msg.sender;
  }

  /* Transfer ownership of this contract to someone else */
  function transferOwnership(address newOwner) public onlyOwner() {
    owner = newOwner;
  }
}
