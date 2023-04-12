import React from 'react';
import { FaChild } from 'react-icons/fa';
import Image from 'next/image';

const HomeContent = () => {
  return (
    <div className="container px-5 py-24 mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <div className="rounded-lg h-[600px] overflow-hidden">
          <Image
            alt="Little Wonders Childcare"
            className="object-cover object-center h-full w-full"
            src="/images/nationalities.jpg"
            width={720}
            height={480}
            style={{ objectFit: "cover" }}     
          />
        </div>
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <FaChild className="w-10 h-10 text-orange-500" />
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Little Wonders Childcare</h2>
              <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
              <p className="text-base">Creating a secure, nurturing, and educational space for children.</p>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4">Our mission is to provide a safe, nurturing, and educational environment for each child. Our team of dedicated and skilled childcare professionals works tirelessly to establish a warm and inviting atmosphere where children can grow, learn, and explore. We offer a variety of programs to cater to the diverse needs of our families, from infants to preschoolers. With our emphasis on child-centered learning, we strive to instill a lifelong love of learning in every child in our care.</p>
            <a 
            className="text-orange-500 inline-flex items-center cursor-pointer"
            onClick={() => (window.location.href = "/blog")}
            >Discover More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
