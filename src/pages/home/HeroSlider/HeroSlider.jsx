import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroSlider = () => {
  const data = [
    {
      id: "1",
      img: "https://i.ibb.co/XxGkqCp/hero-Slider-Img-1.jpg",
      name: "Sangu River, River in Bangladesh",
    },
    {
      id: "2",
      img: "https://i.ibb.co/Nt8hm0n/hero-Slider-Img-2.jpg",
      name: "Boga Lake, Lake in Bangladesh",
    },
    {
      id: "3",
      img: "https://i.ibb.co/Ht4yMbt/hero-Slider-Img-3.jpg",
      name: "Amiakhum WaterFall",
    },
  ];

  return (
    <div className="mt-10 lg:mx-40 px-4">
      <Carousel showThumbs={false}>
        {data.map((item) => (
          <div key={item?.id}>
            <div>
              <img className="w-full h-80 object-cover" src={item?.img} />
            </div>
            <p className="legend">{item?.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
