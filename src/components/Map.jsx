import React from 'react'
import { Box, Typography, Grid, Stack, Paper, } from '@mui/material';

import MapImg from '../images/map.jpg'
import LocationIconGrteen from '../images/locationIconGreen.svg'
import LocationIconRed from '../images/locationIconRed.svg'

import Result from './Result';

//Import Data from Json.
import Reduslt from '../data/result.json'

const styles = {
    paperContainer: {
        backgroundImage: `url(${MapImg})`,
    },
    location1:{
        left:"361px",
        top:"101px",
        width:"30px",
        position: "sticky",
    },
    location2:{
        left:"261px",
        top:"250px",
        width:"30px",
        position: "sticky",
    }, 
    location3:{
        left:"161px",
        top:"75px",
        width:"30px",
        position: "sticky",
    }

};


const Map = () => {

  return (
    <React.Fragment>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            direction="column"
            overflow="hidden"
            
            mt={2}
        >
            <Grid 
                container 
                justifyContent="center"
                spacing={2}
            >
                <Grid  
                    item 
                    md={7} 
                    xl={8}
                    xs={12} 
                    mt={1} 
                    p={2} 
                >
                    <Paper >
                        <Box p={2}>
                            <Paper style={styles.paperContainer}>
                                <Box height="340px">
                                    <img src={LocationIconGrteen} style={styles.location1}  alt="" />
                                    <img src={LocationIconGrteen}  alt="" style={styles.location2} />
                                    <img src={LocationIconRed}  alt="" style={styles.location3} />
                                </Box>
                            </Paper>
                            
                            {/* <img src={MapImg} alt=""  width="100%" /> */}
                        </Box>
                    </Paper>
                   
                </Grid>
                <Grid  
                    item 
                    md={5} 
                    xl={4}
                    xs={12} 
                    mt={1} 
                    p={2} 
                    sx={{borderRadius:"1.5rem"}}
                >
                    <Paper sx={{overflow:"hidden"}}  elevation={3} >
                        <Box bgcolor="primary" p={2}>
                            <Stack>
                                 <Typography variant="h5" color={"gray"}  mb={2}>Result</Typography>
                            </Stack>
                           
                            {
                                Reduslt.map(recors => {
                                    return(
                                        <Box key= {recors.id} mb={2}>
                                            <Result id= {recors.id} stock={ recors.availability === "open" ? 1 : 0} stationName={recors.stationName} distance={recors.distance} />
                                        </Box>  
                                    )
                                })
                            }
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    </React.Fragment>
  )
}

export default Map