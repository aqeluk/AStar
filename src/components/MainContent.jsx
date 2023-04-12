import React from "react";
import Image from "next/image";

const MainContent = ({ title, subtitle, imageUrl }) => {
  return (
    <div id='content' className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 slide-in-left">
        <div className="relative h-[600px] w-full object-cover object-center rounded">
          <Image
            src={imageUrl}
            alt="Little Wonders Childcare"
            fill="responsive"
            style={{ objectFit: "cover" }}
            className="rounded"
          />
        </div>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center slide-in-right">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          {title}
        </h1>
        <p className="mb-8 leading-relaxed text-lg">
          {subtitle}
        </p>
        <div className="flex justify-center">
          <button
            className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"
            onClick={() => (window.location.href = "/about")}
          >
            Learn More
          </button>
          <button
            className="ml-4 inline-flex text-gray-700 bg-blue-100 border-0 py-2 px-6 focus:outline-none hover:bg-blue-200 rounded text-lg"
            onClick={() => (window.location.href = "#contact")}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
