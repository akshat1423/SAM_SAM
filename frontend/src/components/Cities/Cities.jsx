// // import React, { useState } from 'react';
// // import './Cities.css';
// // import { FaMapMarkerAlt } from 'react-icons/fa';
// // import { motion } from 'framer-motion';

// // const Cities = ({ cityRefs }) => {
// //   const [hoveredIndex, setHoveredIndex] = useState(null);

// //   const handleMouseEnter = (index) => {
// //     setHoveredIndex(index);
// //   };

// //   const handleMouseLeave = () => {
// //     setHoveredIndex(null);
// //   };

// //   const citiesData = [
// //     { name: 'Mumbai', img: 'url(https://images.pexels.com/photos/11327644/pexels-photo-11327644.jpeg?auto=compress&cs=tinysrgb&w=800)' },
// //     { name: 'Pune', img: 'url(https://media.istockphoto.com/id/1925146052/photo/beautiful-lake-side-view.jpg?b=1&s=612x612&w=0&k=20&c=9z03Rw0slMfu8JTuasiesOdmAe6lJh33WBKfZ4p4Ddc=)' },
// //     { name: 'Delhi', img: 'url(https://images.pexels.com/photos/16573687/pexels-photo-16573687/free-photo-of-lake-and-bridge-in-Delhi.jpeg?auto=compress&cs=tinysrgb&w=800)' },
// //     { name: 'Jaipur', img: 'url(https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800)' },
// //     { name: 'Indore', img: 'url(https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800)' },
// //   ];

// //   const cardVariants = {
// //     expanded: {
// //       flex: 3,
// //       transition: { duration: 0.5 },
// //     },
// //     compressed: {
// //       flex: 1,
// //       transition: { duration: 0.5 },
// //     },
// //     normal: {
// //       flex: 2,
// //       transition: { duration: 0.5 },
// //     },
// //   };

// //   return (
// //     <div className="container">
// //       <h1 className='page-heading'>CITIES</h1>
// //       <div className='cities-main flex flex-row justify-center gap-4'>
// //         {citiesData.map((city, index) => (
// //           <motion.div
// //             key={city.name}
// //             className={`city-section cursor-pointer ${index % 2 === 0 ? 'left' : 'right'}`}
// //             variants={cardVariants}
// //             animate={
// //               hoveredIndex === null
// //                 ? "normal"
// //                 : index === hoveredIndex
// //                 ? "expanded"
// //                 : "compressed"
// //             }
// //             onMouseEnter={() => handleMouseEnter(index)}
// //             onMouseLeave={handleMouseLeave}
// //             style={{
// //               overflow: 'hidden',
// //               display: 'flex',
// //               flexDirection: 'column',
// //               alignItems: 'center',
// //               justifyContent: 'center',
// //               backgroundImage: index === hoveredIndex ? city.img : 'none',
// //               backgroundSize: 'cover',
// //               backgroundPosition: 'center',
// //             }}
// //             ref={cityRefs[city.name.toLowerCase()]}
// //           >
// //             <div className={city.name.toLowerCase()}>
// //               <h1 className='heading'><b>{city.name.toUpperCase()}</b></h1>
// //               {index === hoveredIndex && (
// //                 <>
// //                   <a href="https://maps.app.goo.gl/EcbsqPgWn29jmGtr5" target="_blank" rel="noopener noreferrer">
// //                     <FaMapMarkerAlt size={32} color="#0d6dcf" />
// //                     <span>{city.name}</span>
// //                   </a>
// //                   <p>Timings: 5pm-7pm</p>
                  
// //                 </>
// //               )}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Cities;


// import React, { useState } from 'react';
// import './Cities.css';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Cities = ({ cityRefs }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(0);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   const citiesData = [
//     { name: 'Mumbai', img: 'url(https://images.pexels.com/photos/11327644/pexels-photo-11327644.jpeg?auto=compress&cs=tinysrgb&w=800)' ,date:'13th July,2024',location:"https://maps.app.goo.gl/2jCgPgpVNyKiBxVX7",Timings:'10:00 AM - 1:00 PM'},
//     { name: 'Pune', img: 'url(https://media.istockphoto.com/id/1925146052/photo/beautiful-lake-side-view.jpg?b=1&s=612x612&w=0&k=20&c=9z03Rw0slMfu8JTuasiesOdmAe6lJh33WBKfZ4p4Ddc=)' ,location:'https://maps.app.goo.gl/bxz1vbvxb2PKZYrV8',date:'14th July,2024',Timings:'1:00 PM - 4:00 PM'},
//     { name: 'Delhi', img: 'url(https://images.pexels.com/photos/16573687/pexels-photo-16573687/free-photo-of-lake-and-bridge-in-Delhi.jpeg?auto=compress&cs=tinysrgb&w=800)',date:'14th July,2024',location:"https://maps.app.goo.gl/x96M3irs2hkxyJVN8" ,Timings:'2:00 PM - 4:00 PM'},
//     { name: 'Jaipur', img: 'url(https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800)' ,date:'13th July,2024',location:'',Timings:'4:00 PM - 8:00 PM'},
//     { name: 'Indore', img: 'url(https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800)',date:'14th July,2024',location:'https://maps.app.goo.gl/X8YsHZNg5L3tB2uY7',Timings:'2:00 PM - 5:00 PM' },
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
//             className={`city-section cursor-pointer ${index % 2 === 0 ? 'left' : 'right'} ${index === 0 ? 'mumbai-default' : ''}`}
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
//               backgroundImage: city.img,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//             ref={cityRefs[city.name.toLowerCase()]}
//           >
//             <div className={city.name.toLowerCase()}>
//               <h1 className='heading'><b>{city.name.toUpperCase()}</b></h1>
//               {(index === hoveredIndex || index === 0) && (
//                 <>
//                   <a href={city.location} target="_blank" rel="noopener noreferrer">
//                     <FaMapMarkerAlt size={32} color="#0d6dcf" />
//                     <span>{city.name}</span>
//                   </a>
//                    <p>{city.date}</p>
//                   <p>{city.Timings}</p>
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
import { Zoom } from 'react-awesome-reveal';

const Cities = ({ cityRefs }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const citiesData = [
    { name: 'Mumbai', img: 'url(https://wallpapercave.com/wp/wp4646412.jpg)', date: '13th July,2024', location: "https://maps.app.goo.gl/2jCgPgpVNyKiBxVX7", Timings: '10:00 AM - 1:00 PM',loc:' Fynd, WeWork Vijay Diamond, Cross Rd B, M.I.D.C, Ajit Nagar, Kondivita, Andheri East3'  },
    { name: 'Pune', img: 'url(https://i.pinimg.com/originals/0f/67/eb/0f67eb672b9e06d118b11017e535fe71.jpg)', location: 'https://maps.app.goo.gl/bxz1vbvxb2PKZYrV8', date: '14th July,2024', Timings: '1:00 PM - 4:00 PM' ,loc:'Lane, 3, near Vijay Sales - Baner, Pallod Farms, Baner' },
    { name: 'Delhi', img: 'url(https://imgcld.yatra.com/ytimages/image/upload/v1461929855/Delhi-Red_Fort1.jpg)', date: '14th July,2024', location: "https://maps.app.goo.gl/x96M3irs2hkxyJVN8", Timings: '2:00 PM - 4:00 PM' ,loc:'Synergy Building, IIT Campus, Indian Institute of Technology Delhi' },
    { name: 'Jaipur', img: 'url(https://img.fotocommunity.com/hawa-mahal-2f825cc6-a187-4b57-8dba-dbd755d091ea.jpg?height=1080)', date: '13th July,2024', location: 'https://maps.app.goo.gl/MNLtkSUr1JFoVuo98', Timings: '4:00 PM - 8:00 PM',loc:'Jai Club (Baramasi Hall)' },
    { name: 'Indore', img: 'url(https://www.tusktravel.com/blog/wp-content/uploads/2021/08/Gandhi-Hall-Indore-Madhya-Pradesh.jpg)', date: '14th July,2024', location: 'https://maps.app.goo.gl/X8YsHZNg5L3tB2uY7', Timings: '2:00 PM - 5:00 PM' ,loc:'23, Sir M. Visvesvaraya Marg, Vallabh Nagar' },
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
      {/* <h1 className='page-heading'>CITIES</h1> */}
      <Zoom>
            <h1 style={{ pointerEvents: 'none' }}>
                <span className="green">CITIES</span>
            </h1>
            <p></p>
        </Zoom>
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
              <a href={city.location} target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt size={32} color="#0d6dcf" />
                <span>{city.loc}</span>
              </a>
              {(hoveredIndex === index) && (
                <>
                  <p className='city-section'>{city.date}</p>
                  <p className='city-section'>{city.Timings}</p>
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
