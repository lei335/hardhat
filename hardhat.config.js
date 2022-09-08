require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

const { alchemyApiKey, mnemonic } = require('./secrets.json');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/aP5hoVmBaQneISSr8zUdUmKXPIOCuOdb',
      accounts: {mnemonic: mnemonic },
    },
  },
};
