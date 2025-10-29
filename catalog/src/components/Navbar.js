import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <div style={{ background: "#eee", padding: "10px" }}>
      <button onClick={() => navigate("/add")}>Add Intake</button>
      <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;
