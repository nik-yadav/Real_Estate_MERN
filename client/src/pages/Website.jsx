import React from 'react'
import Companies from "../Components/Companies/Companies.jsx"
import Contact from "../Components/Contact/Contact.jsx"
import GetStarted from "../Components/GetStarted/GetStarted.jsx"
import Hero from "../Components/Hero/Hero.jsx"
import Residencies from "../Components/Residencies/Residencies.jsx"
import Value from "../Components/Value/Value.jsx"
import Header from '../Components/Header/Header.jsx'
import Footer from '../Components/Footer/Footer.jsx'

const Website = () => {
  return (
    <div className='App'>
        <div>
            <div className="white-gradient" />
            <Hero />
        </div>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
    </div>
  )
}

export default Website