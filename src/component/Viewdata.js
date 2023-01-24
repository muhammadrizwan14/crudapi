import React, { useState,useEffect} from 'react';
import {
    Typography, Box, TableContainer, Table, TableBody,
    TableCell, TableHead, TableRow, Paper,Button
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { orange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useParams} from "react-router-dom";
// import { useHistory } from "react-router-dom";

import axios from 'axios';
const useStyles = makeStyles({
    stuListColor: {
        backgroundColor: orange[400],
        color: "white"
    },
    tableHeadCell: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
})

function Viewdata() {
    const classes = useStyles();
    const { id } = useParams();
    const [datastu, setDatastu] = useState([]);
    // const history = useHistory();
    
    useEffect(() => {
      getstudent();
    }, [id]);
    async function getstudent() {
      try {
          const studentdata1 = await axios.get(
            `http://localhost:3333/students/${id}`
          )
        setDatastu(studentdata1.data);
      } catch {
        console.log("something is wrong");
      }
    }
//   const handleClick = () => {
//        history.push ('/');
//     }    
    return (
      <>
        <Box textAlign="center" p={2} className={classes.stuListColor}>
          <Typography variant="h4">Student Detail</Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "#616161" }}>
                <TableCell align="center" className={classes.tableHeadCell}>
                  ID
                </TableCell>
                <TableCell align="center" className={classes.tableHeadCell}>
                  Name
                </TableCell>
                <TableCell align="center" className={classes.tableHeadCell}>
                  Fathername
                </TableCell>
                <TableCell align="center" className={classes.tableHeadCell}>
                  Class
                </TableCell>
                <TableCell align="center" className={classes.tableHeadCell}>
                  Email
                </TableCell>
                <TableCell align="center" className={classes.tableHeadCell}>
                  City
                </TableCell>
                <TableCell align="center" className={classes.tableHeadCell}>
                  Image
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">{datastu.id}</TableCell>
                <TableCell align="center">{datastu.stu_name}</TableCell>
                <TableCell align="center">{datastu.fname}</TableCell>
                <TableCell align="center">{datastu.classname}</TableCell>
                <TableCell align="center">{datastu.email}</TableCell>
                <TableCell align="center">{datastu.city}</TableCell>
                <TableCell align="center">
                  <img
                    src={datastu.imgurl}
                    alt="profile"
                    style={{ height: "70px", width: "70px" }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box m={3} textAlign="center">
          <Link to={"/"}>
            <Button variant="contained" color="primary">
              Back to Home
            </Button>
          </Link>
          {/* onClick={handleClick} */}
        </Box>
      </>
    );
}

export default Viewdata