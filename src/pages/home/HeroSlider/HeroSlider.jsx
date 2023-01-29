import React from "react";
import "./HeroSlider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroSlider = () => {
  const data = [
    {
      img: "https://i.ibb.co/JRG2gYH/gettyimages3.jpg",
      name: "Boga Lake, Lake in Bangladesh",
    },
    {
      img: "https://i.ibb.co/XxGkqCp/hero-Slider-Img-1.jpg",
      name: "Sangu River, River in Bangladesh",
    },
    {
      img: "https://i.ibb.co/n8ghbsH/gettyimages4.jpg",
      name: "Boga Lake, Lake in Bangladesh",
    },
    {
      img: "https://i.ibb.co/phkdk0y/gettyimages5.jpg",
      name: "Nilgiri Bandarban, A Wonderful Tourist Spot in Bangladesh",
    },
    {
      img: "https://i.ibb.co/0ytzgJj/gettyimages6.jpg",
      name: "Natural landscape pictures in Bandarban",
    },
  ];

  return (
    <div className="md:pt-32 pt-20 lg:mx-40 px-4">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        swipeable={true}
        stopOnHover={true}
        showThumbs={false}
        emulateTouch={true}
      >
        {data.map((item, i) => (
          <div key={i}>
            <div>
              <img
                className="carousel-img w-full object-cover"
                src={item?.img}
              />
            </div>
            <p className="legend">{item?.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
