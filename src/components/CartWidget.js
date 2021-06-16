import React, { Component } from 'react'
import carrito from '../images/carrito.png';
import Image from 'react-bootstrap/Image'

export default class CarWidget extends Component {
    render() {
        return (
            <Image alt="" src={carrito} width="25" height="25" />
        )
    }
}
