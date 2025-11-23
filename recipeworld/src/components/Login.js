import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [rightPanel, setRightPanel] = useState(false);

  return (
    <div className="loginbody">
      <div
        className={rightPanel ? "login-container right-panel-active" : "login-container"}
        id="container"
      >
        {/* Sign Up */}
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <Link to="/">
              <button type="button">Signup</button>
            </Link>
          </form>
        </div>

        {/* Sign In */}
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="/">Forgot your password?</Link>

            <Link to="/">
              <button type="button">Sign In</button>
            </Link>
          </form>
        </div>

        {/* Overlay */}
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
