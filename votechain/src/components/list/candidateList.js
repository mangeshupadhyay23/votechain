import React from 'react';
import {Table, Button, Container} from 'react-bootstrap'
import bjp from '../../assets/party_logos/bjp.png';
import congress from '../../assets/party_logos/congress.png';
import aap from '../../assets/party_logos/aap.png';
import shivsena from '../../assets/party_logos/shivsena.png';
import bsp from '../../assets/party_logos/bsp.png'

class CandidateList extends React.Component{

    logo_style={
        height:"100px",
        width:"100px"
    }
    render(){
        return(
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
                            <td><img src={bjp} alt="bjp_logo" style={this.logo_style}/></td>
                            <td>Bhartiya Janta Party</td>
                            <td>Narendra Modi</td>
                            <td><Button variant="primary"> Vote </Button></td>
                        </tr>
                        <tr>
                            <td><img src={congress} alt="congress_logo" style={this.logo_style}/></td>
                            <td>Indian National Congress</td>
                            <td>Rahul Gandhi</td>
                            <td><Button variant="primary"> Vote </Button></td>
                        </tr>
                        <tr>
                            <td><img src={aap} alt="aap_logo" style={this.logo_style}/></td>
                            <td>Aam Aadmi Party</td>
                            <td>Arvind kejriwal</td>
                            <td><Button variant="primary"> Vote </Button></td>
                        </tr>
                        <tr>
                            <td><img src={shivsena} alt="shivsen_logo" style={this.logo_style}/></td>
                            <td>Shivsena</td>
                            <td>Uddhav Thackeray</td>
                            <td><Button variant="primary"> Vote </Button></td>
                        </tr>
                        <tr>
                            <td><img src={bsp} alt="bsp_logo" style={this.logo_style}/></td>
                            <td>Bahujan Samajwadi Party</td>
                            <td>Mayawati</td>
                            <td><Button variant="primary"> Vote </Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default CandidateList;