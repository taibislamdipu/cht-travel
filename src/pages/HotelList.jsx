import React, { useEffect, useState } from "react";
import Filter from "../components/reusable/Filter";
import { BsFillInfoCircleFill } from "react-icons/bs";
import SuggestedHotelCard from "../components/SuggestedHotel/SuggestedHotelCard";
import staticMapImg from "../assets/images/staticMapImg.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { getHotel } from "../features/searchSlice";
import Loading from "../components/reusable/Loading";

const HotelList = () => {
  const [search, setSearch] = useState("");
  const [data, setHotels] = useState([]);
  const [range, setRange] = useState(64);

  const dispatch = useDispatch();

  const { hotels, isLoading } = useSelector((state) => state.search);

  useEffect(() => {
    const fetchData = async () => {
      const { payload } = await dispatch(getHotel());
      setHotels(payload);
    };
    fetchData();
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  // number of hotels available
  const count = Object.values(data).filter(
    (item) => item?.isAvailable === true
  ).length;

  return (
    <div className=" bg-[#F2F2F2]">
      <div className="pb-4">
        <Filter setSearch={setSearch} />
      </div>
      <div className="customContainer space-y-8 pb-20">
        <div className="lg:grid grid-cols-12 gap-6 ">
          {!isTabletOrMobile && (
            <section className="col-span-3 space-y-4 bg-white border p-4 ">
              <div>
                <h3 className="text-black font-bold mb-2">Map View</h3>
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
                <h3 className="text-black font-bold mb-2">Hotel Name</h3>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  name=""
                  id=""
                  className="w-full"
                />
              </div>
              <div>
                <h3 className="text-black font-bold mb-2">Set Your Budget</h3>
                <p>BDT 500 to BDT {range} per night</p>
                <input
                  className="w-full"
                  id="typeinp"
                  type="range"
                  min="500"
                  max="5000"
                  value={range}
                  onChange={(e) => setRange(e.target.value)}
                  step="1"
                />
              </div>
              <div>
                <h3 className="text-black font-bold mb-2">Star Rating</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" /> 5 Star
                  </p>
                  <p className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" /> 4 Star
                  </p>
                  <p className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" /> 3 Star
                  </p>
                  <p className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" /> 2 Star
                  </p>
                </div>
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
                  {hotels?.length} of 20
                </span>{" "}
                hotels are available in Bandarban
              </h2>
            </div>

            {/* <div>
              {hotels.map((item, i) => (
                <SuggestedHotelCard
                  key={i}
                  hotel_name={item?.hotel_name}
                  address={item?.address}
                  price={item?.price}
                  isTabletOrMobile={isTabletOrMobile}
                />
              ))}
            </div> */}

            {isLoading ? (
              <Loading />
            ) : (
              <div>
                {hotels
                  .filter((item) => {
                    return search.toLocaleLowerCase() === ""
                      ? item
                      : item?.title.toLocaleLowerCase().includes(search);
                  })
                  .map((item) => (
                    <Link to={`hotel/${item?._id}`} key={item?._id}>
                      <SuggestedHotelCard
                        hotel_name={item?.title}
                        image={item?.imageURL}
                        address={item?.address}
                        price={item?.price}
                        isTabletOrMobile={isTabletOrMobile}
                      />
                    </Link>
                  ))}
                {data.filter((item) => {
                  return search.toLocaleLowerCase() === ""
                    ? item
                    : item?.title.toLocaleLowerCase().includes(search);
                }).length === 0 && <p>No results found.</p>}
              </div>
            )}

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
