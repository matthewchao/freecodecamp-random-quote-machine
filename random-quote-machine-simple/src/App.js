import React from "react";
import logo from "./logo.svg";
import "./App.css";

// my imports:
import QuoteBox from "./QuoteBox.js";
import ChangeQuoteButton from "./ChangeQuoteButton.js";

const quoteBank = [
  { quote: "Hi", author: "mc" },
  { quote: "hey", author: "jose" },
  { quote: "herro" },
];

const n = quoteBank.length;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("clicked!");
    let newIndex = null;
    while (newIndex === null || newIndex === this.state.currIndex) {
      newIndex = Math.floor(Math.random() * n);
    }
    this.setState({
      currIndex: newIndex,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>will display quote with index: {this.state.currIndex}</div>
          <QuoteBox />
          {/* <button onClick={this.handleClick}>Get a new quote</button> */}
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
}

export default App;
