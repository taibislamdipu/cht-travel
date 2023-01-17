import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const AmenitiesCard = ({ item }) => {
  const name = item?.amenities_name;
  return (
    <div className="border rounded-md bg-white p-4">
      <div className="flex flex-col items-center text-center">
        <AiOutlineCheckCircle size={23} color={"#098e2b"} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default AmenitiesCard;
