import React from "react";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotation: "Click the button to get a random quote!",
      quotationSource: "made by Matthew Chao",
    };
  }

  render() {
    return (
      <blockquote>
        <p>{this.state.quotation}</p>
        <footer>{this.state.quotationSource}</footer>
      </blockquote>
    );
  }
}

export default QuoteBox;
