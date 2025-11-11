import { BrowserRouter, Route, Routes } from "react-router-dom";
import CNavbar from "./CNavbar";
import RaceResultTable from "./RaceResultTable";
import FeaturedSection from "./FeaturedSection";
import TicketCard from "./TicketCard";
import TodayRace from "./TodayRace";
export default function AppRouter()
{
  return (
       <>
      <CNavbar></CNavbar>
      <TicketCard></TicketCard>
      <FeaturedSection></FeaturedSection>
      
      <BrowserRouter>
           
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} /> */}
        <Route path="/results" element={<RaceResultTable />} />

        {/* Drivers */}
        {/* <Route path="/drivers/list" element={<DriversList />} />
        <Route path="/drivers/standings" element={<DriverStandings />} /> */}

        {/* Teams */}
        {/* <Route path="/teams/list" element={<TeamsList />} />
        <Route path="/teams/standings" element={<TeamStandings />} /> */}

        {/* Fantasy */}
        {/* <Route path="/fantasy" element={<Fantasy />} /> */}
      </Routes>
    </BrowserRouter>

       </>
  );
}