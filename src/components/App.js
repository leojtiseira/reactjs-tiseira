import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import Home from '../pages/Home';
import Productos from '../pages/Productos';
import Footer from './Footer';
import NotFound from '../pages/NotFound';
import ItemDetailContainer from '../components/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <Layout/>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/nosotros"/>
          <Route exact path="/contacto"/>
          <Route path="/:product_id">
            <ItemDetailContainer/>
            </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
