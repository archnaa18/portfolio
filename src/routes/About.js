import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';

const About = () => {
  return (
    <div>
       <Navbar />
       <Heroimg2 heading="ABOUT." text="I'm a Web Developer/Front-End Developer."/>
      <Footer />
    </div>
  )
}

export default About