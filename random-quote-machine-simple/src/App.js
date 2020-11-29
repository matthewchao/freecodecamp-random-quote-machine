import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

// my imports:
import QuoteBox from "./components/QuoteBox.js";
import ChangeQuoteButton from "./components/ChangeQuoteButton.js";
import SocialLinks from "./components/SocialLinks.js";

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

const N = 1000000;
const lengthN = 7;
async function getMovieTitle(index) {
  return axios
    .get(
      `http://www.omdbapi.com/?i=tt${index
        .toString()
        .padStart(lengthN, "0")}&apikey=65715595`
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: null, //the index of the quote to get
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const randIndex = Math.floor(Math.random() * N) + 1;
    console.log("using index ", randIndex);

    getMovieTitle(randIndex);
    // console.log("clicked!");
    // let newIndex = null;
    // while (newIndex === null || newIndex === this.state.currIndex) {
    //   newIndex = Math.floor(Math.random() * quoteBank.length);
    // }
    // this.setState({
    //   currIndex: newIndex,
    // });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
          {this.state.currIndex != null && (
            <SocialLinks {...quoteBank[this.state.currIndex]} />
          )}
        </header>
        {/* {} */}
      </div>
    );
  }
}

export default App;
