import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import HotelReviewCard from "./HotelReviewCard";
import NearbyHotelCard from "./NearbyHotelCard";
import Filter from "../../components/reusable/Filter";
const Hotel = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const data = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
  ];

  return (
    <div className="space-y-8 py-20 lg:mx-40">
      <section className="flex justify-between">
        <div>
          <div className="flex">
            <h2 className="text-2xl font-bold">Hilton Los Angeles Airport</h2>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div className="flex items-center">
            <p>
              Neighborhood: LAX - Los Angeles Airport 5711 West Century
              Boulevard, Los Angeles , CA
            </p>
            <IoLocationSharp />
            View Map
          </div>
        </div>
        <div>
          <button className="btn">Show Prices</button>
        </div>
      </section>
      <section className="">
        <div className="grid grid-cols-4 text-center">
          <span className="bg-indigo-300 p-2 hover:bg-indigo-400">
            Rooms & Rates
          </span>
          <span className="bg-indigo-300 p-2 hover:bg-indigo-400">
            Rooms & Rates
          </span>
          <span className="bg-indigo-300 p-2 hover:bg-indigo-400">
            Rooms & Rates
          </span>
          <span className="bg-indigo-300 p-2 hover:bg-indigo-400">
            Rooms & Rates
          </span>
        </div>
        <section className="h-80 grid-cols-2 bg-slate-200 lg:grid">
          <div>image</div>
          <div>
            <p>OVERALL GUEST SCORE</p>
          </div>
        </section>
      </section>
      <section className="grid-cols-3 gap-4 space-y-2 lg:grid">
        <div className="col-span-2">
          <h3>Hotel Description</h3>
          <p>
            Offering free 24-hour shuttle service to Los Angeles International
            Airport, this hotel features a spacious outdoor pool and whirlpool.
            Car hire service and 4 food venues are available at the hotel. The
            Hilton Los Angeles Airport offers modern, elegantly decorated rooms
            with cable TV and a radio with MP3 connection. A coffee maker, work
            desk and ironing facilities are included. A variety of dining
            options are available at this hotel. The Café features American
            cuisine and the Bistro makes a variety of to-go items and brews
            Starbucks coffee 24 hours a day. Guests may also dine at Andiamo, a
            northern Italian restaurant or relax with a drink at Landings lounge
            in the evenings. Guests of the Los Angeles Hilton are welcome to
            enjoy the on-site fitness center. A business center and gift shop
            are also available. The Los Angeles Airport Hilton is less than 5
            miles from Dockweiler Beach State Park and 20 minutes from downtown
            Santa Monica.
          </p>
        </div>
        {!isTabletOrMobile && (
          <div className="bg-slate-200 p-4">
            <h6>Why book with us?</h6>
            <ul>
              <li className="flex items-center gap-2">
                <AiOutlineCheckCircle /> Low Rates
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineCheckCircle /> Verified Guest Reviews
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineCheckCircle /> Largest Selection
              </li>
            </ul>
          </div>
        )}
      </section>
      <section className=" py-10 text-white">
        {/* search filter components*/}
        <Filter />
      </section>
      <section className="space-y-4">
        <h3>Guest Ratings</h3>
        <div className="flex items-center gap-4">
          <span className="rounded-full border-4 border-solid border-sky-500 bg-indigo-200 p-6 text-2xl font-bold">
            7.1
          </span>
          <div>
            <p>OVERALL GUEST SCORE</p>
            <p>Good</p>
            <p>Based on 2001 Verified Guest Ratings</p>
          </div>
        </div>
        <hr />
        <div>
          {data.map((review) => (
            <HotelReviewCard />
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h3>Nearby Hotels</h3>
        <div className="flex grid-cols-3 flex-wrap gap-4 lg:grid">
          {data.slice(0, 3).map((hotel) => (
            <NearbyHotelCard />
          ))}
        </div>
      </section>
      <section>
        <h3>Important Information</h3>
        <p>
          Guests are required to show a photo ID and credit card upon check-in.
          Please note that all Special Requests are subject to availability and
          additional charges may apply. Shuttle pick-up and drop off is located
          on the Lowe Level - Arrivals level of the airport only.
        </p>
      </section>
    </div>
  );
};

export default Hotel;
