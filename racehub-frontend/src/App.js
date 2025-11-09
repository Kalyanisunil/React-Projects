import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CNavbar from "./components/CNavbar";
import TodayRace from "./components/TodayRace";
import './index.css';

function App() {
  return (
    <div className="body">
    <CNavbar />
     <TodayRace></TodayRace>
     <Router>
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes> */}
      </Router>
      </div>
  );
}

export default App;
