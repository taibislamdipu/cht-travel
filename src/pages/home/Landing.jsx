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
      <div data-aos="fade-up" data-aos-duration="3000">
        <OurService />
      </div>

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <TopTouristSpot />
      </div>

      <Review />
      <About />
      <Footer />
    </div>
  );
};

export default Landing;
