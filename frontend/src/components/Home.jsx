import React from 'react';
import Button from '@mui/material/Button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import FakeHeader from './FakeHeader/FakeHeader';
import Navbarr from './Navbar/Navbarr'
import Carousel from './Homee/Carousel';
import About from './About/About';
// import Cities from './Cities/Cities';



// const Home = () => {
//   return (
//     <Box
//       display="flex"
//       flexDirection= "column"
//       justifyContent="center"
//       alignItems="center"
//       minHeight="100vh"
//     >
//       <div>
//         <h1>This is the home page</h1>
//       </div>
//       <Button
//         variant="contained"
//         size="large"
//         endIcon={<AppRegistrationIcon />}
//         component={Link} to="/register"
//         style={{ backgroundColor: '#0d6dcf' }}
//       >
//         Register
//       </Button>
//     </Box>

//   );
// };

function Home(params) {
  return(
    <>
    <FakeHeader />
    <Navbarr></Navbarr>
    <Carousel></Carousel>
    <About></About>
  
    </>
  )
}

export default Home;