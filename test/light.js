var Voting = artifacts.require("./Voting.sol");

function initializeGlobalVariables(accounts) {
  let ownerAccount = accounts[0]
  let notOwnerAccount = accounts[1]
  let participants = accounts.slice(1);
  return {ownerAccount, participants};
}

contract('Light successful voting', function (accounts) {
  let {ownerAccount, participants} = initializeGlobalVariables(accounts);
  let domain = [0,1];

  it("1) initilalize in SETUP state", async () => {
    let instance = await Voting.deployed();
    let state = await instance.getState({from: ownerAccount});
    assert.equal(state.valueOf(), 0, "Contract initialized at SETUP state.");
  })

  it("should set elegible participants to vote proposal", async () => {
    let instance = await Voting.deployed();
    await instance.setParticipants(participants, {from: ownerAccount});
  })

  it("2) change SETUP to SIGNUP", async () => {
    let instance = await Voting.deployed();
    await instance.setStateToSignUp("new question", domain, {from: ownerAccount});
    let afterstate = await instance.getState();
    assert.equal(afterstate.valueOf(), 1, "SIGNUP stage.");
  })


  it("should register all aproved participants", async () => {
    let instance = await Voting.deployed();
    for (i = 0; i < participants.length; i++) {
      await instance.register({from: participants[i]});
    }
  })

  it("3) change SIGNUP to VOTE", async () => {
    let instance = await Voting.deployed();
    instance.setStateToVote({from: ownerAccount});
    let state = await instance.getState();
    assert.equal(state.valueOf(), 2, "State in vote mode.")
  })

  it("should cast vote for each participant", async () => {
    let instance = await Voting.deployed();
    for (i = 0; i < participants.length; i++) {
      await instance.castVote(Math.round(Math.random()), {from: participants[i]});
    }
  })

  it("4) change VOTE to FINISHED", async () => {
    let instance = await Voting.deployed();
    await instance.setStateToFinished({from: ownerAccount});
    let state = await instance.getState();
    assert.equal(state.valueOf(), 3, "Vote state has being closed.")
  })

  it("should tally result of the proposal", async () => {
    let instance = await Voting.deployed();
    await instance.tallyResult({from: ownerAccount});
  })

});
