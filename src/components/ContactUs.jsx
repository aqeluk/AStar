import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'https://getform.io/f/6074e54b-7967-4143-bf14-ca9373b0c1b8',
        form,
        { headers: { Accept: 'application/json' } }
      )
      .then((response) => {
        toast.success('🎉 Thank You! Your enquiry has been sent! Please expect a response within the next 24-48 hours. 🚀');
        setForm({ name: '', email: '', message: '' }); // Clear form
      })
      .catch((error) => {
        toast.error('Error submitting form.');
      });
  };

  return (
    <div id='content' className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          className="absolute inset-0"
          style={{ filter: 'contrast(1.2) opacity(0.4)' }}
          title="map"
          src="https://maps.google.com/maps?q=Dollis%20Valley%20Way,%20Barnet,%20EN5%202UQ&t=&z=14&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
        ></iframe>
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            A STAR CHILDCARE
            </h2>
            <p className="mt-1">
              Dollis Valley Way, Barnet, EN5 2UQ
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-indigo-500 leading-relaxed">
              AStarChildminding@gmail.com
            </a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">+44 7477 04920</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-gray-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Please feel free to send us any questions or feedback you have. We&rsquo;ll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div className="relative mb-4">
      <label htmlFor="message" className="leading-7 text-sm text-gray-600">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={form.message}
        onChange={handleChange}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      ></textarea>
    </div>
    <button type="submit" className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
      Submit
    </button>
    </form>
    <p className="text-xs text-gray-500 mt-3">
      We respect your privacy and will not share your information with third parties.
    </p>
  </div>
</div>
);
};

export default ContactUs;
