const Votechain = artifacts.require("Votechain.sol");

module.exports = function (deployer) {
  deployer.deploy(Votechain);
};
