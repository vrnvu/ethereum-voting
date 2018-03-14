pragma solidity ^0.4.18;

import "./Secp256k1.sol";
import "./Owned.sol";
import "./Set.sol";

contract Voting is Owned {

  // TODO Passing bytes32 is more efficient than strings
  using Set for Set.Data;

  enum State {
    SETUP, SIGNUP, VOTE, FINISHED
  }

  State public state;

  modifier inState(State expected) {
    require(state == expected);
    _;
  }

  uint[2] result;
  uint public numberOfParticipants;
  uint public numberOfRegistered;
  string public question;
  Set.Data domain;

  uint[] private votes;

  // Only to test assertion
  address[] public listParticipants;

  mapping(address => bool) public canRegister;
  mapping(address => bool) public hasVoted;
  mapping(address => bool) public hasRegistered;

  function Voting() public {
    state = State.SETUP;
    result = [0, 0];
    numberOfParticipants = 0;
    numberOfRegistered = 0;
    question = "Question not setted yet. SETUP STAGE.";
  }

  function setParticipants(address[] addresses) inState(State.SETUP) public onlyOwner {
    require(addresses.length > 0);

    numberOfParticipants = addresses.length;

    for (uint i = 0; i < numberOfParticipants; i++) {
      canRegister[addresses[i]] = true;
      listParticipants.push(addresses[i]);
    }
  }


  // Payable?,
  function setStateToSignUp(string setQuestion, uint[] setDomain) inState(State.SETUP) public onlyOwner {
    // Timers?
    require(numberOfParticipants > 0);
    state = State.SIGNUP;
    question = setQuestion;
    for(uint i = 0; i < setDomain.length; i++) {
      require(domain.insert(setDomain[i]));
    }
  }

  function setStateToVote() inState(State.SIGNUP) public onlyOwner {
    require(numberOfParticipants == numberOfRegistered);
    state = State.VOTE;
  }

  function setStateToFinished() inState(State.VOTE) onlyOwner public {
    state = State.FINISHED;
  }

  function tallyResult() inState(State.FINISHED) onlyOwner public {

    for (uint i = 0; i < votes.length; i++) {
      if (votes[i] == 0) {
        result[0] = result[0] + 1;
      }
      if (votes[i] == 1) {
        result[1] = result[1] + 1;
      }
    }
  }

  function register() inState(State.SIGNUP) public {
    require(canRegister[msg.sender] && !hasRegistered[msg.sender]);

    hasRegistered[msg.sender] = true;
    numberOfRegistered = numberOfRegistered + 1;
  }

  function castVote(uint vote) inState(State.VOTE) public {
    require(hasRegistered[msg.sender] && !hasVoted[msg.sender]);
    votes.push(vote);
    hasVoted[msg.sender] = true;
  }

  function getState() view public returns (uint) {
    if (state == State.SETUP) return 0;
    if (state == State.SIGNUP) return 1;
    if (state == State.VOTE) return 2;
    if (state == State.FINISHED) return 3;
  }

  function getListParticipants() constant public returns (address[]) {
    return listParticipants;
  }

  function getResult() inState(State.FINISHED) constant public returns (uint[2]) {
    return result;
  }

  function getDomainSize() constant public returns (uint) {
    return domain.size();
  }


}
