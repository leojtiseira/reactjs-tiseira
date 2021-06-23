import React from 'react';
import Navbar from './BarraNavegacion';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}
export default Layout;
