import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export default function Text(props) {
    const {label, placeholder, name, control} = props
    return (
    <Controller
        name = {name}
        control = {control}
        render={({
            field: {onChange, value},
            fieldState: {error},
            formState,
        }) => (
            <Box
            sx={{ '& > :not(style)': {
                m: 1,
                width: '100%',
            }}}
            noValidate
            autoComplete="off"
            >
                <TextField
                    onChange={onChange}
                    value={value}
                    id="outlined-basic"
                    label={label}
                    variant="outlined"
                    placeholder={placeholder}
                    error={!!error}
                    helperText={error?.message}
                    InputProps={{
                        style: {
                            color: 'white', // Set the input text color to white
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            color: 'white', // Set the label text color to white
                        },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white', // Set the border color to white
                            },
                            '&:hover fieldset': {
                                borderColor: 'white', // Set the border color to white on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white', // Set the border color to white when focused
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: 'white', // Set the input text color to white
                        },
                        '& .MuiInputLabel-root': {
                            color: 'white', // Set the label text color to white
                        },
                    }}
                />
            </Box>
        )
    }
    />
  );
}