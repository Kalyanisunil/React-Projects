import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [rightPanel, setRightPanel] = useState(false);

  // ========= Signup form state =========
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // ========= Login form state =========
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

 
  const handleSignup = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await axios.post("http://localhost:8080/recipes/signup", signupData);
      console.log("Signup success:", res.data);

      // alert("Signup successful!");
      navigate("/login"); 
    } catch (err) {
      console.error("Signup error:", err);
      alert("Signup failed!");
    }
  };

 
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/recipes/login", loginData);
      console.log("Login success:", res.data);

      
      navigate("/"); // go home
    } catch (err) {
      console.error("Login error:", err);
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="loginbody">
      <div
        className={rightPanel ? "login-container right-panel-active" : "login-container"}
        id="container"
      >
        {/* ================= SIGN UP ================= */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignup}>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>

            <input
              type="text"
              placeholder="Name"
              value={signupData.name}
              onChange={(e) =>
                setSignupData({ ...signupData, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            />

            <button type="submit">Signup</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <span>or use your account</span>

            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />

            <Link to="/">Forgot your password?</Link>

            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login</p>

              <button className="ghost" onClick={() => setRightPanel(false)}>
                Sign In
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details</p>

              <button className="ghost" onClick={() => setRightPanel(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
