
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Gadget Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/inventory-items">Inventory Items</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <Nav.Link href="/about">About Me</Nav.Link>
            </Nav>
            <Nav>
              {/* {
                user ?
                <button onClick={handleSignOut} className='btn btn-link text-white text-decoration-none'>Sign Out</button> 
                :
                <Nav.Link eventKey={2} href="/login">
                 Log in
                </Nav.Link>
              }  */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;