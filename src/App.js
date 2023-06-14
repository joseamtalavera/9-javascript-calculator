import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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



// file structure

/*
javascript-calculator/
|-- node_modules/
|-- public/
|   |-- index.html
|-- src/
|   |-- components/
|   |   |-- Button.js
|   |   |-- Display.js
|   |   |-- ButtonPanel.js
|   |   |-- Calculator.js
|   |-- App.js
|   |-- App.css
|   |-- index.js
|-- package.json
|-- package-lock.json
|-- README.m

*/