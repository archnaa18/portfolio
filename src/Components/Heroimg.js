import "./HeroimgStyles.css";
import React from 'react';
import Introimg from '../assets/home-bg.jpg';
import { Link } from "react-router-dom";

const Heroimg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="intro-img" src= {Introimg} alt="Introimg"/>
    </div>
    <div className="content">
        <p>HI, I'M A WEB DEVELOPER</p>
        <h1>React DEVELOPER.</h1>
        <div>
          <Link to="/project" className="btn">PROJECTS</Link>
          <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
    </div>



  </div>
}

export default Heroimg;
