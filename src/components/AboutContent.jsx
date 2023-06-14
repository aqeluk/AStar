import React from 'react'
import Image from 'next/image'

const AboutContent = () => {
  return (
    <div id='content' className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Discover Why We Try
        </h1>
        <p className="mb-8 leading-relaxed">
          Our committment falls in fostering a warm, nurturing, and engaging environment where every child can explore, learn, and grow. Our passionate and dedicated team of childcare professionals prioritizes the well-being and development of each child, providing personalized care and attention to ensure their unique needs are met. Experience the A Star difference and join our family today.
        </p>
        <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"
        onClick={() => (window.location.href = "#contact")}>
          Get In Touch
        </button>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          src="/images/takingphoto.jpg"
          alt="A Star Childcare"
          width={500}
          height={300}
          className="object-cover object-center rounded"
          style={{
            maxWidth: "100%",
            height: "auto",
            width: "auto"
          }}
        />
      </div>
    </div>
  )
}

export default AboutContent
