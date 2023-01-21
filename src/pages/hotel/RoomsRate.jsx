import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBookingDetails } from "../../features/bookingSlice";
import RoomDetails from "./RoomDetails";

const RoomsRate = ({ hotelData }) => {
  // const price = hotelData?.price;
  const name = hotelData?.hotel_name;
  const address = hotelData?.address;

  var price = Intl.NumberFormat().format(hotelData?.price);

  const dispatch = useDispatch();

  const handleBookNow = () => {
    dispatch(addBookingDetails({ price, name, address }));
  };
  return (
    <div className="flex justify-between items-center px-4 py-10 border-b">
      <div>
        <div className="flex gap-2">
          <p className="font-bold">1 King Bed</p>
          {/* The button to open modal */}
          <label htmlFor="my-modal-4">
            <span className="underline cursor-pointer">Room Details</span>
          </label>

          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <div className="modal-box relative w-11/12 max-w-5xl" htmlFor="">
              <label
                htmlFor="my-modal-4"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <RoomDetails />
            </div>
          </label>
        </div>
        <p className="flex gap-2 items-center">
          <BsFillInfoCircleFill />
          Prepaid - Book Now, Pay Now
        </p>
      </div>

      <div className="flex flex-col space-y-2">
        <div
          className="tooltip tooltip-open tooltip-warning tooltip-top"
          data-tip="Only 1 room left!"
        >
          <h2 className="text-2xl text-black font-bold">BDT {price}</h2>
        </div>
        <Link to="/booking">
          <button className="btn" onClick={handleBookNow}>
            BOOK NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RoomsRate;
