import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "./auth/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  function handleLogout() {
    dispatch(removeUser());
    navigate("/");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <div className="container-fluid">
        <span className="navbar-brand">Daily Intake</span>

        <div>
          <button
            className="btn btn-light me-2"
            onClick={() => navigate("/add")}
          >
            Water Tracker
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="btn btn-outline-danger btn-sm"
          >
            Logout
          </button>

          {showModal && (
            <div
              className="modal fade show"
              style={{
                display: "block",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Confirm Logout</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowModal(false)}
                    ></button>
                  </div>

                  <div className="modal-body">
                    <p>Are you sure you want to logout?</p>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        handleLogout();
                        setShowModal(false);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
