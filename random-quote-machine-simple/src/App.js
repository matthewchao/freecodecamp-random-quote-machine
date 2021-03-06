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
  quote: "Click the button to get a random movie title (and its actors)!",
  author: "made by Matthew Chao",
};

const N = 100000;
const lengthN = 7;
async function getMovieActorAndTitle(index) {
  return axios
    .get(
      `http://www.omdbapi.com/?i=tt${index
        .toString()
        .padStart(lengthN, "0")}&apikey=65715595`
    )
    .then((res) => {
      console.log(res);
      if (res.data.Error)
        return Promise.reject(new Error("bad data from omdbapi"));
      return res.data;
      /* Error: "Incorrect IMDb ID."
Response: "False"
*/
    })
    .then((data) => {
      const { Actors, Title } = data;
      console.log({ Actors, Title });
      return { Actors, Title };
    })
    .catch((err) => {
      console.error(err);
    });
}

/*
The app will have a "loading" state
When the button is clicked, loading is set to true

When the promise returns, the state is set to false,
as well as the quote showing;

*/

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  state = {
    // currIndex: null, //the index of the quote to get
    // see https://reactjs.org/docs/faq-ajax.html for example
    loading: false,
    quote: null,
    author: null,
  };
  handleClick = async () => {
    const randIndex = Math.floor(Math.random() * N) + 1;
    console.log("using ID = ", randIndex);
    this.setState({
      loading: true,
    });
    console.log("Clicked, loading set to true!");
    try {
      const { Actors, Title } = await getMovieActorAndTitle(randIndex);
      this.setState({
        quote: Title,
        author: Actors,
      });
      console.log("Returned, loading set back to false!");
      this.setState({
        loading: false,
      });
    } catch (e) {
      console.log("Returned, loading set back to false!");
      this.setState({
        loading: false,
      });
      console.error(e);
    }

    // console.log("clicked!");
    // let newIndex = null;
    // while (newIndex === null || newIndex === this.state.currIndex) {
    //   newIndex = Math.floor(Math.random() * quoteBank.length);
    // }
    // this.setState({
    //   currIndex: newIndex,
    // });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <QuoteBox
            loading={this.state.loading}
            // distinguish between the initial state (where currIndex==null) vs afterward
            {...(this.state.quote === null
              ? initialQuote
              : { quote: this.state.quote, author: this.state.author })}
          />
          {/* <button onClick={this.handleClick}>Get a new quote</button> */}
          <ChangeQuoteButton
            loading={this.state.loading}
            handleClick={this.handleClick}
          />
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
