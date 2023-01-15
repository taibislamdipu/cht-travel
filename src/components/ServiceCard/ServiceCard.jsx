import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  return (
    <div
      id="service-card"
      className="card lg:w-full hover:opacity-90 w-72 bg-base-100 hover:shadow-xl shadow-md transition"
    >
      <figure>
        <img
          src={service?.image}
          className="h-52 object-cover w-full"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title service-element">{service?.name}</h2>
        <p className="service-element">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
