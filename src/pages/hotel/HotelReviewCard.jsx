import React from "react";

const HotelReviewCard = () => {
  return (
    <div className="grid grid-cols-6 pb-4">
      <div className="col-span-2 lg:col-span-1">
        <p>8/10</p>
        <p>By: Enrique</p>
      </div>
      <div className="col-span-4 bg-slate-200 p-4 lg:col-span-5">
        <div className="flex items-center justify-between">
          <h6 className="text-base font-semibold lg:text-xl">Exceptional</h6>
          <span className="text-xs lg:text-base">Dec 29, 2022</span>
        </div>
        <p className="lg:w-1/2 text-justify">
          This hotel was an excellent choice for my recent stay. The hotel is
          conveniently located next to the bus station, making it easy to
          explore the city. The room was spacious and clean, and the bed was
          incredibly comfortable. The staff was friendly and attentive, and they
          were always willing to help with any request. The breakfast buffet was
          delicious and offered a wide variety of options. Overall, I had a
          great experience at this hotel in Bandarban and would definitely stay
          there again.
        </p>
      </div>
    </div>
  );
};

export default HotelReviewCard;
