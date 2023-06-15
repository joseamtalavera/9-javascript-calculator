import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Calculator />
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