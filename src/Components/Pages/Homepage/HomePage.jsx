import React from 'react'
import Navbar from '../../Navbar';

import Hero from '../../Hero'
import SecuritySolutions from '../../SecuritySolution';
import MarketInsights from '../../MarketInsights';
import HeroSection from '../../Section';
import ClientsSection from '../../ClientsSection';
import Footer from '../../Footer';
const Homepage = () => {

  return (
    <div>
      <Navbar />
      <Hero />
     <SecuritySolutions/>
     <MarketInsights />
     <HeroSection/>
     <ClientsSection/>
     <Footer/>
    </div>
  )
}

export default Homepage