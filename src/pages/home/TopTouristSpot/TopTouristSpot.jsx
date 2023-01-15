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
      <h2 className="bg-slate-400 p-4 text-center font-semibold">
        Top Tourist Spot
      </h2>

      <ScrollContainer
        className="flex cursor-grab p-2"
        // hideScrollbars={false}
        activationDistance
      >
        <div>
          <section className="mt-6 flex gap-4">
            {data.map((service, i) => (
              <div className="spot">
                <div>
                  <img src={spotImg} alt="" />
                </div>
                <h3>Bandarban</h3>
              </div>
            ))}
          </section>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default TopTouristSpot;
