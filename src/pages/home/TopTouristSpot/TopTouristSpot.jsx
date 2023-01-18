import React from "react";
import "./TopTouristSpot.css";
import ScrollContainer from "react-indiana-drag-scroll";
import spotImg from "../../../assets/images/spot.jpg";

const TopTouristSpot = () => {
  const data = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];

  return (
    <div className="mb-20">
      <div>
        <h2 className="section-title">Top Tourist Spot</h2>
        <p>Book these experiences for a close-up look at Bangladesh</p>
      </div>

      <ScrollContainer className="flex cursor-grab">
        <div>
          <section className="mt-6 flex gap-4">
            {data.map((item, i) => (
              <div className="spot" key={i}>
                <div className="relative">
                  <img src={spotImg} className="spot" />
                  <h2 className="absolute text-3xl text-white font-bold bottom-5 left-5">
                    Bottom Left
                  </h2>
                </div>
              </div>
            ))}
          </section>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default TopTouristSpot;
