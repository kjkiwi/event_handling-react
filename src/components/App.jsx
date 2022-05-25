import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    setHeadingText("Submitted");
  }

  const [bgColor, setBgColor] = useState("white");
  function colorBlack() {
    setBgColor("black");
  }

  function colorWhite() {
    setBgColor("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: bgColor }}
        onMouseOver={colorBlack}
        onMouseOut={colorWhite}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
