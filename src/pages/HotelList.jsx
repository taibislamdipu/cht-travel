import React, { useState } from "react";
import Filter from "../components/reusable/Filter";
import { BsFillInfoCircleFill } from "react-icons/bs";
import {
  AiOutlineUnorderedList,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import SuggestedHotelCard from "../components/SuggestedHotel/SuggestedHotelCard";
import staticMapImg from "../assets/images/staticMapImg.png";
import { Link } from "react-router-dom";
import { data } from "../../public/data.js";
const HotelList = () => {
  const hotelList = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];

  const [search, setSearch] = useState("");

  return (
    <div className="space-y-8 py-20 lg:mx-40">
      <div>
        <Filter setSearch={setSearch} />
      </div>
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-3 space-y-4 border p-4">
          <div>
            <h3 className="text-base font-semibold">Map View</h3>
            <div>
              <img src={staticMapImg} className="w-full" alt="staticMapImg" />
            </div>
          </div>
          <hr />
          <div>
            <h3 className="text-base font-semibold">Hotel Name</h3>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              name=""
              id=""
              className=""
            />
          </div>
          <div>
            <h3 className="text-base font-semibold">Set Your Budget</h3>
            <p>$64 to $1176 per night</p>
          </div>
          <div>
            <h3 className="text-base font-semibold">Star Rating</h3>
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
          </div>
        </section>
        <section className="col-span-9 space-y-4">
          <div className="flex items-center gap-2 bg-[#FBE8CC] p-4">
            <BsFillInfoCircleFill color={"#a05d00"} size={23} />
            <h6 className="text-[#a05d00]">
              Los Angeles , CA is a top choice with fellow travellers on your
              selected dates. Book now to secure your room.
            </h6>
          </div>
          <div className="flex justify-between">
            <div>Short by Recommended</div>
            <div className="flex justify-between">
              <div className="flex items-center gap-1 bg-slate-200 px-4 py-2">
                <AiOutlineUnorderedList />
                List
              </div>
              <div className="flex cursor-pointer items-center gap-1 px-4 py-2 hover:bg-slate-200">
                <IoLocationSharp />
                Map
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {data
              .filter((item) => {
                return search.toLocaleLowerCase() === ""
                  ? item
                  : item.hotel_name.toLocaleLowerCase().includes(search);
              })
              .map((item) => (
                <Link to={`hotel/${item?.id}`}>
                  <SuggestedHotelCard
                    hotel_name={item?.hotel_name}
                    address={item?.address}
                    price={item?.price}
                  />
                </Link>
              ))}
            {data.filter((item) => {
              return search.toLocaleLowerCase() === ""
                ? item
                : item.hotel_name.toLocaleLowerCase().includes(search);
            }).length === 0 && <p>No results found.</p>}
          </div>
          {/* <div>
            <h3>Pagination</h3>
            <div className="flex items-center justify-between">
              <button className="btn">
                <AiOutlineLeft color="white" /> Prev Page
              </button>
              <button className="btn">
                Next Page <AiOutlineRight color="white" />
              </button>
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default HotelList;
