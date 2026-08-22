import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NavbarComponente} from './components/NavbarComponente';
import Home from './pages/inicio';
import Products from './pages/productos';
import InicioSesion from './pages/inicio-sesion';
import Carrito from './pages/carrito';
import AboutUs from './pages/sobreNosotros';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavbarComponente/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/iniciar-sesion" element={<InicioSesion />} />
        <Route path="/carrito" element={<Carrito />} />
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
