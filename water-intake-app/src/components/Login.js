import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./auth/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      dispatch(setUser(user.name));
      navigate("/add");
    } else {
      setError("Invalid email or password");
    }
  }

 return (
  <div className="container mt-5" style={{ maxWidth: "400px" }}>
    <div className="card p-4 shadow">
      <h2 className="text-center mb-4">Login</h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="btn btn-primary w-100" onClick={handleLogin}>
        Login
      </button>

      <button
        className="btn btn-link mt-3 w-100"
        onClick={() => navigate("/register")}
      >
        Go to Register
      </button>
    </div>
  </div>
);

}

export default Login;
