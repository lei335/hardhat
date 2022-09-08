// load dependencies
const { expect } = require('chai');
const { ethers } = require('hardhat');
// import utilities from Test Helpers
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { Contract } = require('hardhat/internal/hardhat-network/stack-traces/model');

// load compiled artifacts
const  Box = artifacts.require('Box');

// // start test block; test 'store' and 'retrieve'
// describe('Box2', function () {
//     before(async function () {
//         this.Box = await ethers.getContractFactory('Box2');
//     });

//     beforeEach(async function () {
//         this.box = await this.Box.deploy();
//         await this.box.deployed();
//     });

//     // test case
//     it('retrieve returns a value previously stored', async function () {
//         // store a value
//         await this.box.store(42);

//         // test if the returned value is the same one
//         // note that we need to use strings to compare the 256 bit integers
//         expect((await this.box.retrieve()).toString()).to.equal('42');
//     });
// });

// start test block
Contract('Box2', function ([ owner, other ]){
    // use large integers ('big numbers')
    const value = new BN('42');

    beforeEach(async function () {
        this.box = await Box2.new({ from: owner });
    });

    it('retrieve returns a value previously stored', async function () {
        await this.box.store(value, { from: owner });

        // use large integer comparisons
        expect(await this.box.retrieve()).to.be.bignumber.equal(value);
    });

    it('store emits an event', async function () {
        const receipt = await this.box.store(value, { from: owner });
        expectEvent(receipt, 'ValueChanged', { value: value });
    });

    it('non owner cannot store a value', async function () {
        await expectRevert(
            this.box.store(value, {from: other }),
            'Ownable: caller is not the owner',
        );
    });
});