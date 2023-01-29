import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import ContactForm from "../components/reusable/ContactForm";

const Contact = () => {
  return (
    <div className="customContainer md:py-20 py-10">
      <div className="md:grid grid-cols-2 gap-4 md:space-y-0 space-y-4">
        <div className="space-y-4 md:p-10 p-2">
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
              <p>+8801728010810</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-min p-3 rounded-md">
                <AiOutlineMail size={23} color="white" />
              </div>
              <p>chttravel.htt@gmail.com</p>
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
