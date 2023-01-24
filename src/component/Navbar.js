import React from 'react'
import { Typography, Box} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { green } from '@mui/material/colors';


const useStyles = makeStyles({

    headingColor: {
        backgroundColor: green[400],
        color: 'white'

    }
})
function Navbar() {
    const classes = useStyles();
  return (
 <>
 <Box textAlign="center" className={classes.headingColor} p={1} mb={1}>
                <Typography variant="h2">Student Data Collection</Typography>
            </Box>
 </>

  )
}

export default Navbar