import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card border rounded hover:shadow-lg">
      <div>
        <img src={service?.image} className="w-full service-card-img" alt="" />
      </div>
      <div className="p-2">
        <h2 className="font-bold text-2xl">{service?.name}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae
          illum rem ad blanditiis voluptatibus vel laboriosam eveniet.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
