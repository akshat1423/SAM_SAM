import React, { useState } from 'react';
import './Cities.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Cities = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const citiesData = [
    { name: 'Mumbai', img: 'url(https://images.pexels.com/photos/11327644/pexels-photo-11327644.jpeg?auto=compress&cs=tinysrgb&w=800)' },
    { name: 'Pune', img: 'url(https://media.istockphoto.com/id/1925146052/photo/beautiful-lake-side-view.jpg?b=1&s=612x612&w=0&k=20&c=9z03Rw0slMfu8JTuasiesOdmAe6lJh33WBKfZ4p4Ddc=)' },
    { name: 'Hyderabad', img: 'url(https://images.pexels.com/photos/16573687/pexels-photo-16573687/free-photo-of-lake-and-bridge-in-hyderabad.jpeg?auto=compress&cs=tinysrgb&w=800)' },
    { name: 'Jaipur', img: 'url(https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800)' },
  ];

  const cardVariants = {
    expanded: {
      flex: 3,
      transition: { duration: 0.5 },
    },
    compressed: {
      flex: 1,
      transition: { duration: 0.5 },
    },
    normal: {
      flex: 2,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="container">
      <h1 className='page-heading'>CITIES</h1>
      <div className='cities-main flex flex-row justify-center gap-4'>
        {citiesData.map((city, index) => (
          <motion.div
            key={city.name}
            className={`city-section cursor-pointer ${index % 2 === 0 ? 'left' : 'right'}`}
            variants={cardVariants}
            animate={
              hoveredIndex === null
                ? "normal"
                : index === hoveredIndex
                ? "expanded"
                : "compressed"
            }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: index === hoveredIndex ? city.img : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={city.name.toLowerCase()}>
              <h1 className='heading'><b>{city.name.toUpperCase()}</b></h1>
              {index === hoveredIndex && (
                <>
                  <a href="https://maps.app.goo.gl/EcbsqPgWn29jmGtr5" target="_blank" rel="noopener noreferrer">
                    <FaMapMarkerAlt size={32} color="#0d6dcf" />
                    <span>{city.name}</span>
                  </a>
                  <p>Timings: 5pm-7pm</p>
                  <div className="img">
                    <img src='https://th.bing.com/th?id=OIP.w_QDWYQQPWOaN-rOwT7csQHaJI&w=225&h=277&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2' alt='img' height={100} />
                    <img src='https://th.bing.com/th?id=OIP.w_QDWYQQPWOaN-rOwT7csQHaJI&w=225&h=277&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2' alt='img' height={100} />
                    <img src='https://th.bing.com/th?id=OIP.w_QDWYQQPWOaN-rOwT7csQHaJI&w=225&h=277&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2' alt='img' height={100} />
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Cities;


