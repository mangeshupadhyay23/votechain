import React from "react";
import Web3 from "web3";
import { VOTE_CHAIN_ABI, VOTE_CHAIN_ADDRESS } from "../../config";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voteCount: 0,
      voteList: [],
      voterList: [],
    };
  }

  loadBlockChainData = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const voteChain = new web3.eth.Contract(VOTE_CHAIN_ABI, VOTE_CHAIN_ADDRESS);
    const voteCount = await voteChain.methods.votecount().call();
    this.setState({ voteChain, voteCount });
  };

  fetchVoteData = async () => {
    const voteList = [];
    const voterList = [];
    for (var i = 1; i <= this.state.voteCount; i++) {
      const vote = await this.state.voteChain.methods.votes(i).call();
      voteList.push(vote);
    }
    for (var i = 1; i <= this.state.voteCount; i++) {
      const vote = await this.state.voteChain.methods.voterList(i).call();
      voterList.push(vote);
    }
    this.setState({ voteList, voterList });
  };

  componentDidMount = async () => {
    await this.loadBlockChainData();
    await this.fetchVoteData();
  };

  render() {
    return (
      <div>
        <p>Total Votes Casted : {this.state.voteCount}</p>
        <p>Voting List</p>
        <ul>
          {this.state.voteList.map((vote) => {
            return (
              <li key={vote.id}>
                {vote.id} {vote.party}
              </li>
            );
          })}
        </ul>
        <p>Voter List</p>
        <ul>
          {this.state.voterList.map((voter, index) => {
            return <li key={index}>{voter}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Admin;
