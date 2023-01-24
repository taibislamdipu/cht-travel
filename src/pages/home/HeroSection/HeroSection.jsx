import React from "react";
import "./HeroSection.css";
import heroimg from "../../../assets/images/heroimg.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="md:py-20 pt-4 pb-10 hero-section">
      <div className="md:flex customContainer">
        <div className="md:w-1/2 space-y-6" data-aos="fade-right">
          <div>
            <p className="mb-3">✈️ best experience</p>
            <h1 className="text-4xl md:text-8xl font-bold text-black">
              Your best trip <br /> with
              <span className="text-[#FED259] curvy-underline">
                {" "}
                amazing
              </span>{" "}
              <br /> travel agency
            </h1>
          </div>
          <p className="font-semibold">
            Explore and book in an awesome place <br /> find, explore and book
            the trip find, explore more.
          </p>

          <Link to="/hotels" className="inline-block ">
            <button className="btn px-8 flex btn-primary transition items-center gap-2">
              Book trip
              <AiOutlineArrowRight size={23} />
            </button>
          </Link>
        </div>
        <div className="md:w-1/2" data-aos="fade-left">
          <div>
            <img src={heroimg} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
