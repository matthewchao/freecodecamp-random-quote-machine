import React from "react";

class ChangeQuoteButton extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <button onClick={this.props.handleClick}>Click for a new quote</button>
    );
  }
}

export default ChangeQuoteButton;
