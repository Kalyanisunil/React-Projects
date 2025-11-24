
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RecipeCards() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/recipes/public")
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
      });
  }, []);

  return (
    <div className="container my-5">
      <div className="row g-5">

        {recipes.map((r) => (
          <div key={r.id} className="col-12 col-md-4">
            <Link 
              to={`/recipe/${r.id}`} 
              className="text-decoration-none text-dark"
            >
              <div className="card shadow-sm border-0">
                <img
                  src={r.image}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{r.title}</h5>
                  <p className="card-text text-muted">
                    A delicious recipe to try at home.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}
