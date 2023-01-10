import React from "react";

const RoomDetails = () => {
  return (
    <div className="bg-slate-100 p-4 space-y-2 ">
      <h3>Room Type: 1 King Bed</h3>
      <div>
        <h4 className="text-base font-semibold">Room Details</h4>
        <p>
          <small>1 King Bed.</small>
        </p>
      </div>
      <div>
        <h4 className="text-base font-semibold">Cancellation Policy</h4>
        <p>
          <small>
            For the room type and rate that you've selected, you are not allowed
            to change or cancel your reservation. If you cancel your room, you
            will still be charged for the full reservation amount.
          </small>
        </p>
      </div>
      <div>
        <h4 className="text-base font-semibold">Room Facilities</h4>
        <p>
          <small>
            Air conditioningAlarm clockBath or showerBody soapCable
            channelsCarpetedCoffee machineConditionerDeskFlat-screen TVFree
            toiletriesHairdryerHand sanitiserHeatingIronIroning
            facilitiesLinenPay-per-view channelsPrivate bathroomRadioSafety
            deposit boxShampooTVTea/Coffee makerTelephoneToiletToilet
            paperTowelsUpper floors accessible by elevatorVideo gamesViewWake up
            service/Alarm clockWardrobe or closet
          </small>
        </p>
      </div>
      <div className="space-y-1">
        <h4 className="text-base font-semibold mt-4">Important Information</h4>
        <div>
          <h5 className="text-sm font-semibold">Refund Policy</h5>
          <p>
            <small>Non-refundable rate. No amendments permitted.</small>
          </p>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Photo Policy</h5>
          <p>
            <small>
              The reservation holder must present a valid photo ID and credit
              card at check-in. The credit card is required for any additional
              hotel specific service fees or incidental charges or fees that may
              be charged by the hotel to the customer at checkout. These
              charges[1] may be mandatory (e.g., resort fees) or optional
              (parking, phone calls or minibar charges) and are not included in
              the room rate.
            </small>
          </p>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Hotel Occupancy Policy</h5>
          <p>
            <small>
              All rooms booked for double occupancy (i.e. 2 adults).
              Accommodations for more than this are not guaranteed.
            </small>
          </p>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Important Information</h5>
          <p>
            <small>
              Guests are required to show a photo ID and credit card upon
              check-in. Please note that all Special Requests are subject to
              availability and additional charges may apply. Shuttle pick-up and
              drop off is located on the Lowe Level - Arrivals level of the
              airport only.
            </small>
          </p>
        </div>
        <hr className="border-slate-400 my-2" />
        <p className="">
          <small>
            1. Depending on the property you stay at you may also be charged (i)
            certain per person, per room or percentage based mandatory hotel
            specific service fees, for example, resort fees (which typically
            apply to resort type destinations and, if applicable, may range from
            $10 to $40 per day), energy surcharges, newspaper delivery fees,
            in-room safe fees, tourism fees, or housekeeping fees and/or (ii)
            certain optional incidental fees, for example, parking charges,
            minibar charges, phone calls, room service and movie rentals, etc.
            These charges, if applicable, will be payable by you to the hotel
            directly at checkout and are not included in your room rate. Please
            contact the hotel directly as to whether and which charges or
            service fees apply.
          </small>
        </p>
      </div>
    </div>
  );
};

export default RoomDetails;
