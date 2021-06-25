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

// import React from "react";

// // Stateless Functional Component

// const NavBar = ({ totalCounters }) => {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <div className="navbar-brand">
//         <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
//         <span className="badge badge-pill badge-info m-2" style={{ width: 40 }}>
//           {totalCounters}
//         </span>
//         Items
//       </div>
//     </nav>
//   );
// };

// export default NavBar;