import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import MyRules from './components/MyRules';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyButton title="Knapp 1"/>
          <MyRules/>
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
