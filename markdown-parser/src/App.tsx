import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextInput from "./components/TextInput";
import { render } from "@testing-library/react";

class App extends React.Component {
  state = {
    input: "",
    changes: 0
  }

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) : void => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <TextInput changeHandler={this.handleChange} input={this.state.input} />
      </div>
    );
  }
}

export default App;
