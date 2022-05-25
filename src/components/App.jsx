import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [mouseActive, setMouseActive] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function whenHovering() {
    setMouseActive(true);
  }

  function notHovering() {
    setMouseActive(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={
          mouseActive
            ? { backgroundColor: "black" }
            : { backgroundColor: "white" }
        }
        onMouseOver={whenHovering}
        onMouseOut={notHovering}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
