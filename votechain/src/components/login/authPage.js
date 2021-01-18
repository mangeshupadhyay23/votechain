import React from 'react';
import Web3 from 'web3';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import Logo from '../../assets/party_logos/home.png'

class Auth extends React.Component{

    style={
        height:"200px",
        width:"200px"
    }

    componentDidMount=()=>{
        this.loadBlockchainData();
    }

    loadBlockchainData=async()=>{
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
        const network = await web3.eth.net.getNetworkType()
        const account = await web3.eth.getAccounts()
        console.log(account)
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