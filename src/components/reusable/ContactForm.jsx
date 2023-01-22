import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("All fields are required.");
    } else {
      // send formData to your server
      console.log(formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast.success("Thanks you.");
    }
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Name:</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Email:</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Subject:</label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Message:</label>
        <textarea
          className="border border-gray-400 p-2 rounded-lg w-full"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
