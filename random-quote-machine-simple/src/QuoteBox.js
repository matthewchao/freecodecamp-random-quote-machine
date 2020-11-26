import React from "react";

class QuoteBox extends React.Component {
  // constructor(props) {
  //   super(props);
  //   //the initial state

  // }

  render(props) {
    return (
      <blockquote className="quote-box">
        <p>{this.props.quote}</p>
        <footer>{this.props.author}</footer>
      </blockquote>
    );
  }
}

export default QuoteBox;
