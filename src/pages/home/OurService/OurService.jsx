import React from "react";
import "./OurService.css";
import { BiBed } from "react-icons/bi";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "react-router-dom";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const OurService = () => {
  const services = [
    {
      name: "Hotels",
      icon: <BiBed />,
      path: "/hotels",
      image: "https://i.ibb.co/3CH6qB6/hotel-Image.jpg",
    },
    {
      name: "Transportation",
      icon: <BiBed />,
      image: "https://i.ibb.co/LC9Mykq/transportation-Img.jpg",
    },
    {
      name: "Service 3",
      icon: <BiBed />,
      image: "https://i.ibb.co/3CH6qB6/hotel-Image.jpg",
    },
    {
      name: "Service 4",
      icon: <BiBed />,
      image: "https://i.ibb.co/3CH6qB6/hotel-Image.jpg",
    },
    {
      name: "Service 5",
      icon: <BiBed />,
      image: "https://i.ibb.co/3CH6qB6/hotel-Image.jpg",
    },
  ];

  return (
    <div className="mb-20 mt-10">
      <h2 className="bg-slate-400 p-4 text-center font-semibold">
        Our Services
      </h2>

      <ScrollContainer className="p-2">
        <section className="mt-6 flex grid-cols-4 gap-4 lg:grid">
          {services.map((service, i) => (
            <Link to={service?.path}>
              <ServiceCard service={service} key={i} />
            </Link>
          ))}
        </section>
      </ScrollContainer>
    </div>
  );
};

export default OurService;
