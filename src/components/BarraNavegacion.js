import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from './CartWidget'

export default function BarraNavegacion() {
    return (
                <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                  <Navbar.Brand href="#home">CocoLee SN</Navbar.Brand>     
                  <CartWidget/>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="mr-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#Tienda">Shop</Nav.Link>
                        <NavDropdown title="Juegos" id="collasible-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Memoria</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Simon Dice!</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Otros</NavDropdown.Item>                        
                         </NavDropdown>
                         <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
                         <Nav.Link href="#Contacto">Contacto</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>                        
    )}