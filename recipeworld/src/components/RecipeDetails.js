// import React from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function RecipeDetails() {
//   const { id } = useParams(); // dynamic ID

//   const recipe = {
//     title: "Sample Recipe",
//     img: "/img/bg-img/r1.jpg",
//     description: "A tasty recipe to enjoy.",
//     ingredients: ["Salt", "Pepper", "Olive Oil"],
//     steps: ["Mix ingredients", "Cook for 10 mins"],
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="container my-5">
//         <div className="card shadow p-4">
//           <img src={recipe.img} className="img-fluid" />

//           <h2 className="fw-bold">{recipe.title}</h2>
//           <p className="text-muted">{recipe.description}</p>

//           <h4 className="mt-4">Ingredients</h4>
//           <ul>
//             {recipe.ingredients.map((i, idx) => (
//               <li key={idx}>{i}</li>
//             ))}
//           </ul>

//           <h4 className="mt-4">Steps</h4>
//           <ol>
//             {recipe.steps.map((s, idx) => (
//               <li key={idx}>{s}</li>
//             ))}
//           </ol>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RecipeDetails() {
  const { id } = useParams(); // get recipe id from URL

  const [recipe, setRecipe] = useState(null); // initially empty
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await axios.get(`http://localhost:8080/recipes/recipe/${id}`);
        setRecipe(res.data);    // store fetched recipe
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
        <div className="card shadow p-4">

          <img src={recipe.img} className="img-fluid" />

          <h2 className="fw-bold">{recipe.title}</h2>
          <p className="text-muted">{recipe.description}</p>

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
        </div>
      </div>

      <Footer />
    </>
  );
}
