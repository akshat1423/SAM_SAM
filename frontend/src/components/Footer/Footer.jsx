
import React,{useState} from "react";
import "./Footer.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sarclogo from "./sarclogo.png";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ cityRefs }) => {


  const [activeCity, setActiveCity] = useState('');

  const handleCityClick = (cityName) => {
    setActiveCity(cityName);
    const cityRef = cityRefs[cityName.toLowerCase()];
    if (cityRef && cityRef.current) {
      document. getElementById("cities"). scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="a">
      <div className="footer">
        <div className="footer-section-logo">
          <div className="footer-logo">
            <img
              src={sarclogo}
              alt="sarclogo"
            ></img>
          </div>
          {/* <div className="footer-query">
            .
          </div> */}
        </div>
        <div className="footer-section">
          <h2>
            <b>Cities</b>
          </h2>
          <br />
          <ul>
            {['Mumbai', 'Pune', 'Delhi','Indore', 'Jaipur'].map((city) => (
              <li
                key={city}
                onClick={() => handleCityClick(city)}
                style={{ color: activeCity === city ? '#0d6dcf' : 'inherit',cursor: 'pointer' }}
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <br />
          <div className="footer-map-icon">
            <a
              href="https://maps.app.goo.gl/EcbsqPgWn29jmGtr5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt size={32} color="#0d6dcf" />&nbsp;
              <span className="map-text">SARC Room, SAC, IITB</span>
            </a>
          </div>
          <br></br>
          <div className="footer-map-icon">
            
            <span className="mail-text">
              <a href="mailto:akshat@sarciitb.org"><IoMdMail className="footer-map-icon" size={32} color="#0d6dcf" /> &nbsp; akshat@sarciitb.org</a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-social">
        <h2 id="b">Get connected with us on social networks:</h2>
        <div className="social-icons">
          <a
            href="https://in.linkedin.com/in/sarciitb"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <li>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </li>
          </a>
          <a
            href="https://www.instagram.com/sarc_iitb?igsh=MWlvc2R3djN3a2t0ZQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <li>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </li>
          </a>
          <a
            href="https://www.youtube.com/c/SARCIITBombay"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            {" "}
            <li>
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </li>
          </a>
          <a
            href="https://www.facebook.com/SARC.IITB"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <li>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </li>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;


