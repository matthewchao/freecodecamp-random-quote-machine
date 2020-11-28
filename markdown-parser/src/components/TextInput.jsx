import React from "react";

function TextInput(props) {
  return <textarea onChange={props.changeHandler} value={props.input} />;
}

export default TextInput;
