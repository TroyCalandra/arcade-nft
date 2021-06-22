module.exports = async function(callback) {
  const accounts = await web3.eth.getAccounts();
  const sale = await artifacts.require("Sales").deployed();
  const arcade = await artifacts.require("Arcade").deployed();
  
  const salesBal = await web3.eth.getBalance(sale.address);
  const totalSupply = await arcade.totalSupply();
  console.log('New Token ID: ', totalSupply.words[0])
  await arcade.mint(accounts[0],totalSupply.words[0]);
  console.log(`Token ID ${totalSupply.words[0]} assigned to account ${await arcade.ownerOf(totalSupply.words[0])}`);
  await arcade.setApprovalForAll(sale.address,true);
  console.log(`Approval assigned to ${sale.address} from ${accounts[0]}`)
  await sale.purchaseToken(totalSupply.words[0], {value: 200, from: accounts[1]});
  console.log(`${await arcade.ownerOf(totalSupply.words[0]) === accounts[1] ? 'Success!' : 'Failure!'} Token ID ${totalSupply.words[0]} was purchased by account ${await arcade.ownerOf(totalSupply.words[0])}`);
  const newSalesBal = await web3.eth.getBalance(sale.address);
  console.log(`${newSalesBal > salesBal ? 'Success!' : 'Failure!'} Sales contract balance updated from ${salesBal} to ${newSalesBal}`);
  await sale.sendTo(accounts[0], newSalesBal);
  console.log(`${await web3.eth.getBalance(sale.address) === '0' ? 'Success! Sales contract balance decreased to 0' : 'Failure! Sales contract balance did not decrease'}`);
  callback();
}