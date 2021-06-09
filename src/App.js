//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNavegacion from './components/BarraNavegacion';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <BarraNavegacion/>
      <ItemListContainer greeting="Bienvenidos" />
    </div>
  );
}

export default App;

