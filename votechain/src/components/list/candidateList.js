import React from "react";
import { Table, Button, Container } from "react-bootstrap";
import bjp from "../../assets/party_logos/bjp.png";
import congress from "../../assets/party_logos/congress.png";
import aap from "../../assets/party_logos/aap.png";
import shivsena from "../../assets/party_logos/shivsena.png";
import bsp from "../../assets/party_logos/bsp.png";
import Web3 from "web3";
import { VOTE_CHAIN_ABI, VOTE_CHAIN_ADDRESS } from "../../config";

class CandidateList extends React.Component {
  logo_style = {
    height: "100px",
    width: "100px",
  };

  constructor(props) {
    super(props);
    this.state = {
      account: "",
    };
    this.castVote = this.castVote.bind(this);
  }

  componentDidMount = async () => {
    await this.loadBlockchainData();
  };

  loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    const votechain = new web3.eth.Contract(VOTE_CHAIN_ABI, VOTE_CHAIN_ADDRESS);
    this.setState({ votechain, account: accounts[0] });
  };

  castVote = (e) => {
    e.preventDefault();
    try {
      this.state.votechain.methods
        .castVote(e.target.value, 69)
        .send({ from: this.state.account })
        .once("receipt", (receipt) => {
          console.log(receipt);
        });
    } catch (err) {
      console.log("Error => ", err);
    }
  };

  render() {
    return (
      <Container>
        <h1>Candidates List</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Election Symbol</th>
              <th>Party</th>
              <th>Candidate Name</th>
              <th>Vote</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={bjp} alt="bjp_logo" style={this.logo_style} />
              </td>
              <td>Bhartiya Janta Party</td>
              <td>Narendra Modi</td>
              <td>
                <Button
                  variant="primary"
                  value="Bhartiya Janta Party"
                  onClick={this.castVote}
                >
                  {" "}
                  Vote{" "}
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={congress}
                  alt="congress_logo"
                  style={this.logo_style}
                />
              </td>
              <td>Indian National Congress</td>
              <td>Rahul Gandhi</td>
              <td>
                <Button
                  variant="primary"
                  value="Indian National Congress"
                  onClick={this.castVote}
                >
                  {" "}
                  Vote{" "}
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <img src={aap} alt="aap_logo" style={this.logo_style} />
              </td>
              <td>Aam Aadmi Party</td>
              <td>Arvind kejriwal</td>
              <td>
                <Button
                  variant="primary"
                  value="Aam Aadmi Party"
                  onClick={this.castVote}
                >
                  {" "}
                  Vote{" "}
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={shivsena}
                  alt="shivsen_logo"
                  style={this.logo_style}
                />
              </td>
              <td>Shivsena</td>
              <td>Uddhav Thackeray</td>
              <td>
                <Button
                  variant="primary"
                  value="Shivsena"
                  onClick={this.castVote}
                >
                  {" "}
                  Vote{" "}
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <img src={bsp} alt="bsp_logo" style={this.logo_style} />
              </td>
              <td>Bahujan Samajwadi Party</td>
              <td>Mayawati</td>
              <td>
                <Button
                  variant="primary"
                  value="Bahujan Samajwadi Party"
                  onClick={this.castVote}
                >
                  {" "}
                  Vote{" "}
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default CandidateList;
