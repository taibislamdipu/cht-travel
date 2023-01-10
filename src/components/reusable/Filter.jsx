import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({ setSearch }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex space-x-1 bg-slate-200 p-4">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search here"
        className="input-bordered input w-full max-w-xs"
      />

      <DatePicker
        className="input-bordered input hidden w-auto max-w-xs text-black lg:flex"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Check In"
      />

      <DatePicker
        className="input-bordered input hidden w-auto max-w-xs text-black lg:flex"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Check Out"
      />

      <div className="hidden lg:flex">
        <select className="select-bordered select text-black">
          <option selected>1 room</option>
          <option> 2 room</option>
          <option> 3 room</option>
        </select>
      </div>

      <div className="hidden lg:flex">
        <select className="select-bordered select text-black">
          <option selected>2 Guest</option>
          <option>2 Guest</option>
          <option>4 Guest</option>
        </select>
      </div>

      <button className="btn">Search</button>
    </div>
  );
};

export default Filter;
