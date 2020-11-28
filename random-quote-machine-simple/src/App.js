import React from "react";
// import logo from "./logo.svg";
import "./App.css";

// my imports:
import QuoteBox from "./QuoteBox.js";
import ChangeQuoteButton from "./ChangeQuoteButton.js";

const quoteBank = [
  { quote: "Hi", author: "mc" },
  { quote: "hey", author: "jose" },
  { quote: "herro" },
];

// const n = quoteBank.length;

const initialQuote = {
  quote: "Click the button to get a random quote!",
  author: "made by Matthew Chao",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: null, //the index of the quote to get
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // console.log("clicked!");
    let newIndex = null;
    while (newIndex === null || newIndex === this.state.currIndex) {
      newIndex = Math.floor(Math.random() * quoteBank.length);
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
          <QuoteBox
            // distinguish between the initial state (where currIndex==null) vs afterward
            {...(this.state.currIndex === null
              ? initialQuote
              : quoteBank[this.state.currIndex])}
          />
          {/* <button onClick={this.handleClick}>Get a new quote</button> */}
          <ChangeQuoteButton handleClick={this.handleClick} />
          {/* <img src={logo} className="App-logo" alt="logo" />
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
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
