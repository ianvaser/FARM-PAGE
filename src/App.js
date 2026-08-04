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
        <ProductCard/>
      </header>
    </div>
  );
}

export default App;
