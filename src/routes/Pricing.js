import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Pricingcard from '../components/Pricingcard'

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='PRICING.' text='Choose your package'/>
        <Pricingcard/>
        <Footer/>
    </div>
  )
}

export default Pricing