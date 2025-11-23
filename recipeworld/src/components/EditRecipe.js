import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

export default function EditRecipe() {
  const { id } = useParams();

  const [data, setData] = useState({
    title: "Sample Recipe",
    image: "/img/bg-img/r1.jpg",
    description: "Sample description.",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h2 className="fw-bold mb-4">Edit Recipe (ID: {id})</h2>

        <form className="card p-4 shadow">
          <input
            type="text"
            className="form-control mb-3"
            value={data.title}
            name="title"
            onChange={handleChange}
          />

          <input
            type="text"
            className="form-control mb-3"
            value={data.image}
            name="image"
            onChange={handleChange}
          />

          <textarea
            className="form-control mb-3"
            rows="4"
            value={data.description}
            name="description"
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100">Save Changes</button>
        </form>
      </div>

      <Footer />
    </>
  );
}
