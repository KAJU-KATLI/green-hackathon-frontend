import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './Hero/Hero'
import AboutUs from './AboutUs/AboutUs'
import Footer from '../../components/Footer/Footer'



const index = () => {
    return (
        <>
          <Navbar/> 
          <Hero/>
          <AboutUs/>
          <Footer/>
        </>
    )
}

export default index
