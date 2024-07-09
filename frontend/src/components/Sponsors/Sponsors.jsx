import React from 'react';
// import { Tilt } from 'react-tilt';
import './Sponsors.css';

import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import logo3 from './assets/logo3.png';

const sponsors = [
  { name: 'Sponsor 1', logo: logo1 },
  { name: 'Sponsor 2', logo: logo2 },
  { name: 'Sponsor 3', logo: logo3 },
];

const tiltOptions = {
  max: 25, 
  scale: 1.1, 
  speed: 300, 
  glare: true,
  'max-glare': 0.5, 
};

const Sponsors = () => {
  return (
    <div className='sponsors-wrapper'>
    <h2 className='sponsors-heading'>OUR SPONSORS</h2>
    <div className="sponsors-container">
        
{/*       {sponsors.map((sponsor, index) => (
        <Tilt className="tilt" options={tiltOptions} key={index}>
          <div className="sponsor-logo">
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        </Tilt>
      ))} */}
    </div>
    </div>
  );
};

export default Sponsors;
