import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; // Use react-bootstrap Navbar

function AppNavbar() { // Renamed to avoid conflict with imported Navbar
  return (
    // Removed className="bg-light" here
    <Navbar expand="lg" sticky="top"> {/* Use react-bootstrap Navbar */}
      <Container fluid> {/* Use Container from react-bootstrap */}
        <Navbar.Brand as={NavLink} to="/">Mia Marquez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Built-in toggler */}
        <Navbar.Collapse id="basic-navbar-nav"> {/* Built-in collapse behavior */}
          <Nav className="ms-auto"> {/* Use Nav from react-bootstrap */}
            {/* Use Nav.Link component which works well with NavLink */}
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

export default AppNavbar; // Export the renamed component
