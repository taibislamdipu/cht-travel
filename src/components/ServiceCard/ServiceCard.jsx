import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  return (
    // <div className="service-card border rounded hover:shadow-lg">
    //   <div>
    //     <img
    //       src={service?.image}
    //       className="w-full h-52 service-card-img"
    //       alt=""
    //     />
    //   </div>
    //   <div className="p-2">
    //     <h2 className="font-bold text-2xl">{service?.name}</h2>
    //     <p>
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae
    //       illum rem ad blanditiis voluptatibus vel laboriosam eveniet.
    //     </p>
    //   </div>
    // </div>
    <div className="card lg:w-full w-72 bg-base-100 hover:shadow-xl shadow-md transition">
      <figure>
        <img src={service?.image} className="h-52 w-full" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service?.name}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
