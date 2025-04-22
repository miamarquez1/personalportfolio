import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 

function AppNavbar() { 
  return (
    <Navbar expand="lg" sticky="top"> {}
      <Container fluid> {}
        <Navbar.Brand as={NavLink} to="/">Mia Marquez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {}
        <Navbar.Collapse id="basic-navbar-nav"> {}
          <Nav className="ms-auto"> {}
            {}
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar; 
