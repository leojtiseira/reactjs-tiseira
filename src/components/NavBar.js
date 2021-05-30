import React from 'react'
import {Navbar} from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar bg="light">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Brand href="#tienda">Tienda</Navbar.Brand>
        <Navbar.Brand href="#nosotros">Nosotros</Navbar.Brand>
        <Navbar.Brand href="#contacto">Contacto</Navbar.Brand>
      </Navbar>
    )
}