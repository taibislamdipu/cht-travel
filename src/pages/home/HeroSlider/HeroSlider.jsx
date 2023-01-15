import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bandarbanImg1 from "../../../assets/images/bandarban-img1.jpg";
import bandarbanImg2 from "../../../assets/images/bandarban-img2.jpg";
import bandarbanImg3 from "../../../assets/images/bandarban-img3.jpg";

const HeroSlider = () => {
  const data = [
    { id: "1" },
    // { id: "2", img: { bandarbanImg1 } },
    // { id: "3", img: { bandarbanImg1 } },
  ];

  return (
    <Carousel showThumbs={false}>
      {data.map((item) => (
        <div key={item?.id}>
          <div>
            <img className="w-full" src={bandarbanImg1} />
          </div>
          <p className="legend">Legend 1</p>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroSlider;
