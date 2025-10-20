// src/components/About.js
import React from "react";

const About = () => {
  const showEnthusiasm = () => {
    document.getElementById("about-msg").innerText =
      "Hello from React! I love this page!";
    document.getElementById("about-card").style.backgroundColor = "lightblue";
  };

  return (
    <div id="about-card" className="card p-4 mb-4">
      <h2 className="mb-3">This is the About Page</h2>
      <p id="about-msg">Click the button to see my enthusiasm!</p>
      <button className="btn btn-primary" onClick={showEnthusiasm}>
        Show Enthusiasm
      </button>
    </div>
  );
};

export default About;
