const { ethers } = require("hardhat");

async function main() {
    const Box = await ethers.getContractFactory('Box2');
    console.log('Developing Box...');
    const box = await Box.deploy();
    await box.deployed();
    console.log('Box deployed to:', box.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});