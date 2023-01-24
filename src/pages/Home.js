import React from 'react'
import { Grid} from '@mui/material';
import List from '../component/List';
import Formdata from '../component/Formdata';
import Navbar from '../component/Navbar';


function Home() {


    return (
      <>
        <Navbar />

        <Grid container justifyContent={"center"} spacing={4}>
          <Grid item md={12} xs={12}>
            <Formdata />
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <List />
        </Grid>
      </>
    );
}

export default Home