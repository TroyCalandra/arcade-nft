const Sales = artifacts.require("Sales");

module.exports = function(deployer) {
  deployer.deploy(Sales, "0x2952B7A89a567a89C49f3F0511Bc4946bEcA3FF1", 200);
};
