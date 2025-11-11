

import './index.css';

import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className="body">
    
      <AppRouter></AppRouter>
     
      </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import RaceResultTable from "./components/RaceResultTable";

// function Home() {
//   return (<>
      
           
//   </>);
// }
// function Schedule() {
//   return <h2>Schedule Page</h2>;
// }
// function Results() {
//   return <RaceResultTable></RaceResultTable>;
// }

// function CNavbar() {
//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink> |{" "}
//       <NavLink to="/schedule">Schedule</NavLink> |{" "}
//       <NavLink to="/results">Results</NavLink>
//     </nav>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <CNavbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/schedule" element={<Schedule />} />
//         <Route path="/results" element={<Results />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
