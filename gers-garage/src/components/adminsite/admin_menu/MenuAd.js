import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function MenuAd() {
 
  
  return (

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="/">Ger's Garage Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link href="#homeadmin">Bookings</Nav.Link>
              <Nav.Link href="#invoices">Invoices</Nav.Link>
              <Nav.Link href="#listservices">Services</Nav.Link>
              <Nav.Link href="#liststaff">Staff</Nav.Link>
              </Nav>
              <Nav>
              <Nav.Link href="#">Logout</Nav.Link>
              
              </Nav>
          </Navbar.Collapse>
      </Navbar>

    
  )
}
 
export default MenuAd;