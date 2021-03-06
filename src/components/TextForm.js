import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let handleUpClick = () => {
    console.log("Click Working");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted in Uppercase...", "success");
  };
  let handleLoClick = () => {
    console.log("Lower Click Working");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted in Lowercase...", "success");
  };
  let handleClClick = () => {
    console.log("clear Click Working");
    let newText = "";
    setText(newText);
    props.showAlert("Cleared...", "success");
  };
  let handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Text Coied in Clipboard...", "success");
  };
  let handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Deleted Extra Space...", "success");
  };

  let handleOnChange = (event) => {
    console.log("Click Working");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-3">
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-success mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          className="btn btn-success mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleLoClick}
        >
          Convert To Lowercase
        </button>
        <button
          className="btn btn-success mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleClClick}
        >
          Clear
        </button>
        <button
          className="btn btn-success mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="btn btn-success mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <p>
          {" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to Read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
