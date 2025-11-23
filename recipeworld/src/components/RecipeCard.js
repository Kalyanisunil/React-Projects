// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

// const recipes = [
//   { id: 1, title: "Creamy Shrimp", img: "/img/bg-img/r1.jpg" },
//   { id: 2, title: "Turkish Hamburger", img: "/img/bg-img/r2.jpg" },
//   { id: 3, title: "Mixed Fruit Juice", img: "/img/bg-img/r3.jpg" },
//   { id: 4, title: "Pumpkin Cheese Soup", img: "/img/bg-img/r4.jpg" },
//   { id: 5, title: "Mexican Egg Sandwich", img: "/img/bg-img/r5.jpg" },
//   { id: 6, title: "Breakfast Acai Bowl", img: "/img/bg-img/r6.jpg" }
// ];

// export default function RecipeCards() {
//   return (
//     <div className="container my-5">
//       <div className="row g-5">

//         {recipes.map((r) => (
//           <div key={r.id} className="col-12 col-md-4">
//             <Link
//               to={`/recipe/${r.id}`}
//               className="text-decoration-none text-dark"
//             >
//               <div className="card shadow-sm border-0">
//                 <img
//                   src={r.img}
//                   className="card-img-top"
//                   style={{ height: "220px", objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title fw-semibold">{r.title}</h5>
//                   <p className="card-text text-muted">
//                     A delicious recipe to try at home.
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }

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
                  src={r.img}
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
