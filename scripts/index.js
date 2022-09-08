const { ethers } = require("hardhat");

async function main() {
    // code will go here

    // Retrieve accounts from the local node
    const accounts = await ethers.provider.listAccounts();
    console.log(accounts);

    // set up an ethers contract, representing our deployed Box instance
    const address = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
    const Box = await ethers.getContractFactory('Box2');
    const box = await Box.attach(address);

    // 
    await box.store(42);

    // call the retrieve() function of the deployed Box contract
    const value = await box.retrieve();
    console.log('Box value is', value.toString());

    //
    await box.store(23);

    //
    const value2 = await box.retrieve();
    console.log('Box value is',  value2.toString());
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});