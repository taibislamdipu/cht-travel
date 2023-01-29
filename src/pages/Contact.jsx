import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import ContactForm from "../components/reusable/ContactForm";

const Contact = () => {
  return (
    <div className="customContainer py-20">
      <div className="md:grid grid-cols-2 gap-4">
        <div className="space-y-4 p-10 md:p-0">
          <h2 className="text-black md:text-3xl text-2xl font-bold">
            Contact us
          </h2>
          <p>
            CHT Tour Guide is a company that assists travelers in finding the
            perfect hotel for their destination. They offer an online booking
            service and currently focus on hotels in the Bandarban, Rangamati,
            and Khagrachari areas of Bangladesh.
          </p>
          <div className="md:grid grid-cols-2 gap-4 space-y-3 md:space-y-0">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-min p-3 rounded-md">
                <IoLocationSharp size={23} color="white" />
              </div>
              <p>Bandarban, Bangladesh</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-min p-3 rounded-md">
                <AiFillPhone size={23} color="white" />
              </div>
              <p>+ xx xxx xxx</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-min p-3 rounded-md">
                <AiOutlineMail size={23} color="white" />
              </div>
              <p>info@xxxxxxx.com</p>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
