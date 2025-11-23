import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const userRecipes = [
  { id: 1, title: "Creamy Shrimp", img: "/img/bg-img/r1.jpg" },
  { id: 2, title: "Fruit Juice", img: "/img/bg-img/r3.jpg" },
];

export default function Profile() {
  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h2 className="fw-bold mb-4">My Recipes</h2>

        <div className="row g-4">
          {userRecipes.map((r) => (
            <div className="col-12 col-md-4" key={r.id}>
              <div className="card shadow-sm border-0">
                <img src={r.img} className="card-img-top" />

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
