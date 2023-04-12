import React from 'react';

const Content = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          DISCOVER LITTLE WONDERS CHILDCARE
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Empowering Your Child's Potential
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        We offer a safe, enjoyable, and stimulating environment where your child can learn and develop. Our dedicated staff is committed to providing top-notch care and support for every child.        
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="px-8 py-6 bg-white shadow-md">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            Safety First
          </h2>
          <p className="leading-relaxed text-base mb-4">
          Our facility is designed with your child's safety and well-being as our top priority. We enforce strict safety protocols and consistently monitor our premises.
          </p>
        </div>
        <div className="px-8 py-6 bg-white shadow-md">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
          Expert Staff
          </h2>
          <p className="leading-relaxed text-base mb-4">
            Our team of experienced and certified childcare professionals is devoted to providing exceptional care and education for your child.
          </p>
        </div>
        <div className="px-8 py-6 bg-white shadow-md">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
          Education & Play
          </h2>
          <p className="leading-relaxed text-base mb-4">
          We provide a range of activities and educational programs designed to foster learning, creativity, and social skills in an engaging and enjoyable manner.
          </p>
        </div>
        <div className="px-8 py-6 bg-white shadow-md">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
          Adaptable Schedules
          </h2>
          <p className="leading-relaxed text-base mb-4">
          We recognize the demands of busy families and offer flexible hours and programs to suit your needs.
          </p>
        </div>
      </div>
      <button 
      className="flex mx-auto mt-16 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg"
      onClick={() => (window.location.href = "/services")}
      >
        Find Out More
      </button>
    </div>
  );
};

export default Content;
