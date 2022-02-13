const Sales = artifacts.require("Sales");

module.exports = function(deployer) {
  deployer.deploy(Sales, "0x932840267B9CA7B5521d9be0dDA6fCB4e6FF6547", 200);
};
