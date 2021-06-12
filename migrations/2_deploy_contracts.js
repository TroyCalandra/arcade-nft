const Arcade = artifacts.require("Arcade");

module.exports = function(deployer) {
  deployer.deploy(Arcade);
};
