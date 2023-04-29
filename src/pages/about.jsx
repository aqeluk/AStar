import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import AboutContent from '../components/AboutContent'

const about = () => {
  return (
    <div>
        <Hero 
        heading='About The Magic of Little Wonders' 
        message='Find out why our children unleash their potential through play, learning and adventure' 
        buttonText="Learn More"
        />
        <AboutContent />
        <AboutUs className="text-gray-600 body-font" />
    </div>
  )
}

export default about