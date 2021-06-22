const HDWalletProvider = require("@truffle/hdwallet-provider");
const config = require("./config");
require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: { // ropsten
      provider: () => new HDWalletProvider(config.MNEMONIC_PHRASE, config.INFURA_URI, 0, 2),
      network_id: 3, // Ropsten's id
      gas: 8000000, // Ropsten has a lower block limit than mainnet
      gasPrice: 100000000000,
    },
    goerli: { // goerli
      provider: () => new HDWalletProvider(config.MNEMONIC_PHRASE, config.INFURA_URI),
      network_id: 5, // Goerli's id
      gas: 10000000,
      gasPrice: 1000,
    }
  },
  contracts_directory: 'contracts/',
  contracts_build_directory: 'abis/',
  compilers: {
    solc: {
      version: "0.8.4",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
