// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint public value1;
    uint public value2;

    function setValue1(uint _value) public {
        value1 = _value;
    }

    function setValue2(uint _value) public {
        value2 = _value;
    }

    function getValue1() public view returns (uint) {
        return value1;
    }

    function getValue2() public view returns (uint) {
        return value2;
    }
}
