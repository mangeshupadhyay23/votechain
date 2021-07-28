// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Votechain {
    // creating an un assigned integer to get the total votecount
    uint public votecount = 0;

    // structure of a vote (or a block)
    struct Vote{
        uint id;
        string party;
    }

    // structure of voter list
    struct Voter{
        uint voter_id;
    }
    
    // dynamic array for voters
    mapping(uint => Voter) public voterList;

    // Here we are mapping all the votes mapping is like creating a dynamic array of votes
    // uint is id vor the Vote stored in votechain
    mapping(uint => Vote) public votes;

    event VoteCasted( uint id, string party, uint voter_id);
    // Funtion to add some default votes for testing Purposes
    constructor() public {
        castVote("Bhartiya Janta Party", 0);
        castVote("Indian National Congress", 0);
    }
    // Funtion to (Create a block) or to cast a vote here
    // passing string as a variable 
    function castVote(string memory _party,uint  voter_id) public {
        // increasing total votecount
        votecount++;
        // adding the new block inside votes array / chain
        votes[votecount] = Vote(votecount, _party);
        voterList[votecount] = Voter(voter_id);
        emit VoteCasted(votecount, _party, voter_id);
    }
}