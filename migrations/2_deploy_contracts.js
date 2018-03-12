var ECCMath = artifacts.require("./ECCMath.sol");
var Owned = artifacts.require("./Owned.sol");
var Voting = artifacts.require("./Voting.sol");
var Secp256k1 = artifacts.require("./Secp256k1.sol");

module.exports = function(deployer) {

  deployer.deploy(ECCMath);
  deployer.link(ECCMath, Secp256k1);
  deployer.deploy(Secp256k1);

  deployer.deploy(Owned);
  deployer.link(Owned, Voting);
  deployer.link(Secp256k1, Voting);
  deployer.deploy(Voting);

};
