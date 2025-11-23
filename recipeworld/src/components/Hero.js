import Carousel from "./Carousel";
import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import RecipeCards from "./RecipeCard";
import ProfileModal from "./Profileodal";

export default function Hero() {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <>
      
      <Navbar onProfileClick={() => setOpenProfile(true)} />

<ProfileModal open={openProfile} onClose={() => setOpenProfile(false)} />
      <Carousel />
      <RecipeCards />
      <Footer />
    </>
  );
}
