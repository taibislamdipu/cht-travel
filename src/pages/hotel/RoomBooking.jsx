import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiChat1Fill } from "react-icons/ri";
import hotelImgSmall from "../../assets/images/hotelImgSmall.jpg";
import { useMediaQuery } from "react-responsive";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useGetSingleHotelQuery } from "../../api/hotelSlice";

const RoomBooking = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const { id } = useParams();
  const { data } = useGetSingleHotelQuery(id);

  const { address, title, price } = data;

  const HotelAlert = () => {
    return (
      <div className="flex lg:items-center gap-2 bg-[#C5F3C4] p-4">
        <BsCheckCircleFill color={"#087d00"} size={23} />
        <h6 className="text-[#087d00]">
          This hotel is likely to sell out soon.{" "}
          <span className="font-bold">Only 1 room left.</span> Don't miss out,
          book now!
        </h6>
      </div>
    );
  };
  const CartDetails = () => {
    return (
      <section className="border rounded-md ">
        <div className="flex justify-between lg:p-4 p-2">
          <h4 className="font-semibold">1 King Bed</h4>
          <div>
            <div className="flex items-center gap-2">
              <span>BDT</span>
              <h4 className="text-2xl font-bold">{price}</h4>
            </div>
            <p className="font-semibold text-[#5D6A7E]">per night</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between lg:p-4 p-2 extra-light">
          <div>
            <p className="extra-light">1 Room x 1 Night</p>
            <p>Taxes and Fees</p>
          </div>
          <div>
            <p>BDT {price}</p>
            <p>BDT 0</p>
          </div>
        </div>
        <div className="bg-[#333333] font-semibold flex justify-between text-white lg:p-4 p-2 rounded-b-md">
          <h4>Total Trip Price</h4>
          <div className="flex items-center gap-1">
            <span>BDT</span>
            <h4>{price}</h4>
          </div>
        </div>
      </section>
    );
  };

  const BillingForm = () => {
    return (
      <div>
        <h2 className="font-bold">Your Information</h2>
        {/* <div>
          <img
            className="w-full"
            src="https://i.ibb.co/F0crNjH/bill-form-demo.png"
            alt=""
          />
        </div> */}
        <div>
          <PaymentForm price={price} title={title} />
        </div>
      </div>
    );
  };

  const ImportantInformation = () => {
    return (
      <section className="space-y-4">
        <h4 className="text-base font-semibold mt-4">Important Information</h4>
        <div className="space-y-2 text-sm">
          <p>
            <span className="mr-1 font-semibold">Cancellation Policy:</span>
            For the room type and rate that you've selected, you are not allowed
            to change or cancel your reservation. If you cancel your room, you
            will still be charged for the full reservation amount.
          </p>
          <p>
            If you don't check-in to the hotel on the first day of your
            reservation and do not alert the hotel in advance, the hotel
            reserves the right to cancel your reservation and may charge you a
            penalty.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p>
            <span className="mr-1 font-semibold">Refund Policy:</span>
            Non-refundable rate. No amendments permitted.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p>
            <span className="mr-1 font-semibold">Photo Policy:</span>
            The reservation holder must present a valid photo ID and credit card
            at check-in. The credit card is required for any additional hotel
            specific service fees or incidental charges or fees that may be
            charged by the hotel to the customer at checkout. These charges may
            be mandatory (e.g., resort fees) or optional (parking, phone calls
            or minibar charges) and are not included in the room rate.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p>
            <span className="mr-1 font-semibold">Hotel Occupancy Policy:</span>
            All rooms booked for double occupancy (i.e. 2 adults).
            Accommodations for more than this are not guaranteed.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p>
            <span className="mr-1 font-semibold">Room Charge Disclosure:</span>
            Your credit card is charged the total cost at time of purchase.
            Prices and room availability are not guaranteed until full payment
            is received.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p>
            <span className="mr-1 font-semibold">Hotel Pet Policy:</span>
            Pets are allowed. Charges may apply.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p>
            <span className="mr-1 font-semibold">Important Information:</span>
            Guests are required to show a photo ID and credit card upon
            check-in. Please note that all Special Requests are subject to
            availability and additional charges may apply. Shuttle pick-up and
            drop off is located on the Lowe Level - Arrivals level of the
            airport only.
          </p>
        </div>
      </section>
    );
  };

  return (
    <div className="space-y-8 py-20 customContainer">
      <Link to={-1} className="inline-block ">
        <div className="text-2xl font-bold flex text-black hover:text-fontPrimaryColor transition items-center gap-2">
          <AiOutlineArrowLeft />
          <h2 className="">Go Back</h2>
        </div>
      </Link>
      <div className="lg:grid grid-cols-12 gap-6">
        <section className="col-span-8 space-y-4">
          {!isTabletOrMobile && <HotelAlert />}
          {!isTabletOrMobile && <BillingForm />}
        </section>
        <section className="col-span-4 space-y-4">
          <section>
            <CartDetails />
          </section>
          <section className="space-y-3 md:space-y-0">
            <div className="flex gap-2">
              <div className="w-32 h-28">
                <img
                  className="w-full"
                  src={hotelImgSmall}
                  // style={{ width: "75px", height: "75px" }}
                  alt=""
                />
              </div>
              <div className="">
                <h4 className="font-bold">{title}</h4>
                <p>
                  <small>
                    Thursday, Jan, 19, 2023 03:00 PM - Friday, Jan, 20, 2023
                    12:00 PM
                  </small>
                </p>
                <div>Rating</div>
                <div>
                  <p className="flex items-center gap-2">
                    <RiChat1Fill />
                    <span>Good</span>
                    <span>7.9</span>
                    <span>1168 Ratings</span>
                  </p>
                </div>
              </div>
            </div>
            <section>
              <div className="space-y-2">
                <div>
                  <h4 className="text-base font-semibold">Address:</h4>
                  <p className="text-sm">{address}</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold">Room Type</h4>
                  <p className="text-sm">1 King Bed</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold">Guests:</h4>
                  <p className="text-sm">2 Adults</p>
                </div>
              </div>
              <div className="mt-4">{isTabletOrMobile && <HotelAlert />}</div>
              {!isTabletOrMobile && <ImportantInformation />}
              <div className="mt-4">{isTabletOrMobile && <BillingForm />}</div>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default RoomBooking;
