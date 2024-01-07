import "./FooterStyles.css";
import React from 'react';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>6th Block,Rajajinagar</p>
              <p>Bangalore</p>
            </div>
          </div>
          <div className="phone">
            <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              6394988130</h4>

          </div>
          <div className="email">
            <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              archnaaa18@gmail.com</h4>

          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>I am a motivated and adaptable web developer eager to take thenext step in my career.
            Passionate front-end developer adept at turning designsinto dynamic, user-friendly websites. Committed to cleancode, responsive design, and delivering seamless userexperiences.
          </p>
          <div className="social">
            <FaWhatsapp size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />

          </div>
        </div>

      </div>

    </div>
  );
}

export default Footer;
