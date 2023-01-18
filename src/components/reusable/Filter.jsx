import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({ setSearch }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const searchQuery = {
    startDate: startDate.toLocaleDateString(),
    endDate: endDate.toLocaleDateString(),
  };
  const handleSearch = () => {
    console.log("searchQuery--->", searchQuery);
  };

  return (
    <div className="lg:flex space-x-1 bg-slate-200 p-4">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search here"
        className="input-bordered input w-full max-w-xs"
      />
      <span className="flex flex-col gap-1">
        Checkin
        <DatePicker
          className="input-bordered input hidden w-auto max-w-xs text-black lg:flex"
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
          className="input-bordered input hidden w-auto max-w-xs text-black lg:flex"
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

      <div className="hidden lg:flex">
        <select className="select-bordered select text-black">
          <option selected>1 room</option>
          <option> 2 room</option>
          <option> 3 room</option>
        </select>
      </div>
      <div className="hidden lg:flex">
        <select className="select-bordered select text-black">
          <option selected>1 Person</option>
          <option>2 Person</option>
          <option>4 Person</option>
        </select>
      </div>
      <button className="btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filter;
