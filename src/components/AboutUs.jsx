import React from 'react'
import { MdChildFriendly } from 'react-icons/md'
import { BiChild } from 'react-icons/bi'
import { FaChild } from 'react-icons/fa'

const AboutUs = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-orange-500">Catering All Ages</h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-800">At Little Wonders Childcare, our mission is to provide a nurturing and safe environment for your children to explore, learn, and grow.</p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-800 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange-200 text-blue-500 mb-4">
              <MdChildFriendly size={24} />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Infants</h2>
            <p className="leading-relaxed text-base">Our infant program provides a warm, secure environment that encourages exploration and growth at each child's own pace.</p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-800 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange-200 text-blue-500 mb-4">
              <BiChild size={36} />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Toddlers</h2>
            <p className="leading-relaxed text-base">Our toddler program fosters curiosity and creativity through a variety of age-appropriate activities and learning experiences.</p>
          </div>
        </div>
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-800 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange-200 text-blue-500 mb-4">
              <FaChild size={24} />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Preschool</h2>
            <p className="leading-relaxed text-base">Our preschool program prepares children for success in school by developing essential cognitive, social, and emotional skills.</p>
          </div>
        </div>
      </div>
      <button className="flex mx-auto mt-16 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg" onClick={() => (window.location.href = "/services")}>What We Do</button>
    </div>
  )
}

export default AboutUs
