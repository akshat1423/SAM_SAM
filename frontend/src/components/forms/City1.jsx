import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";

export default function City1(props) {
  const { label, name, control } = props;

  const [city1, setCity1] = React.useState("");

  const handleChange = (event) => {
    setCity1(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0.7rem",
      }}
    >
      <Box sx={{ width: "50ch" }}>
        <Controller
          name={name}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
                {label}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                error={!!error}
                onChange={onChange}
                sx={{
                  color: "white", // Text color
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white", // Border color
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white", // Border color on hover
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white", // Border color when focused
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white", // Icon color
                  },
                }}
              >
                <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                <MenuItem value={"Pune"}>Pune</MenuItem>
                <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                <MenuItem value={"Jaipur"}>Jaipur</MenuItem>
              </Select>
              <FormHelperText sx={{color: '#d32f2f'}}> {error?.message} </FormHelperText>
            </FormControl>
          )}
        />
      </Box>
    </Box>
  );
}
