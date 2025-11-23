import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function Navbar({ onProfileClick }) {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
      <NavLink className="navbar-brand fw-bold fs-3" to="/">
        Recipe World
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto gap-3">

          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
             My  Recipes
            </NavLink>
                  </li>

                  <li className="nav-item">
            <NavLink className="nav-link" to="/add">
              Add Recipes
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Logout
            </NavLink>
          </li>

<li className="nav-item">
  <button
    className="nav-link bg-transparent border-0 p-0"
    onClick={onProfileClick}
    style={{ cursor: "pointer" }}
  >
    <i className="bi bi-person fs-5"></i>
  </button>
</li>


           

         

        </ul>
      </div>
    </nav>
  );
}
