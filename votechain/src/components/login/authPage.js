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
            voteCount: 0 
        }
    }

    componentDidMount=()=>{
        this.loadBlockchainData();
    }

    loadBlockchainData=async()=>{
        const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
        // const network = await web3.eth.net.getNetworkType()
        const account = await web3.eth.getAccounts()
        const votechain = new web3.eth.Contract(VOTE_CHAIN_ABI, VOTE_CHAIN_ADDRESS)

        this.setState({votechain,account});
        console.log(this.state.votechain);
        const voteCount = await this.state.votechain.methods.votecount().call()
        const vote = await this.state.votechain.methods.votes(2).call()
        console.log(voteCount);
        console.log(vote[1]);
        
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
                        <Form onSubmit={this.submitHandler}>
                            <Form.Group >
                                <Form.Label style={{float:"left"}}>Aadhar No. (12 digit aadhar no)</Form.Label>
                                <Form.Control type="number" id="aadharNumber" placeholder="12-digit aadhar no" required/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default Auth;