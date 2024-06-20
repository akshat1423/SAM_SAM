import React from 'react'
import Button from '@mui/material/Button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Text from './forms/Text'
import City from './forms/City'
import Comment from './forms/Comment'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

import AxiosInstance from './Axios';

const Register = () => {
  const navigate = useNavigate();

  const defaultValues = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    city: '',
    comment: '',
  }

  const { handleSubmit, reset, setValue, control } = useForm({ defaultValues: defaultValues })

  const submission = (data) => {
    AxiosInstance.post( `student/`, {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone_number: data.phone_number,
      city: data.city,
      comment: data.comment,
    });
    navigate('/thank-you')
  }
  return (
    <div style={{
      backgroundColor: '#2d2c31',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit(submission)}
      >
        <Text
          label = "First Name"
          name = "first_name"
          control = { control }
          placeholder = "Enter your first name"
        />
        <Text
          label = "Last Name"
          name = "last_name"
          control = { control }
          placeholder = "Enter your last name"
        />
        <Text
          label = "Email"
          name = "email"
          control = { control }
          placeholder = "Enter your email"
        />
        <Text
          label = "Phone Number"
          name = "phone_number"
          control = { control }
          placeholder = "(preferable WhatsApp)"
        />
        <City
          label = "Choose Your Location"
          name = "city"
          control = { control }
        />
        <Comment
          label = "Any questions for us?"
          name = "comment"
          control = { control }
          placeholder = "(optional)"
        />
        <Button
          variant="contained"
          size="large"
          type="submit"
          endIcon={<AppRegistrationIcon />}
          style={{ backgroundColor: '#0d6dcf' }}
        >
          Register
        </Button>
      </form>
    </div>
  )
}

export default Register