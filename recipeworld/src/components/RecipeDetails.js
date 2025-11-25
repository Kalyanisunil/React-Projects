
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RecipeDetails() {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState({ ingredients: [], steps: [] });

  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await axios.get(`http://localhost:8080/recipes/recipe/${id}`);
        console.log("Recipe Data:", res.data);

        setRecipe(res.data);   
        console.log(res.data.cooking_time);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (!recipe) return <div className="text-center mt-5">Recipe not found</div>;

  return (
    <>
      <Navbar />
     
      <div className="container my-5">
         <Link 
                    to={`/`} 
                    className="text-decoration-none text-dark"
      > <i className="back"></i>
        </Link>
        <div className="card shadow p-4">
  <div className="row align-items-center">

    
    <div className="col-md-6 text-center">
      <img
        src={recipe.image}
        alt="Recipe"
        className="img-fluid rounded"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    <div className="col-md-6">
              <h2 className="fw-bold">{recipe.title}</h2>
               <h4 className="mt-4">Cooking Time</h4>
              <p>{recipe.cooking_time}</p>

              <h4 className="mt-4">Difficulty</h4>
              <p>{recipe.difficulty}</p>

      <h4 className="mt-4">Ingredients</h4>
      <ul>
        {recipe.ingredients.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>

      <h4 className="mt-4">Steps</h4>
      <ol>
        {recipe.steps.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
              </ol>

              
             
      
              
              <p>Created By:{recipe.user } </p>
              
    </div>

  </div>
</div>

      </div>

      <Footer />
    </>
  );
}
