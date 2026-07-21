import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <News pageSize={6}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
