// 1. add to wish list - should have
// 2. currency converter - should have

import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import hotelImgSmall from "../../assets/images/hotelImgSmall.jpg";

const SuggestedHotelCard = ({ hotel_name, address, price }) => {
  return (
    <section className="grid grid-cols-8 gap-3 border hover:shadow-lg transition p-3">
      <div className="col-span-2">
        <div>
          <img className="max-h-44 w-full" src={hotelImgSmall} alt="" />
        </div>
      </div>
      <div className="col-span-4 space-y-3 border-r">
        <h3 className="text-base font-semibold">{hotel_name}</h3>
        <p>{address} | Map</p>
        <ul className="space-y-1">
          <li className="flex items-center gap-1">
            <BsFillInfoCircleFill />
            Swimming Pool
          </li>
          <li className="flex items-center gap-1">
            <BsFillInfoCircleFill />
            Free Airport Shuttle
          </li>
          <li className="flex items-center gap-1">
            <BsFillInfoCircleFill />
            Pets Allowed
          </li>
        </ul>
      </div>
      <div className="col-span-2 space-y-2 text-center">
        <div>
          <h2 className="text-4xl font-bold">${price}</h2>
          <p>
            <small>per night</small>
          </p>
        </div>
        <button className="btn">Book Now</button>
        <p>View Available Rooms</p>
      </div>
    </section>
  );
};

export default SuggestedHotelCard;
