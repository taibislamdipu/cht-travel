import React from "react";
import Footer from "../../layout/Footer";
import Contact from "../Contact";
import About from "./About";
import Demo from "./Demo";
import HeroSection from "./HeroSection/HeroSection";
import HeroSlider from "./HeroSlider/HeroSlider";
import OurService from "./OurService/OurService";
import Review from "./Review/Review";
import TopTouristSpot from "./TopTouristSpot/TopTouristSpot";

const Landing = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <HeroSlider />

      <div data-aos="fade-up" data-aos-duration="1000">
        <OurService />
      </div>

      <div>
        <Demo />
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <TopTouristSpot />
      </div>

      <Review />
      <About />
      <div className="pb-10">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
