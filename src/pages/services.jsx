import Hero from '@/components/Hero'
import Step from '@/components/Step'
import Slider from '@/components/Slider'
import { SliderData } from '@/components/SliderData'
import React from 'react'

const services = () => {
  return (
    <div>
        <Hero 
        heading='Our Services' 
        message='Come and explore the fun and activities are that are available with us' 
        buttonText='Join Us'
        />
        <Step className="text-gray-600 body-font"/>
    </div>
  )
}

export default services