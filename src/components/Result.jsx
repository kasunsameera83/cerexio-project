import React from 'react'
import { Paper, Box, Typography, Stack, Button, Divider, Dialog, DialogTitle, DialogContent, DialogActions, Chip, TextField } from '@mui/material';
import DialogContentText from '@mui/material/DialogContentText';

import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';


const Result = (props) => {
    const [open, setOpen] = React.useState(false);
    const [stationName, setStationName] = React.useState("")
    const [distance, setDistance] = React.useState("")
    const [availability, setAvailability] =  React.useState("")
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleClose = () => {
        setOpen(false);
    };

    const handleBook = (props) => {
        setOpen(true);
        setStationName(props.stationName)
        setDistance(props.distance)
        setAvailability(props.stock === 1 ? "OPEN" : "CLOSE")
    }

    return (
        <React.Fragment>
            <Box  
                justifyContent="center"
                alignItems="center"  
            >
                <Paper  >
                    <Stack 
                        justifyContent="center"
                        alignItems="center"   
                        direction="row" 
                        spacing={2} 
                        p={2}
                    >
                        {
                            props.stock === 1?
                            <Stack minWidth={50}>
                                <LocalGasStationIcon  style={{ color: '#00cad6' }} />
                                <Typography style={{ color: 'gray' }}> {props.distance}</Typography>
                            </Stack>
                            :
                            <Stack minWidth={50}>
                                <LocalGasStationIcon  style={{ color: '#f50057' }} />
                                <Typography style={{ color: 'gray' }}> {props.distance}</Typography>
                            </Stack>
                        }
                        <Divider orientation="vertical" flexItem />
                        <Typography 
                            style={{ color: 'gray' }} 
                            minWidth={"35%"} 
                            flexGrow={1}
                        >
                            {props.stationName}
                        </Typography>
                        <Button 
                            variant="contained" 
                            style={{float:"right", display:{ xs:"none"}}} 
                            onClick={() => handleBook(props)}
                        >
                            Book
                        </Button>
                    </Stack >
                </Paper>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle color="gray">Book an appointment</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Box sx={{ width: {md:500} }} mt={2} mb={2}>
                            <Typography>{`Station Name: ${stationName}`}</Typography>
                            <Typography>{`Distance: ${distance}`}</Typography>
                            {
                                availability === "OPEN" ?
                                    <Chip label={availability} sx={{color:"#00cad6"}} />
                                :
                                    <Chip label={availability} sx={{color:"#f50057"}} />
                            }
                        </Box>
                        <Divider />
                        <Stack
                            sx={{display:{xs:"none", md:"flex"}}}
                            direction="row"
                            spacing={2} 
                            alignItems="center"
                            mt={2}
                            mb={2}
                        >
                            <Typography>Date and Time</Typography>
                            <TextField
                                id="date"
                                type="date"
                                defaultValue={Date()}
                                sx={{ width: 220, input: { color: "gray" } }}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            <TextField
                                id="time"
                                type="time"
                                defaultValue="07:30"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                step: 300, // 5 min
                                }}
                                sx={{ width: 150, input: { color: "gray" } }}
                            />
                        </Stack>
                        <Stack
                            sx={{display:{md:"none", xs:"block"}}}
                            spacing={2} 
                            direction="column"
                            alignItems="center"
                            mb={2}
                            mt={2}
                        >
                            <Typography>Date and Time</Typography>
                            <TextField
                                id="date"
                                type="date"
                                defaultValue={Date()}
                                sx={{ width: "100%", input: { color: "gray" } }}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            <TextField
                                id="time"
                                type="time"
                                defaultValue="07:30"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                step: 300, // 5 min
                                }}
                                sx={{ width: "100%", input: { color: "gray" } }}
                            />
                        </Stack>
                        <Button variant="contained" sx={{width:"100%", }} onClick={handleClose}>Book</Button>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default Result;