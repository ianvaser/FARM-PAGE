import { ProductList } from '../components/ProductCard';
import '../stylesheets/inicio.css';
export default function Home() {
  return (
    <header className="App-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNBbpsia8TSNMZfz4vPPx_ieOyziBOwJSNZTm4Mf1Lov3w4P4QPRvgHA&s=10" className="ventana-anuncio" alt="logo" />
        <div className='contenedor-productos'>
          <h2>Productos mas vendidos</h2>
          <div className='contenedor-productos-lista'>
          <ProductList/>
          </div>
        </div>      
      </header>
  );
}
