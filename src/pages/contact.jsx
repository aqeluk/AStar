import React from 'react'
import Hero from '../components/Hero'
import ContactUs from '../components/ContactUs'

const contact = () => {
  return (
    <div>
        <Hero 
        heading='Contact Us' 
        message='Catering to your every one of our childrens needs' 
        buttonText='Let Us Help'/>
        <ContactUs className='text-gray-600 body-font' />
    </div>
  );
};

export default contact