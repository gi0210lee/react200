import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

class HeaderAdmin extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">내정보</Nav.Link>
              <Nav.Link href="#features">알림</Nav.Link>
            </Nav>
            <Navbar.Text>홍길동님 반갑습니다</Navbar.Text>
          </Container>
        </Navbar>

        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">네이처</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">사용자관리</Nav.Link>
              <Nav.Link href="#features">리써치 프로젝트 관리</Nav.Link>
              <Nav.Link href="#pricing">소프트웨어 툴 관리</Nav.Link>
              <Nav.Link href="#pricing">데이터 소스 관리</Nav.Link>
              <Nav.Link href="#pricing">유동인구 조회</Nav.Link>
              <Nav.Link href="#pricing">서브 코드 관리</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default HeaderAdmin;
