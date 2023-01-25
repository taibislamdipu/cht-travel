import React from "react";
import "./HeroSection.css";
import heroimg from "../../../assets/images/heroimg.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Typed from "react-typed";
const HeroSection = () => {
  const tagLine = [
    {
      id: "1",
      text: "Explore and book in an awesome place  find, explore and book the trip find, explore more.",
    },
    {
      id: "2",
      text: "Where every journey is unforgettable",
    },
    {
      id: "3",
      text: "Travel with the best agency in the business",
    },
    {
      id: "4",
      text: "Making memories that will last forever",
    },
    {
      id: "5",
      text: "Journey beyond your wildest dreams with us",
    },
    {
      id: "6",
      text: "Experience the trip of a lifetime with us",
    },
  ];

  return (
    <div className="md:py-20 mt-20 md:pb-10 hero-section">
      <div className="md:flex customContainer">
        <div className="md:w-1/2 space-y-6 py-6" data-aos="fade-right">
          <div>
            <p className="mb-3">✈️ best experience</p>
            <h1 className="text-5xl md:text-8xl md:text-start text-center font-bold text-black">
              Your best trip with
              <span className="text-[#FED259] curvy-underline">
                {" "}
                amazing
              </span>{" "}
              travel agency
            </h1>
          </div>
          <p className="font-semibold h-14 md:text-start text-center">
            {/* <Typed
              strings={tagLine.map((item) => item?.text)}
              typeSpeed={50}
              loop
            /> */}
          </p>

          <Link to="/hotels" className="inline-block ">
            <button className="btn px-8 flex btn-primary transition items-center gap-2">
              Book trip
              <AiOutlineArrowRight size={23} />
            </button>
          </Link>
        </div>
        <div
          className="md:w-1/2 flex items-center justify-center "
          data-aos="fade-left"
        >
          <div>
            <img src={heroimg} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
