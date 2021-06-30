import React from 'react';
import BarraNavegacion from './BarraNavegacion';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <BarraNavegacion/>
      {props.children}
    </React.Fragment>
  );
}
export default Layout;
