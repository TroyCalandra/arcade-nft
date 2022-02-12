module.exports = async function(callback) {
  const accounts = await web3.eth.getAccounts();
  const arcade = await artifacts.require("Arcade").deployed();
  console.log(arcade)
  const totalSupply = await arcade.totalSupply();
  console.log('totalSupply: ', totalSupply)
  for (let i = 0; i < totalSupply; i++) {
    console.log('i: ', i)
    console.log('arcade.ownerOf(i): ', await arcade.ownerOf(i))
    if (await arcade.ownerOf(i) !== accounts[0]) {
      await arcade.safeTransferFrom(accounts[1],accounts[0],i,{from:accounts[1]})
    }
  }
  callback();
}