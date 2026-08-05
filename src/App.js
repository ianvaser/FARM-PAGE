import logo from './logo.svg';
import './App.css';
import {PrimerComponente} from './components/PrimerComponente';
import {SegundoComponente} from './components/SegundoComponente';
import { ProductCard } from './components/ProductCard';
function App() {
  return (
    <div className="App">
      <SegundoComponente/>
      <header className="App-header">
        <img src={logo} className="ventana-anuncio" alt="logo" />
        <div className='contenedor-productos'>
          <h2>Productos mas vendidos</h2>
          <ProductCard/>
        </div>      
      </header>
      <footer className="App-footer">
        <p>Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
