// src/components/Contact.js
import React from "react";

const Contact = () => {
  const showEnthusiasm = () => {
    document.getElementById("contact-msg").innerText =
      "Hello from React! I love this page!";
    document.getElementById("contact-card").style.backgroundColor = "lightblue";
  };

  return (
    <div id="contact-card" className="card p-4 mb-4">
      <h2 className="mb-3">This is the Contact Page</h2>
      <p id="contact-msg">Click the button to see my enthusiasm!</p>
      <button className="btn btn-primary" onClick={showEnthusiasm}>
        Show Enthusiasm
      </button>
    </div>
  );
};

export default Contact;
