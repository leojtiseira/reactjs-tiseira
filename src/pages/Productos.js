import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Productos.css';
import CocinaCeroLogo from '../images/CocinaCeroLogo.png';
import ItemListContainer from '../components/ItemListContainer';

class Productos extends React.Component {
  


  render() {
    return (
      <React.Fragment >
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={CocinaCeroLogo}
                alt="CocinaCero Logo"
              />
            </div>
          </div>
        </div>
        <div >
          <div className="Badges__buttons">
            <Link to="/new" className="btn btn-primary">
              Page Not Found
            </Link>
          </div>
          <ItemListContainer />
        </div>
      </React.Fragment >
      
    );
  }
}

export default Productos;
