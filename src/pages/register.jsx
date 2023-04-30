import React from 'react'
import Hero from '../components/Hero'
import PreRegisterForm from '../components/PreRegisterForm'

const register = () => {
  return (
    <div>
      <Hero 
      heading='Pre-Register Your A Star' 
      message='Start the journey' 
      buttonText = "Let's go"
      />
      <PreRegisterForm />
    </div>
  )
}

export default register