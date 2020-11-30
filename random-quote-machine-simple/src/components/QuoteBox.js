import React from "react";

function QuoteBox(props) {
  return (
    <blockquote className="quote-box">
      <p>{props.loading ? "LOADING..." : props.quote}</p>
      {/* for ?? see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator */}
      <footer>{props.author ?? "<No actors provided>"}</footer>
    </blockquote>
  );
}

export default QuoteBox;
