import React from "react";
import ContactForm from "../components/reusable/ContactForm";

const Contact = () => {
  return (
    <div className="customContainer mt-20">
      <div className="md:grid grid-cols-2 gap-4">
        <div className="">
          <ContactForm />
        </div>
        <div className="space-y-4 p-10 md:p-0">
          <h2 className="text-black md:text-3xl text-2xl font-bold">
            General Contact Information
          </h2>
          <p className="text-black text-xl font-bold">
            Mailing address: Tripadvisor Inc., 400 1st Avenue, Needham, MA, USA
            02494
          </p>
          <p className="text-black text-xl font-bold">
            General company phone number: +1 781 800 5000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
