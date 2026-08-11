import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {PrimerComponente} from './components/PrimerComponente';
import {NavbarComponente} from './components/NavbarComponente';
import { ProductList } from './components/ProductCard';
import Home from './pages/inicio';
import Products from './pages/productos';
import Contact from './pages/contacto';
import InicioSesion from './pages/inicio-sesion';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavbarComponente/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/iniciar-sesion" element={<InicioSesion />} />
      </Routes>
      <footer className="App-footer">
        <p>Todos los derechos reservados</p>
        <div className="footer-direccion">
        <a>Direccion
        <br/>
        Av La Plata 567, CABA, Argentina
        <br/>
        Teléfono: 4903-7070
        <br/>
        Email: farmaciadelplata@yahoo.com
        </a>
        </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
