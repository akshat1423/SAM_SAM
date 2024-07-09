
import React,{useState} from "react";
import "./Footer.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABSBAMAAABu5sHcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURfr49kdwTPr59/r49vr49vr49vr49vr49vr49vr49vr49u7ZVLwAAAALdFJOU/8AEuwrSpy302aEfP2XowAABBhJREFUWMPtl89z2kYUx9+MpoT0thrpYG6rEYnhpFStQ32Thh+xbxBjsE9NjGXsE53ww3BiBmNDTgkuv3yqXYfG/JV9K2QXJIw34dCZDk/DDOyuPnr71b7vLkCWDFgBVoD/HyB2Nbbj83cCQnkN7Hj1fQApD7AUIAtzAZQXIBUA9EiLxe9T/cGhyQkIa+A/7qZZJP/tVvORKuUDZEGYMzSO2BQXQPwL/B1Pr8iEyXEBUIJNbwKIBTjjA2jQJMsAZICiuw8zGsCc9scA711d8t2OyUTs8E3B+6Sw3qql8y3O1yjVoe0GAAjnOzucC0n6DTZcjwrg/IUSby2IlyB0PBkgIclbCwmATZNOYgoAPxNRsYM+AQihGZzfDe2I2oPXKg0EPKPb4/FoZFldw8k1Gt1Ld/fS1F2NB5ivPonXt3aTsvUB21IDXdMFTderNkHaP23Ygwy3H+xqD4YArydyKLgMIHfpNEZYUYi7jcmve3HmORLGR0oUJ62zywcs3hNy7p8DIMG8rtnBum+kq9SkGtsZ22Va2JgjIlvbgh2G15XVK+sEL4uZazOgF513o0ZZ7GEyz6lcB7iwrJE1OjEW7Asoh39XazoAR265gGnj7w3j6Y0Fpy7cnd6KMwDmup0BTo5nZ8qg+OkoqjANQNd8fwDPDB4Ajj0Te/rNDADnXyrAD1x7o4z+FKqjQ8wACtCuw098gDr8Yk93GiDZgFe8gI8FAdfuNCBY588AK+tc8xnELWK1zqlBQoOy9ivxvMbbgsd25gLQzYWxeyGhBEIKF0iKA7BdB/++CyD1AXwGlkKbPgbYmrhJOt1DG/CFHwD7FsbRKSsQtlcKtckWTD2At46d6Kwci4F7wMbX+3KOJO1DgGM73mL6NOUHEQMBaIMzAExezDzYTnIRQC+RgLY5HNIZAHMk+eBxwKXmhB7BJRTA48qFkRBgsx/RGxE2L1u+rQ86sxNd9wLiVrlcwSifdHE3ktGKx0a4XKnGmGR76DJ+do8YG1UqRyirVwMlqqrMfUyTPcneDbAt6mxt6sG9FbC2qKrQbz2pvph/UuAHiAV4vtxZ+U/4kS4ERIkZS6dQJdQqliJBQzIlXG+SGaQqtYvJtxjQUw77FzkiV6
                   pEPjqmmetw8WX5hsSLiVRvAnD7oQvwt1qN1kwiVwck/kfm89tiork+LJI3zfDhMS9APKEkWO2TvvHi3aA5YACxX1Mr9vHpDfi4AHKjLY6M8LtReXS4HrkRy0fKIEm+JYNSlvaT8evR11ppPV2SWq1kxgE8ISID1DCDWp/Gj3tJK1sqrd+V1orx66zBBbhSvohdtJ5RDj+HZBjqfAlYqbVO8HqbD6DYFxHZS1fxq0gV0aQiuwgX4KkYLAvI/ueAbet4OcDq3/sKsAIsin8AoyIsCVxS3u8AAAAASUVORK5CYII="
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
              <a href="mailto:web@sarc-iitb.org"><IoMdMail className="footer-map-icon" size={32} color="#0d6dcf" /> &nbsp; web@sarc-iitb.org</a>
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


