import React, { useState } from "react";
import { Box, Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import Home from "../pages/Home";





function Formdata() {
      const URL = "http://localhost:3333/students";

    const [studentadd, setStudentadd] = useState({
      stu_name: "",
      fname: "",
      email: "",
      city: "",
      classname: "",
    });
  const [status, setStatus] = useState()
  
  function onTextFieldChange(e) {
    setStudentadd({
      ...studentadd,
      [e.target.name]: e.target.value,
    });
    
  }

   
  async function onFormSubmit(e) {
    e.preventDefault();
    try {
        await axios.post(URL, studentadd);
        setStatus(true);
    } catch {
      console.log("something is wrong");
    }
    }
    
    if (status) {
        return <Home/>
}

  return (
    <>
      {/* <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
        <Typography variant="h4">Add Student</Typography>
      </Box> */}
      <form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={2} md={2} ml={1}>
            <TextField
              autoComplete="off"
              name="stu_name"
              variant="outlined"
              required
              fullWidth
              id="stuname"
              label="Name"
              onChange={(e) => onTextFieldChange(e)}
            />
          </Grid>

          <Grid item xs={2} md={2}>
            <TextField
              autoComplete="off"
              name="fname"
              variant="outlined"
              required
              fullWidth
              id="fname"
              label="Fathername"
              onChange={(e) => onTextFieldChange(e)}
            />
          </Grid>

          <Grid item xs={2} md={2}>
            <TextField
              name="email"
              variant="outlined"
              required
              fullWidth
              id="email"
              autoComplete="off"
              label="Email Address"
              onChange={(e) => onTextFieldChange(e)}
            />
          </Grid>
          <Grid item xs={2} md={2}>
            <TextField
              autoComplete="off"
              name="city"
              variant="outlined"
              required
              fullWidth
              id="city"
              label="City"
              onChange={(e) => onTextFieldChange(e)}
            />
          </Grid>
          <Grid item xs={2} md={2}>
            <TextField
              autoComplete="off"
              name="classname"
              variant="outlined"
              required
              fullWidth
              id="classname"
              label="classname"
              onChange={(e) => onTextFieldChange(e)}
            />
          </Grid>
          <Box xs={3} m={3} md={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={(e) => onFormSubmit(e)}
            >
              Add new student
            </Button>
          </Box>
        </Grid>
      </form>
    </>
  );
}

export default Formdata;
