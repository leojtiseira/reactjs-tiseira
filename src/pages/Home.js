import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Button from 'react-bootstrap/Button'
import './styles/Home.css';
//import CocinaCeroLogoImage from '../images/CocinaCeroLogo.png';
import CocinaCeroHome from '../images/CocinaCeroHome.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <h1>Bienvenidos</h1>
              <Link className="btn btn-primary" to="/productos">
                Productos
              </Link>
            </div>
            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={CocinaCeroHome}
                alt="Logo Cocina Cero"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
