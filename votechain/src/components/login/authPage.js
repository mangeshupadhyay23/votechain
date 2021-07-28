import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/party_logos/home.png";

class Auth extends React.Component {
  style = {
    marginLeft: "40%",
    width: "20%",
  };

  render() {
    return (
      <Container>
        <img src={Logo} alt="ashok_stambh_logo" style={this.style} />
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form>
              <Form.Group>
                <Form.Control
                  type="number"
                  id="aadharNumber"
                  placeholder="10-digit mobile no"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default Auth;
