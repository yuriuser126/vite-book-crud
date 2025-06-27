// 'useclient'

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="/">홈</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">홈</Link> */}
            {/* <Link to="/JoinForm">회원가입</Link> */}
            <Nav.Link href="/JoinForm">회원가입</Nav.Link>
            <Nav.Link href="/LoginForm">로그인</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header