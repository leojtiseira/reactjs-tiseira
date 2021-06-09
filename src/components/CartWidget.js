import React, { Component } from 'react'
import carrito from '../assets/img/carrito.png';
import Image from 'react-bootstrap/Image'

export default class CarWidget extends Component {
    render() {
        return (
            <Image alt="" src={carrito} width="30" height="30" rounded      
      />
        )
    }
}
