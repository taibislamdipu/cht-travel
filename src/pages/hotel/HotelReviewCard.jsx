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
        <p className="lg:w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          corrupti, nobis vitae eligendi ad officia praesentium cupiditate porro
          dolores voluptas?
        </p>
      </div>
    </div>
  );
};

export default HotelReviewCard;
