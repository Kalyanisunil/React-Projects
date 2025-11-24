import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AddRecipe() {
  const [inputs, setInputs] = useState({
    title: "",
    image: "",
    description: "",
    ingredients: "",
    steps: "",
  });

 function handleChange(e) {
  const { name, value } = e.target;

  setInputs({
    ...inputs,
    [name]: value,
  });
}



async function handleSubmit(e) {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:8080/recipes/addRecipe",
      inputs,  // send JSON
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    alert("Recipe Added Successfully!");

  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  }
}


  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h2 className="mb-4 fw-bold text-center">Add New Recipe</h2>

        <form className="card p-4 shadow" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Recipe Title"
            className="form-control mb-3"
            onChange={handleChange}
          />
<input
  type="text"
  name="image"
  placeholder="Image URL"
  className="form-control mb-3"
  onChange={handleChange}
/>
         

          <textarea
            name="ingredients"
            placeholder="Ingredients (comma-separated)"
            className="form-control mb-3"
            rows="3"
            onChange={handleChange}
          />

          <textarea
            name="steps"
            placeholder="Steps"
            className="form-control mb-3"
            rows="4"
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100">Add Recipe</button>
        </form>
      </div>

      <Footer />
    </>
  );
}
