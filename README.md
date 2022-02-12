# An Arcade NFT

**Set Up Truffle Config With Multiple Accounts**

1. Create MetaMask account
2. Retrieve mnemonic phrase
3. Add `config.js` file exporting `MNEMONIC_PHRASE` and `INFURA_URI` or complete steps 4 and 5
4. Enter mnemonic phrase in place of `config.MNEMONIC_PHRASE` in `truffle-config.js`
5. Enter eth uri in place of `config.INFURA_URI` in `truffle-config.js`

**Run Purchase Flow Script**

`$ truffle exec ./return-tokens.js --network ropsten`