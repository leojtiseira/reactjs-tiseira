import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../src/components/Layout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Footer from '../src/components/Footer';
import NotFound from './pages/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer'
import AppContext from './context/AppContext'
import useInitialState from './hooks/useInitialState'


function App  ()  {
const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
    <BrowserRouter>
      <Layout />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/productos" component={Productos} />
          <Route exact path="/nosotros" />
        <Route exact path="/contacto" />
        <Route path="/:product_id">
          <ItemDetailContainer />
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
