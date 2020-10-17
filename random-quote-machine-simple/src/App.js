import React from 'react';
import logo from './logo.svg';
import './App.css';

// my imports:
import QuoteBox from './QuoteBox.js';
import ChangeQuoteButton from './ChangeQuoteButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuoteBox />
        <ChangeQuoteButton />
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
