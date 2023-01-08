import React from "react";
import Footer from "../../layout/Footer";
import About from "./About";
import HeroSlider from "./HeroSlider/HeroSlider";
import OurService from "./OurService/OurService";
import Review from "./Review/Review";
import TopTouristSpot from "./TopTouristSpot/TopTouristSpot";

const Landing = () => {
  return (
    <div>
      <HeroSlider />
      <OurService />
      <TopTouristSpot />
      <Review />
      <About />
      <Footer />
    </div>
  );
};

export default Landing;
