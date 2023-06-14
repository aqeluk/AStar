import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CTA = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(
        "https://getform.io/f/6074e54b-7967-4143-bf14-ca9373b0c1b8",
        formData,
        { headers: { 'Accept': 'application/json' } }
      );
      
      toast.success('🎉 Thank You! Your enquiry has been sent! Please expect a phone call within the next 24-48 hours. 🚀');

      setFormData({
        fullName: "",
        phoneNumber: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <ToastContainer />

      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className="title-font font-semibold text-4xl text-gray-900">
          Embrace the A Star Childcare Experience
        </h1>
        <p className="leading-relaxed mt-4 text-lg">
          At A Star Childcare, your child's care and education are our utmost priorities. Join our family today and let your little ones delight in the wonders of learning and growing in a nurturing environment.
        </p>
      </div>
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Stay Connected
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              value={formData.fullName}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="phone-number" className="leading-7 text-sm text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone-number"
              name="phoneNumber"
              value={formData.phoneNumber}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
            />
          </div>
          <button className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg" type="submit">
            Request a Phone Call
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTA;
