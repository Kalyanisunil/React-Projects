import React from "react";

export default function ProfileModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        background: "rgba(0,0,0,0.45)",
        zIndex: 2000,
      }}
    >
      <div
        className="bg-white rounded shadow p-4"
        style={{
          width: "400px",
          maxWidth: "90%"
        }}
      >
        <h3 className="fw-bold mb-3">Edit Profile</h3>

        {/* User details */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Enter name" />
        </div>

       

        {/* Password change */}
        <h5 className="fw-bold mt-4">Change Password</h5>

        <div className="mb-3">
          <label className="form-label">Current Password</label>
          <input type="password" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">New Password</label>
          <input type="password" className="form-control" />
        </div>

        <div className="d-flex justify-content-end gap-2 mt-3">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
