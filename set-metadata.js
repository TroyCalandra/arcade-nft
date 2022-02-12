module.exports = async function(callback) {
  const accounts = await web3.eth.getAccounts();
  const arcade = await artifacts.require("Arcade").deployed();
  
  const totalSupply = await arcade.totalSupply();
  
  const tokenURIs = [
    'https://gateway.pinata.cloud/ipfs/QmcGPmWFVA2iQcUMAZn7paFCFJgWEnQ7ignq1qnRhbDm6V/space-invaders-original.json', 
    'https://gateway.pinata.cloud/ipfs/QmcGPmWFVA2iQcUMAZn7paFCFJgWEnQ7ignq1qnRhbDm6V/space-invaders-retro.json', 
    'https://gateway.pinata.cloud/ipfs/QmcGPmWFVA2iQcUMAZn7paFCFJgWEnQ7ignq1qnRhbDm6V/space-invaders-weed.json',
    'https://gateway.pinata.cloud/ipfs/QmcGPmWFVA2iQcUMAZn7paFCFJgWEnQ7ignq1qnRhbDm6V/space-invaders-purp-aliens.json'
  ];

  for (let i = 26; i < 30; i++) {
    if (true || await arcade.tokenURI(i) === '') {
      await arcade.setTokenURI(i, tokenURIs[i%4])
      console.log('set ', i)
    }
  }
  callback();
}