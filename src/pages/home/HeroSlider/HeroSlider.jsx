import React from "react";

const HeroSlider = () => {
  return (
    <div className="carousel w-full py-5">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://placeimg.com/800/200/arch"
          alt=""
          className="w-full"
        />
        <h3 className=" absolute inset-1/2 text-5xl font-semibold text-white">
          Bandarban
        </h3>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide2" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://placeimg.com/800/200/arch"
          alt=""
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide3" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://placeimg.com/800/200/arch"
          alt=""
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide4" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide1" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
