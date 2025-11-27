import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Hero from "./components/Hero";
import Login from "./components/Login";
import AddRecipe from "./components/AddRecipe";
import RecipeDetails from "./components/RecipeDetails";
import Profile from "./components/Profile";
import EditRecipe from "./components/EditRecipe";
import RecipeWorldLanding from "./components/RecipeWorldLanding";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>

     
         <Route 
          path="/" 
          element={
             <RecipeWorldLanding />  
          } 
        /> 

       
        <Route 
          path="/login" 
          element={<Login onLogin={() => setIsLoggedIn(true)} />} 
        /> 

        <Route path="/" element={<RecipeWorldLanding />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/login" element={<Login></Login>} />
         <Route path="/add" element={<AddRecipe />} />
        
        <Route path="/recipe/:id" element={<RecipeDetails />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/edit/:id" element={<EditRecipe />} />



      </Routes>
    </BrowserRouter>
  );
}
