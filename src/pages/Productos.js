import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Productos.css';
import CocinaCeroLogo from '../images/CocinaCeroLogo.png';
import ItemListContainer from '../components/ItemListContainer';

class Productos extends React.Component {

  render() {
    return (
      <React.Fragment >
        <div >
          <div >
            <div >
              <img
                src={CocinaCeroLogo}
                alt="CocinaCero Logo"
              />
            </div>
          </div>
        </div>
        <div >
          <div >
            <Link to="/new" className="btn btn-primary">
              No se encontro producto
            </Link>
          </div>
          <ItemListContainer />
        </div>
      </React.Fragment >

    );
  }
}

export default Productos;
