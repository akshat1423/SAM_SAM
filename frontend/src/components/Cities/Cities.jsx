// import React, { useState } from 'react';
// import './Cities.css';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Cities = ({ cityRefs }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   const citiesData = [
//     { name: 'Mumbai', img: 'url(https://images.pexels.com/photos/11327644/pexels-photo-11327644.jpeg?auto=compress&cs=tinysrgb&w=800)' },
//     { name: 'Pune', img: 'url(https://media.istockphoto.com/id/1925146052/photo/beautiful-lake-side-view.jpg?b=1&s=612x612&w=0&k=20&c=9z03Rw0slMfu8JTuasiesOdmAe6lJh33WBKfZ4p4Ddc=)' },
//     { name: 'Delhi', img: 'url(https://images.pexels.com/photos/16573687/pexels-photo-16573687/free-photo-of-lake-and-bridge-in-Delhi.jpeg?auto=compress&cs=tinysrgb&w=800)' },
//     { name: 'Jaipur', img: 'url(https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800)' },
//     { name: 'Indore', img: 'url(https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800)' },
//   ];

//   const cardVariants = {
//     expanded: {
//       flex: 3,
//       transition: { duration: 0.5 },
//     },
//     compressed: {
//       flex: 1,
//       transition: { duration: 0.5 },
//     },
//     normal: {
//       flex: 2,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <div className="container">
//       <h1 className='page-heading'>CITIES</h1>
//       <div className='cities-main flex flex-row justify-center gap-4'>
//         {citiesData.map((city, index) => (
//           <motion.div
//             key={city.name}
//             className={`city-section cursor-pointer ${index % 2 === 0 ? 'left' : 'right'}`}
//             variants={cardVariants}
//             animate={
//               hoveredIndex === null
//                 ? "normal"
//                 : index === hoveredIndex
//                 ? "expanded"
//                 : "compressed"
//             }
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//             style={{
//               overflow: 'hidden',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundImage: index === hoveredIndex ? city.img : 'none',
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//             ref={cityRefs[city.name.toLowerCase()]}
//           >
//             <div className={city.name.toLowerCase()}>
//               <h1 className='heading'><b>{city.name.toUpperCase()}</b></h1>
//               {index === hoveredIndex && (
//                 <>
//                   <a href="https://maps.app.goo.gl/EcbsqPgWn29jmGtr5" target="_blank" rel="noopener noreferrer">
//                     <FaMapMarkerAlt size={32} color="#0d6dcf" />
//                     <span>{city.name}</span>
//                   </a>
//                   <p>Timings: 5pm-7pm</p>
                  
//                 </>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cities;


import React, { useState } from 'react';
import './Cities.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Cities = ({ cityRefs }) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const citiesData = [
    { name: 'Mumbai', img: 'url(https://images.pexels.com/photos/11327644/pexels-photo-11327644.jpeg?auto=compress&cs=tinysrgb&w=800)' ,date:'13th July,2024'},
    { name: 'Pune', img: 'url(https://media.istockphoto.com/id/1925146052/photo/beautiful-lake-side-view.jpg?b=1&s=612x612&w=0&k=20&c=9z03Rw0slMfu8JTuasiesOdmAe6lJh33WBKfZ4p4Ddc=)' ,date:'14th July,2024'},
    { name: 'Delhi', img: 'url(https://images.pexels.com/photos/16573687/pexels-photo-16573687/free-photo-of-lake-and-bridge-in-Delhi.jpeg?auto=compress&cs=tinysrgb&w=800)',date:'14th July,2024' },
    { name: 'Jaipur', img: 'url(https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800)' ,date:'13th July,2024'},
    { name: 'Indore', img: 'url(https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800)',date:'14th July,2024' },
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
            className={`city-section cursor-pointer ${index % 2 === 0 ? 'left' : 'right'} ${index === 0 ? 'mumbai-default' : ''}`}
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
              backgroundImage: city.img,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            ref={cityRefs[city.name.toLowerCase()]}
          >
            <div className={city.name.toLowerCase()}>
              <h1 className='heading'><b>{city.name.toUpperCase()}</b></h1>
              {(index === hoveredIndex || index === 0) && (
                <>
                  <a href="https://maps.app.goo.gl/EcbsqPgWn29jmGtr5" target="_blank" rel="noopener noreferrer">
                    <FaMapMarkerAlt size={32} color="#0d6dcf" />
                    <span>{city.name}</span>
                  </a>
                   <p>Date: {city.date}</p>
                  <p>Timings: 5pm-7pm</p>
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
