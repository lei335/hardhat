// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// use openzeppelin upgrades plugins
contract Box {
    uint256 private _value;

    event ValueChanged(uint256 value);

    function store(uint256 value) public {
        _value = value;
        emit ValueChanged(value);
    }

    function retrieve() public view returns (uint256) {
        return _value;
    }
}