import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CNavbar from "./components/CNavbar";

function App() {
  return (
    <Router>
      <CNavbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/account" element={<h1>Account Page</h1>} />
        <Route path="/work" element={<h1>Work Page</h1>} />
        <Route path="/blog" element={<h1>Blog Page</h1>} />
      </Routes>
    </Router>
  );
}

export default CNavbar;
