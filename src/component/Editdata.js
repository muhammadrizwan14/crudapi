import React, { useState, useEffect } from "react";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { deepPurple, green } from "@mui/material/colors";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Home from "../pages/Home";

const useStyles = makeStyles({
  headingColor: {
    backgroundColor: green[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
});

function Editdata() {
  const classes = useStyles();
  const { id } = useParams();
  const [updatedata, setUpdatedata] = useState({
    stu_name: "",
    email: "",
    city: "",
  });
    const [status, setStatus] = useState();

  
  useEffect(() => {
    updatestudent();
  }, [id]);
  async function updatestudent() {
    try {
      const studentupdate = await axios.get(
        `http://localhost:3333/students/${id}`
      );
      setUpdatedata(studentupdate.data);
    } catch {
      console.log("something is wrong");
    }
  }
 function onTextFieldChange(e) {
   setUpdatedata({
     ...updatedata,
     [e.target.name]: e.target.value,
   });
 }
  
  async function onFormUpdate(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/students/${id}`, updatedata);
           setStatus(true);
    } catch {
      console.log("something is wrong");
    }
  }
    if (status) {
      return <Home />;
    }

  return (
    <>
      <Navbar />
      <Grid container justifyContent={"center"} spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Edit Student</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="Id"
                  autoFocus
                  value={id}
                  disabled
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoComplete="stuname"
                  name="stu_name"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  value={updatedata.stu_name}
                  label="Name"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  value={updatedata.email}
                  label="Email Address"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoComplete="city"
                  name="city"
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  value={updatedata.city}
                  label="city"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>

            <Box m={3}>
             
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={(e) => onFormUpdate(e)}
                >
                  Update
                </Button>
          
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default Editdata;
