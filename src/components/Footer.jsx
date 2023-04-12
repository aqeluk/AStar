import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <Image
          src="/images/littleHandsLogo.png"
          alt="Little Hands Childminding Services"
          width={125}
          height={125}
          className="rounded-full"
        />
        <span className="ml-3 text-xl">Little Hands Childminding Services</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © {new Date().getFullYear()} Little Hands Childminding — All Rights Reserved
      </p>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        Website by AQEL UK
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://www.facebook.com/littlehands" className="text-gray-500" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="w-5 h-5" />
        </a>
        <a href="https://www.instagram.com/littlehands" className="ml-3 text-gray-500" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-5 h-5" />
        </a>
        <a href="https://www.twitter.com/littlehands" className="ml-3 text-gray-500" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/company/littlehands" className="ml-3 text-gray-500" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-5 h-5" />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
