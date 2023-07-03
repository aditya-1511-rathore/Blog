import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <nav className="App-navbar">
        <div className="App-search">
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </div>
        <div className="App-login">
          <button>Login</button>
        </div>
      </nav>

      <nav className="App-sidebar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

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
