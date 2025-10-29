import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import WaterForm from "./components/Waterform";

function App() {
  const loggedInUser = localStorage.getItem("loggedInUser");

  return (
    <Router>
      {loggedInUser && <Navbar />}
      <Routes>
        <Route path="/" element={loggedInUser ? <Navigate to="/add" /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add" element={loggedInUser ? <WaterForm /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
