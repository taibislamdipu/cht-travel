import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import chtTravelLogo from "../../assets/images/cht-travel-logo.jpg";
import bdGovtLogo from "../../assets/images/bdGovtLogo.png";
const About = () => {
  const services = [
    { id: "1", service: "Hotel" },
    { id: "2", service: "Tourist Sight " },
    { id: "3", service: "Transportation" },
    { id: "4", service: "Tourist Guide" },
    { id: "5", service: "Local Products" },
    { id: "6", service: "Local Food" },
    { id: "7", service: "Local language " },
    { id: "8", service: "Tourist Police and emergency Number" },
    { id: "9", service: "Bike rent" },
    { id: "10", service: "Home stay" },
    { id: "11", service: " Local Rules and regulations " },
    { id: "12", service: "Form for Foreigner" },
  ];

  return (
    <div className="my-20 customContainer">
      <div className="lg:flex gap-8">
        <img
          src={chtTravelLogo}
          className="rounded-lg"
          alt=""
          style={{ width: "300px", height: "300px" }}
        />

        <img
          src={bdGovtLogo}
          className="rounded-lg"
          alt=""
          style={{ width: "300px", height: "300px" }}
        />

        <div className="pt-10 md:pt-0 space-y-6">
          <div className="space-y-4">
            <h2
              className="text-2xl font-bold text-black"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              About us
            </h2>
            <p>
              <span className="font-bold">CHT Travel</span> is a company that
              helps you find the right hotel in your travel destination. We
              provide online hotel booking service and help users to book rooms
              online. At this stage, we are only showing results based on
              Bandarban, Rangamati and Khagrachari area of Bangladesh. More
              features will be added soon.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-black curvy-underline inline-block pb-2">
              Our Services
            </h2>
            <ul className="grid grid-cols-2 gap-2 list-disc">
              {services.map((item) => (
                <li className="mx-8" key={item?.id}>
                  {item?.service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link to="/hotels">
          <button className="btn btn-primary flex items-center gap-2 w-56">
            Explore Now
            <AiOutlineDoubleRight size={23} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
