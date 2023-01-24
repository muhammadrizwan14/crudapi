import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { orange } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import axios from "axios";

const useStyles = makeStyles({
  stuListColor: {
    backgroundColor: orange[400],
    color: "white",
  },
  tableHeadCell: {
    color: "white !important",
    fontWeight: "bold",
    fontSize: 16,
  },
});

function List() {
  const classes = useStyles();
  const [studata, setStudtata] = useState([]);
  const URL = "http://localhost:3333/students";
  useEffect(() => {
    getAllstudent();
  }, []);
  async function getAllstudent() {
    try {
      const studentdata = await axios.get(URL);
      setStudtata(studentdata.data);
    } catch {
      console.log("something is wrong");
    }
  }

  const handledelete = async id => {
    await axios.delete(`http://localhost:3333/students/${id}`);
    var newtudent = studata.filter((items) => {
      return items.id !== id;
    });
    setStudtata(newtudent);
  } 

  return (
    <>
      <Box textAlign="center" p={2} className={classes.stuListColor}>
        <Typography variant="h4">Student List</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center" className={classes.tableHeadCell}>
                No
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Name
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                FatherName
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Email
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                ClassName
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                City
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Image
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studata.map((item, i) => {
              return (
                <TableRow>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{item.stu_name}</TableCell>
                  <TableCell align="center">{item.fname}</TableCell>
                  <TableCell align="center">{item.email}</TableCell>
                  <TableCell align="center">{item.classname}</TableCell>
                  <TableCell align="center">{item.city}</TableCell>
                  <TableCell align="center">
                    <img
                      src={item.imgurl}
                      alt="profile"
                      style={{ height: "50px", width: "50px" }}
                    />
                  </TableCell>

                  <TableCell align="center">
                    <Tooltip title="View">
                      <IconButton>
                        <Link to={`/viewdata/${item.id}`}>
                          <Visibility color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton>
                        <Link to={`/editdata/${item.id}`}>
                          <Edit />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handledelete(item.id)}>
                        <Delete color="secondary" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default List;
