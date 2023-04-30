import React from 'react';
import { CgPhone } from 'react-icons/cg';
import { MdEmail } from 'react-icons/md';
import { BsMailbox2 } from 'react-icons/bs';

const Letter = ({ letter, delay }) => (
    <span
      className={`inline-block transition-transform duration-500 ease-in-out transform group-hover:translate-y-[-8px] ${delay ? `delay-${delay}` : ''}`}
      style={letter === ' ' ? { marginRight: '0.25rem' } : {}}
    >
      {letter}
    </span>
  );
  

const Contact = () => {
    const title = "Contact Us:";

  return (
    <div id='contact' className='relative'>
      <div className='w-full h-full' layout='responsive'>
        <div className='max-w-[1240px] mx-auto text-center py-24'>
          <p className="group inline-block text-2xl font-bold mb-8 transition-all duration-300 ease-in-out transform hover:text-blue-600">
          {title.split("").map((letter, index) => (
            <Letter letter={letter} delay={index * 50} key={`${letter}-${index}`} />
          ))}
        </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='group relative flex items-center p-4 border border-gray-300 hover:border-black rounded transition-all duration-300'>
              <CgPhone size={30} className='mr-2 group-hover:mr-0 group-hover:ml-4 transition-all duration-300 ease-in-out' />
              <p className='text-2xl font-bold group-hover:hidden'>Call Us</p>
              <p className='text-orange-500 absolute inset-0 hidden group-hover:flex items-center justify-center group-hover:text-2xl group-hover:font-extrabold'>
                07477704920
              </p>
            </div>
            <div className='group relative flex items-center p-4 border border-gray-300 hover:border-black rounded transition-all duration-300'>
              <MdEmail size={30} className='mr-2 group-hover:mr-0 group-hover:ml-4 transition-all duration-300 ease-in-out' />
              <p className='text-2xl font-bold group-hover:hidden'>Email Us</p>
              <p className='text-orange-500 absolute inset-0 hidden group-hover:flex items-center justify-center group-hover:text-l group-hover:font-extrabold'>
                mini_nin@hotmail.com
              </p>
            </div>
            <div className='group relative flex items-center p-4 border border-gray-300 hover:border-black rounded transition-all duration-300'>
              <BsMailbox2 size={30} className='mr-2 group-hover:mr-0 group-hover:ml-4 transition-all duration-300 ease-in-out' />
              <p className='text-2xl font-bold group-hover:hidden'>Visit Us</p>
              <p className='text-orange-500 absolute inset-0 hidden group-hover:flex items-center justify-center group-hover:text-xl group-hover:font-extrabold'>
               Barnet, EN5 2UA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Contact;
