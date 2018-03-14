pragma solidity ^0.4.18;

library Set {

  struct Data {
    mapping(uint => bool) flags;
    uint _size;
  }

  function insert(Data storage self, uint value) public returns (bool) {
    if (self.flags[value]) return false;

    self.flags[value] = true;
    self._size = self._size + 1;
    return true;
  }

  function remove(Data storage self, uint value) public returns (bool) {
    if (!self.flags[value]) return false;

    self.flags[value] = false;
    self._size = self._size - 1;
  return true;
  }

  function contains(Data storage self, uint value) public view returns (bool) {
    return self.flags[value];
  }

  function size(Data storage self) public view returns (uint) {
    return self._size;
  }

}
