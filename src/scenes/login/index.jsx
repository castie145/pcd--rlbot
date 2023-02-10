import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { withRouter } from 'react-router-dom';
import React from 'react';
import Register from "../register";



const SignUpButton = ({ history }) => {
  const handleClick = () => {
    history.push('../register');
  };

  return (
    <Button type="submit" color="secondary" variant="contained" onClick={handleClick}>
      You don't have an account? SIGN UP
    </Button>
  );
};








const Login = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    
    <Box m="100px">
      
      <Header title="WELCOME TO TRADING PLATFORM" subtitle="LOGIN" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              gap="60px"
              gridTemplateColumns="repeat(2, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
              }}
            >
              
             
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 1" }}
              />
              
           
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                
                sx={{ gridColumn: "span 1" }}
               
              />
            </Box>
            <Box display="flex" justifyContent="center" mt="20px" gap="30px">
              <Button type="submit" color="secondary" variant="contained">
LOGIN </Button>
            
            
<SignUpButton/>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};



const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Login;
