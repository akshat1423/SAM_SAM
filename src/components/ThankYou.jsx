import React from 'react'
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div style={{
      backgroundColor: '#2d2c31',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      }}
    >
      <h1 style={{color: 'white', marginBottom: 0, paddingBottom: 0}}>Thank you for registering!</h1>
      <p style={{color: 'white', paddingBottom: '2rem'}}>Your information has been successfully submitted.</p>
      <Box>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowBackIosIcon />}
          component={Link} to="/"
          style={{ backgroundColor: '#0d6dcf' }}
        >
          Back to Home
        </Button>
      </Box>
    </div>
  )
}

export default ThankYou