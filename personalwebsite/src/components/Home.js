// src/components/Home.js
import React from "react";

const Home = () => {
  const showEnthusiasm = () => {
    document.getElementById("home-msg").innerText =
      "Hello from React! I love this page!";
    document.getElementById("home-card").style.backgroundColor = "lightblue";
    console.log("Home component loaded");
  };

  return (
    <div id="home-card" className="card p-4 mb-4">
      <h2 className="mb-3">This is the Home Page</h2>
      <p id="home-msg">Click the button to see my enthusiasm!</p>
      <button className="btn btn-primary" onClick={showEnthusiasm}>
        Show Enthusiasm
      </button>
    </div>
  );
};

export default Home;
