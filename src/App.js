import logo from './logo.svg';
import './App.css';
import {PrimerComponente} from './components/PrimerComponente';
import {SegundoComponente} from './components/SegundoComponente';
function App() {
  return (
    <div className="App">
      <SegundoComponente/>
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
