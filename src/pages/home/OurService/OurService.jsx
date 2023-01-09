import React from "react";
import "./OurService.css";
import { BiBed } from "react-icons/bi";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "react-router-dom";

const OurService = () => {
  const services = [
    {
      name: "Hotels",
      icon: <BiBed />,
      path: "/hotels",
    },
    {
      name: "Service 2",
      icon: <BiBed />,
    },
    {
      name: "Service 3",
      icon: <BiBed />,
    },
    {
      name: "Service 4",
      icon: <BiBed />,
    },
    {
      name: "Service 5",
      icon: <BiBed />,
    },
  ];

  return (
    <div className="mb-20">
      <h2 className="bg-slate-400 p-4 text-center font-semibold">
        Our Services
      </h2>

      <ScrollContainer>
        <section className="mt-6 flex grid-cols-5 gap-4 lg:grid">
          {services.map((service, i) => (
            <Link to={service?.path}>
              <div
                key={i}
                className="flex items-center justify-between gap-8 rounded-md border border-black p-4 transition duration-200 hover:bg-black hover:text-white"
              >
                <span>{service?.name}</span>
                <span>{service?.icon}</span>
              </div>
            </Link>
          ))}
        </section>
      </ScrollContainer>
    </div>
  );
};

export default OurService;
