import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CNavbar from "./components/CNavbar";
import TodayRace from "./components/TodayRace";
import './index.css';
import TicketCard from "./components/TicketCard";

import FeaturedSection from "./components/FeaturedSection";

function App() {
  return (
    <div className="body">
    <CNavbar />
      <TodayRace></TodayRace>
      <TicketCard></TicketCard>
     
      <FeaturedSection></FeaturedSection>
     <Router>
      
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
          <Route path="/subscribe" element={<Subscribe />} /> */}
          {/* <Route path="/tickets" element={<></>}/> */}
      </Routes>
      </Router>
      </div>
  );
}

export default App;
