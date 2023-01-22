import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { handleSearch, setHotel } from "../../features/searchSlice";

const Filter = ({ setSearch, handleSearchBtn }) => {
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

  // const handleClick = () => {
  //   dispatch(handleSearch(searchQuery));
  // };

  const handleClick = () => {
    dispatch(handleSearch(searchQuery));

    // call api
    const fetchData = async () => {
      const result = await axios("data.json");
      const data = result?.data.filter((item) => item?.availability === true);
      dispatch(setHotel(data));
    };

    fetchData();
  };

  return (
    <div className="lg:flex space-x-1 bg-white py-10 lg:px-44 px-4">
      <span className="flex flex-col gap-1">
        <div className="">Search Hotel Name</div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search hotel name"
          className="input-bordered input w-full max-w-xs"
        />
      </span>
      <span className="flex flex-col gap-1">
        Checkin
        <DatePicker
          className="input-bordered input  w-auto max-w-xs text-black flex"
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
          className="input-bordered input w-auto max-w-xs text-black flex"
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

      <span className="flex gap-2">
        <span className="flex flex-col gap-1">
          No. of Room
          <div className="flex">
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
        <span className="flex flex-col gap-1">
          No. of People
          <div className="flex">
            <select
              className="select-bordered select text-black"
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
        <button className="btn w-auto max-w-xs" onClick={handleClick}>
          Search
        </button>
      </span>
    </div>
  );
};

export default Filter;
