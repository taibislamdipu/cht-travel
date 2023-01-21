import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { handleSearch } from "../../features/searchSlice";

const Filter = ({ setSearch }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();
  const searchQuery = {
    startDate: startDate.toLocaleDateString(),
    endDate: endDate.toLocaleDateString(),
  };

  const handleClick = () => {
    dispatch(handleSearch(searchQuery));
  };

  return (
    <div className="lg:flex space-x-1 bg-white p-4">
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
            <select className="select-bordered w-full select text-black">
              <option selected>1 room</option>
              <option> 2 room</option>
              <option> 3 room</option>
            </select>
          </div>
        </span>
        <span className="flex flex-col gap-1">
          No. of People
          <div className="flex">
            <select className="select-bordered select text-black">
              <option selected>1 Person</option>
              <option>2 Person</option>
              <option>4 Person</option>
            </select>
          </div>
        </span>
      </span>
      <span className="flex flex-col gap-1">
        <span>Search</span>
        <button className="btn w-auto max-w-xs" onClick={handleClick}>
          Search
        </button>
      </span>
    </div>
  );
};

export default Filter;
