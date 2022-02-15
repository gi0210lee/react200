import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center" xs="auto">
            <Col>개인정보처리방침</Col>
            <Col>이메일주소무단수집거부</Col>
          </Row>
          <Row className="justify-content-md-center" xs="auto">
            <Col>주소</Col>
            <Col>Tel</Col>
          </Row>
          <Row className="justify-content-md-center" xs="auto">
            <Col>카피라이트</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
