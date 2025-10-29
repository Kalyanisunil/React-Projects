import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "./auth/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(removeUser());
    navigate("/");
  }

 return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
    <div className="container-fluid">
      <span className="navbar-brand">Daily Intake </span>

      <div>
        <button
          className="btn btn-light me-2"
          onClick={() => navigate("/add")}
        >
          Water Tracker
        </button>

        <button
          className="btn btn-outline-light"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
);

}

export default Navbar;
