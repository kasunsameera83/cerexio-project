import React from 'react'
import NavBar from '../components/NavBar'
import Map from '../components/Map';
import FilterBar from '../components/FilterBar';
import { Grid } from '@mui/material';

const Home = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Grid  
                 container 
                 justifyContent="center"
                 alignItems="center" 
            >
                <Grid item 
                        md={10} 
                        xs={12} >
                    <FilterBar />
                    <Map />
                </Grid>
                
            </Grid>
			
        </React.Fragment>
    )
}

export default Home