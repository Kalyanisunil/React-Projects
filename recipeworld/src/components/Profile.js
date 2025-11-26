import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Profile() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const res = await axios.get(
        `http://localhost:8080/recipes/user/${userId}`
      );

      setRecipes(res.data);
    } catch (err) {
      console.error("Error fetching recipes:", err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="fw-bold mb-4">My Recipes</h2>

        <div className="row g-4">
          {recipes.length === 0 && <p>No recipes found.</p>}

          {recipes.map((r) => (
            <div className="col-12 col-md-4" key={r.id}>
              <div className="card shadow-sm border-0">
                <img src={r.image} className="card-img-top" alt={r.title} />

                <div className="card-body">
                  <h5 className="card-title">{r.title}</h5>

                  <div className="d-flex gap-2">
                    <Link to={`/edit/${r.id}`} className="btn btn-warning btn-sm">
                      Edit
                    </Link>
                    <button className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
