import React from 'react';
import Button from '@mui/material/Button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection= "column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <div>
        <h1 style={{color: 'white'}}>This is the home page</h1>
      </div>
      <Button
        variant="contained"
        size="large"
        endIcon={<AppRegistrationIcon />}
        component={Link} to="/register"
        style={{ backgroundColor: '#0d6dcf' }}
      >
        Register
      </Button>
    </Box>
  );
};

export default Home;