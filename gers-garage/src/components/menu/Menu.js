import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
 
class Menu extends React.Component {
 
  render() {
 
  	return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Ger's Garage</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#aboutus">About Us</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link eventKey={2} href="#register">
                    Register
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
 
  		
  	)
    
  }
 
}
 
export default Menu;