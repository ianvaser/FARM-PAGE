import { ProductList } from '../components/ProductCard';
import '../stylesheets/inicio.css';
export default function Home() {
  return (
    <header className="App-header">
        <img src="https://www.colfarsl.org.ar/wp-content/uploads/2024/01/Farmacia-Jaen_27.08.15-e1544535985370.jpg" className="ventana-anuncio" alt="logo" />
        <div className='contenedor-productos'>
          <h2>Productos mas vendidos</h2>
          <div className='contenedor-productos-lista'>
          <ProductList/>
          </div>
        </div>      
      </header>
  );
}
