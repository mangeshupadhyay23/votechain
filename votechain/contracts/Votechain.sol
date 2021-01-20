// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Votechain {
    uint public votecount = 0;

    struct Vote{
        uint voter_id;
        string party;
    }

    mapping(uint => Vote) public votes;

    event VoteCasted(
        uint voter_id,
        string party
    );

    constructor() public {
        castVote("Bhartiya Janta Party");
        castVote("Indian National Congress");
    }

    function castVote(string memory _party) public {
        votecount++;
        votes[votecount] = Vote(votecount, _party);

        emit VoteCasted(votecount, _party);
    }
}