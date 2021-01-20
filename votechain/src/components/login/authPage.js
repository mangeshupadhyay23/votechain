import React from 'react';
import Web3 from 'web3';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import {VOTE_CHAIN_ABI, VOTE_CHAIN_ADDRESS} from '../../config';
import Logo from '../../assets/party_logos/home.png'

class Auth extends React.Component{

    style={
        height:"200px",
        width:"200px"
    }

    constructor(props){
        super(props)

        this.state = {
            votes:[]
        }
    }

    componentDidMount= async ()=>{
        await this.loadBlockchainData();
        await this.fetchVotes();
    }

    loadBlockchainData=async()=>{
        const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
        // const network = await web3.eth.net.getNetworkType()
        const account = await web3.eth.getAccounts()
        const votechain = new web3.eth.Contract(VOTE_CHAIN_ABI, VOTE_CHAIN_ADDRESS)

        this.setState({votechain,account});

        const voteCount = await this.state.votechain.methods.votecount().call()
        this.setState({voteCount})
    }

    fetchVotes= async()=>{
        const votes=[]
        for(var i=1; i<=this.state.voteCount; i++){
            const vote = await this.state.votechain.methods.votes(i).call();
            votes.push(vote);
        }
        this.setState({votes: [...votes]})
    }

    castVote = (e)=>{
        e.preventDefault();
        console.log(this.state.account[0])
        this.state.votechain.methods.castVote('Shivsena').send({from : this.state.account[0]})
        .once('receipt',async (receipt)=>{
            this.fetchVotes()
        });
    }

    submitHandler=(e)=>{
        e.preventDefault();
        if(document.getElementById("aadharNumber").value.length===12){
            console.log("validation proceed")
        }else{
            alert("Please enter a valid aadhar number")
        }
    }
        

    render(){
        return(
            <Container>
                <img src={Logo} alt="ashok_stambh_logo" style={this.style}/>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        {/* <Form onSubmit={this.submitHandler}>
                            <Form.Group >
                                <Form.Label style={{float:"left"}}>Aadhar No. (12 digit aadhar no)</Form.Label>
                                <Form.Control type="number" id="aadharNumber" placeholder="12-digit aadhar no" required/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form> */}
                        <Form onSubmit={this.castVote}>
                            <Form.Group >
                                <Form.Label style={{float:"left"}}>Party Name</Form.Label>
                                <Form.Control type="number" id="aadharNumber" placeholder="12-digit aadhar no" required/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        
                        <div>
                            {
                                this.state.votes.map((vote,key)=>{
                                    return(
                                        <div key={key}>
                                            <p>Voter ID: {vote[0]}</p>
                                            <p>Party: {vote[1]}</p>    
                                        </div>
                                    )                     
                                })
                            }
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default Auth;