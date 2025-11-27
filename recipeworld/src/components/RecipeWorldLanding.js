import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Link } from "react-router-dom";
// Assuming you have a default Footer component in "../components/Footer"
import Footer from "../components/Footer"; 

const RecipeWorldLanding = () => {
  // FIX 1: Initialize 'recipes' state as an empty ARRAY
  // The API call is expected to return a list of recipes, so the state must be an array.
  const [recipes, setRecipes] = useState([]); 
  
  // The 'recipe' state for a single recipe is not needed here, 
  // as the landing page displays multiple recipes.
  // const [recipe, setRecipe] = useState({ ingredients: [], steps: [] }); // REMOVED

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added state for error handling

  // FIX 2: Corrected the useEffect hook
  useEffect(() => {
    async function fetchRecipes() { // Renamed function for clarity (fetching multiple recipes)
      try {
        const res = await axios.get(`http://localhost:8080/recipes/public`);
        console.log("Recipes Data:", res.data);

        // FIX 3: Set the state with the list of recipes
        setRecipes(res.data); 
        
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError("Failed to load recipes. Please check the backend server.");
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
    // FIX 4: Corrected the dependency array to run only ONCE on mount
  }, []); // Empty array [] means it runs once

  // --- Helper Component (moved inside the main component or defined outside for clean separation) ---
  // The RecipeCard logic is now directly integrated into the map function for simplicity.
  // We will keep the Login button linking to /login as per your current setup, 
  // but typically public recipes link to their own detail page.

  // --- Render Logic for Loading/Error States ---
  const renderRecipeContent = () => {
    if (loading) {
      return (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading Recipes...</p>
        </div>
      );
    }

    if (error) {
      return <div className="alert alert-danger text-center my-5">{error}</div>;
    }

    // FIX 5: Handle case where no recipes are returned (recipes.length === 0)
    if (recipes.length === 0) {
      return <div className="text-center my-5 text-muted">No public recipes found.</div>;
    }

    return (
      <div className="row">
        {/* FIX 6: Map over 'recipes' state */}
        {recipes.map((r) => (
          <div key={r.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <Link 
              // FIX 7: Link should typically go to a detail page (e.g., /recipes/${r.id})
              // Keeping it as /login for now based on your initial code, but this is unusual.
              to={`/recipes/${r.id}`} 
              className="text-decoration-none text-dark"
            >
              <div className="card shadow-sm border-0 h-100">
                <img
                  src={r.image || 'https://via.placeholder.com/400x220?text=Recipe+Image'} // Fallback image
                  alt={r.title}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x220?text=Image+Not+Found'; }} // Error handler
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{r.title}</h5>
                  {/* Assuming r.description is available from the API */}
                  <p className="card-text text-muted mb-auto">
                    {r.description || "A delicious recipe to try at home."} 
                  </p>
                  {/* <small className="text-primary mt-3">r</small> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  };
  // --- END Render Logic ---


  return (
    <div className="d-flex flex-column min-vh-100"> 

      {/* 2. Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#top">
            Recipe World
          </a>
          <div className="ms-auto">
            <Link to="/login" className="btn btn-outline-light" type="button">
              Login
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow-1">
        
     
        <div 
          className="text-center bg-image d-flex align-items-center justify-content-center"
          style={{
            height: '100vh', 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1627907228175-2bf846a303b4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            padding: 0, 
            margin: 0,
            width: '100vw', 
          }}
        >
          <div className="p-5"> 
            <h1 className="mb-3 display-4 fw-bold">Discover Your Next Favorite Meal</h1>
            <p className="mb-4 lead">Simple, delicious recipes from around the world.</p>
            <a className="btn btn btn-lg" href="#recipes" role="button" style={{backgroundColor:"orange"}}>
              Browse Recipes
            </a>
          </div>
        </div>

        {/* 4. Recipe Cards Section */}
        <div className="container my-5" id="recipes">
          <h2 className="text-center mb-4">Featured Recipes</h2>
          
          {/* Render the content based on state */}
          {renderRecipeContent()}

          {/* <div className="col-12 mt-4">
            <p className="text-center text-muted">
              **Note: Data is loaded from `http://localhost:8080/recipes/public`.**
            </p>
          </div> */}
        </div>

      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  );
};

export default RecipeWorldLanding;