import React from "react";
import "./OurService.css";

import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "react-router-dom";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const OurService = () => {
  let currentYear = new Date().getFullYear();

  const data = [
    {
      name: "Hotels",
      path: "/hotels",
      about:
        "Find the perfect place to stay on your next trip with our Hotel service.",
      image: "https://i.ibb.co/3CH6qB6/hotel-Image.jpg",
      status: true,
    },
    {
      name: "Tourist Sight",
      about: "Explore the best tourist sights with our Tourist Sight service.",
      image: "https://i.ibb.co/6WWNbLb/Tourist-Sight.jpg",
      status: false,
    },
    {
      name: "Transportation",
      about:
        "Effortlessly plan your transportation with our Transportation service",
      image: "https://i.ibb.co/LC9Mykq/transportation-Img.jpg",
      status: false,
    },
    {
      name: "Tourist Guide",
      about: "Get the most out of your trip with our Tourist Guide service.",
      image: "https://i.ibb.co/stJxLpX/Tourist-Guide.jpg",
      status: false,
    },
    {
      name: "Local Products",
      image: "https://i.ibb.co/89d9rry/Local-Product.jpg",
      about: "Bring home a piece of your trip with our Local Product service.",
      status: false,
    },
    {
      name: "Local Food",
      image: "https://i.ibb.co/WnZJwpQ/Local-Food.jpg",
      about: "Savor the local flavors with our Local Food service.",
      status: false,
    },
    {
      name: "Local Language",
      image: "https://i.ibb.co/zZy0Sj9/Local-Language.jpg",
      about: "Speak like a local with our Local Language service.",
      status: false,
    },
    {
      name: "Bike Rent",
      image: "https://i.ibb.co/dfdzn0T/BikeRent.jpg",
      about: "Explore the city on two wheels with our Bike Rent service.",
      status: false,
    },
  ];

  return (
    <div className="mb-20 md:mt-10 mt-8 space-y-3 lg:mx-40 px-4">
      <div>
        <h2 className="text-2xl font-bold text-black">Our Services</h2>
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
