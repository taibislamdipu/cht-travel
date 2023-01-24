import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { handleSearch, setHotel } from "../../features/searchSlice";

const Filter = ({ setSearch }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [room, setRoom] = useState("1 room");
  const [people, setPeople] = useState("1 person");
  const dispatch = useDispatch();
  const searchQuery = {
    startDate: startDate.toLocaleDateString(),
    endDate: endDate.toLocaleDateString(),
    noOfRoom: room,
    noOfPeople: people,
    onClick: true,
  };

  const handleClick = () => {
    dispatch(handleSearch(searchQuery));

    // call api
    const fetchData = async () => {
      const res = await fetch(
        "https://cht-travel-server-production.up.railway.app/hotels"
      );
      const data = await res.json();
      const filteredData = data?.filter((item) => item?.isAvailable === true);
      dispatch(setHotel(filteredData));
    };

    fetchData();
  };

  return (
    <div className="lg:flex space-x-1 bg-white py-10 lg:px-44 px-4">
      <span className="flex flex-col gap-1 w-full">
        <div className="">Search Hotel Name</div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search hotel name"
          className="input-bordered input w-full"
        />
      </span>
      <span className="flex flex-col gap-1 ">
        Checkin
        <DatePicker
          className="input-bordered input border border-green-200 focus:border-green-200 focus:ring-green-400 border-l-green-500 w-auto max-w-xs text-black flex"
          placeholderText={"Checkin"}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="EEE, dd/MM/yy"
          formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
        />
      </span>
      <span className="flex flex-col gap-1">
        Checkout
        <DatePicker
          className="input-bordered input border focus:border-red-200 focus:ring-red-400 border-red-200 border-l-red-500 w-auto max-w-xs text-black flex"
          placeholderText={"Checkout"}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="EEE, dd/MM/yy"
          formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
        />
      </span>

      <span className="flex gap-2 w-full">
        <span className="flex flex-col gap-1 w-1/2">
          No. of Room
          <div className="flex ">
            <select
              className="select-bordered w-full select text-black"
              onChange={(e) => setRoom(e.target.value)}
            >
              <option value="1 room">1 room</option>
              <option value="2 room"> 2 room</option>
              <option value="3 room"> 3 room</option>
            </select>
          </div>
        </span>
        <span className="flex flex-col gap-1 w-1/2">
          No. of People
          <div className="flex w-full">
            <select
              className="select-bordered w-full select text-black"
              onChange={(e) => setPeople(e.target.value)}
            >
              <option value="1 person">1 Person</option>
              <option value="2 person">2 Person</option>
              <option value="4 person">4 Person</option>
            </select>
          </div>
        </span>
      </span>
      <span className="flex flex-col gap-1">
        <span>Search</span>
        {/* <button className="btn w-auto max-w-xs" onClick={handleSearchBtn}> */}
        <button className="btn bg-black md:w-40 gap-2" onClick={handleClick}>
          <AiOutlineSearch size={23} /> Search
        </button>
      </span>
    </div>
  );
};

export default Filter;
