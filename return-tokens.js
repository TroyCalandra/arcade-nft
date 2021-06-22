module.exports = async function(callback) {
  const accounts = await web3.eth.getAccounts();
  const arcade = await artifacts.require("Arcade").deployed();
  
  const totalSupply = await arcade.totalSupply();
  for (let i = 0; i < totalSupply; i++) {
    if (await arcade.ownerOf(i) !== accounts[0]) {
      await arcade.safeTransferFrom(accounts[1],accounts[0],i,{from:accounts[1]})
    }
  }
  callback();
}