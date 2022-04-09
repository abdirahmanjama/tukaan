import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Tukaan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart pr-1"></i>Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user pr-1"></i>Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
