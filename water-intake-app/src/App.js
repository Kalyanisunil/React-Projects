
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import WaterForm from "./components/WaterForm";

function App() {
 //selects the logged in user 
     const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      {user && <Navbar />/*conditional rendering if user is found then show navbar or hide it  */}
      <Routes>
        <Route path="/" element={user ? <Navigate to="/add" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={user ? <WaterForm /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
