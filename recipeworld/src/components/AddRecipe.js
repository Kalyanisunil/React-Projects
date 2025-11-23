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
    const { name, type, files, value } = e.target;

    setInputs({
      ...inputs,
      [name]: type === "file" ? files[0] : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Create FormData
    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("image", inputs.image);   // file
    formData.append("description", inputs.description);
    formData.append("ingredients", inputs.ingredients);
    formData.append("steps", inputs.steps);

    try {
      const res = await axios.post(
        "http://localhost:8080/recipes/addRecipe",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Recipe Added:", res.data);
      alert("Recipe Added Successfully!");

    } catch (err) {
      console.error("Error adding recipe:", err);
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
            type="file"
            name="image"
            accept="image/*"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Short description"
            className="form-control mb-3"
            rows="2"
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
