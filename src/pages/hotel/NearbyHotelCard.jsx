import React from "react";
import { AiFillCar } from "react-icons/ai";
import { RiChat1Fill } from "react-icons/ri";
import hotelImg from "../../assets/images/hotelImg.jpg";

const NearbyHotelCard = () => {
  return (
    <section className="nearby-hotel-card rounded-md border-2 bg-white">
      <div>
        <img src={hotelImg} alt="" className="w-full rounded-t-md" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h6 className="pb-3 text-black font-bold">Royal Blue Stone</h6>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <div>
          <p className="flex items-center gap-2">
            <RiChat1Fill />
            <span>Good</span>
            <span>7.9</span>
            <span>1168 Ratings</span>
          </p>
          <p className="flex items-center gap-2">
            <AiFillCar />
            <span>Less than a mile away</span>
          </p>
          <p>Latest Booking: 1 months 1 days</p>
        </div>
      </div>
      <hr />
      <div className="m-4">
        <button className="btn w-full bg-black hover:bg-[#333333] text-white border-0">
          Show Prices
        </button>
      </div>
    </section>
  );
};

export default NearbyHotelCard;
