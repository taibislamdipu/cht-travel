import React, { useState } from "react";
import Filter from "../components/reusable/Filter";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import SuggestedHotelCard from "../components/SuggestedHotel/SuggestedHotelCard";
import staticMapImg from "../assets/images/staticMapImg.png";
import { Link } from "react-router-dom";
import { data } from "../../public/data.js";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
const HotelList = () => {
  const [search, setSearch] = useState("");

  const { searchQuery } = useSelector((state) => state?.search);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  // number of hotels available
  const count = Object.values(data).filter(
    (item) => item?.availability === true
  ).length;

  console.log("API hit");

  return (
    <div className="py-20  bg-[#F2F2F2]">
      <div className="customContainer space-y-8">
        <div>
          <Filter setSearch={setSearch} />
        </div>
        <div className="lg:grid grid-cols-12 gap-6 ">
          {!isTabletOrMobile && (
            <section className="col-span-3 space-y-4 bg-white border p-4 ">
              <div>
                <h3 className="text-black font-bold">Map View</h3>
                <div>
                  <img
                    src={staticMapImg}
                    className="w-full"
                    alt="staticMapImg"
                  />
                </div>
              </div>
              <hr />
              <div>
                <h3 className="text-black font-bold">Hotel Name</h3>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  name=""
                  id=""
                  className="w-full"
                />
              </div>
              <div>
                <h3 className="text-black font-bold">Set Your Budget</h3>
                <p>$64 to $1176 per night</p>
              </div>
              <div>
                <h3 className="text-black font-bold">Star Rating</h3>
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
              </div>
            </section>
          )}
          <section className="col-span-9 space-y-4 ">
            {!isTabletOrMobile && (
              <div className="flex items-center gap-2 bg-[#FBE8CC] p-4">
                <span>
                  <BsFillInfoCircleFill color={"#a05d00"} size={23} />
                </span>
                <h6 className="text-[#a05d00]">
                  These dates are popular. Book soon to secure a place to stay.
                </h6>
              </div>
            )}

            {/* <div className="flex justify-between bg-white">
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
            </div> */}

            <div>
              <h2>
                <span className="font-bold text-black">
                  {count} of {data?.length}
                </span>{" "}
                hotels are available in Bandarban
              </h2>
            </div>
            <div>
              {data
                .filter((item) => {
                  return search.toLocaleLowerCase() === ""
                    ? item
                    : item?.hotel_name.toLocaleLowerCase().includes(search) &&
                        item.availability === true;
                })
                .map((item) => (
                  <Link to={`hotel/${item?.id}`} key={item?.id}>
                    <SuggestedHotelCard
                      hotel_name={item?.hotel_name}
                      address={item?.address}
                      price={item?.price}
                      isTabletOrMobile={isTabletOrMobile}
                    />
                  </Link>
                ))}
              {data.filter((item) => {
                return search.toLocaleLowerCase() === ""
                  ? item
                  : item.hotel_name.toLocaleLowerCase().includes(search);
              }).length === 0 && <p>No results found.</p>}
            </div>

            {/* Don't remove this code */}
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
    </div>
  );
};

export default HotelList;
