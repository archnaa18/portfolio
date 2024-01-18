import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import PricingCart from '../Components/PricingCart';
import WorkCard from '../Components/WorkCard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works."/>
      <WorkCard/>
      <PricingCart/>
      <Footer />
    </div>
  )
}

export default Project