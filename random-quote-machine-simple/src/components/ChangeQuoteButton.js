import React from "react";
import "./ChangeQuoteButton.css";

class ChangeQuoteButton extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <button
        // className="Button"
        className={"Button " + (this.props.loading ? "loading" : "")}
        disabled={this.props.loading}
        onClick={this.props.handleClick}
      >
        Click for a new quote
      </button>
    );
  }
}

export default ChangeQuoteButton;
