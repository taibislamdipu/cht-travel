import React from "react";
import "./OurService.css";
import { BiBed } from "react-icons/bi";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "react-router-dom";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const OurService = () => {
  let currentYear = new Date().getFullYear();

  const data = [
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
    {
      name: "Service 5",
      icon: <BiBed />,
      image: "https://i.ibb.co/3CH6qB6/hotel-Image.jpg",
    },
    {
      name: "Service 5",
      icon: <BiBed />,
      image: "https://i.ibb.co/3CH6qB6/hotel-Image.jpg",
    },
    {
      name: "Service 5",
      icon: <BiBed />,
      image: "https://i.ibb.co/3CH6qB6/hotel-Image.jpg",
    },
  ];

  console.log("data--->", data);

  return (
    <div className="mb-20 mt-10 space-y-3">
      <div>
        <h2 className="section-title">Our Services</h2>
        <p className="">
          We've got everything you need to go big in {currentYear}.
        </p>
      </div>

      <section>
        <ScrollContainer>
          <div className="flex pb-8">
            <div className="xl:grid-cols-4 lg:grid-cols-2 gap-4 lg:grid flex ">
              {data.map((service, i) => (
                <Link to={service?.path} key={i}>
                  <ServiceCard service={service} />
                </Link>
              ))}
            </div>
          </div>
        </ScrollContainer>
      </section>
    </div>
  );
};

export default OurService;
