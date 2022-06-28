import React from 'react'
import { Box, Grid, Stack, InputBase, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Slider, Menu, MenuItem } from '@mui/material';
import DialogContentText from '@mui/material/DialogContentText';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const styles = {
	leftBox: {
		backgroundImage: 'linear-gradient(to right top, #16c2ce, #00c9cd, #00d0cb, #00d7c7, #00ddc1)'
	},
	bgColor: {
		backgroundImage: 'linear-gradient(to right top, #000000, #121212, #1d1d1e, #28292a, #323536)',
	},
}



const FilterBar = () => {
    const [distance, setdistance] = React.useState("35km")
    const [open, setOpen] = React.useState(false);

    const valuetext= (value) => {
        setdistance(`${value}Km(s)`)
        return `${value}Km`;
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
        console.log(anchorEl)
    };
    return (
        <React.Fragment>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                direction="column"
                sx={{ flexGrow: 1, }}
            >
                <Grid 
                    container 
                    justifyContent="center"
                    alignItems="center" 
                >
                    <Grid  
                        item 
                        md={12} 
                        xs={11} 
                        mt={1} 
                        p={2} 
                        bgcolor={styles.bgColor}
                        sx={{borderRadius:"1.5rem"}}
                    >
                        <Stack 
                            spacing={2} 
                            direction="row" 
                            sx={{ mb: 1 }} 
                            alignItems="center"
                            
                        >
                            <FilterAltIcon style={{ color: 'white' }}/>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Location"
                                color='black'
                            />
                            <IconButton type="submit" sx={{ p: '5px' }} aria-label="search">
                                <SearchIcon style={{ color: 'white' }} />
                            </IconButton >
                             {/* <IconButton type="submit" sx={{ p: '5px', display:{xs:"none", md:"flex"} }} aria-label="search">
                                <AccessTimeFilledIcon style={{ color: 'white' }} />
                            </IconButton > */}
                            <Button sx={{ display:{xs:"none", md:"flex"} }} variant="contained" endIcon={<ShareLocationIcon />} onClick={handleClickOpen}>
                                {distance}
                            </Button>
                            <IconButton 
                                type="submit" 
                                sx={{ p: '5px', display:{xs:"block", md:"none"} }} 
                                aria-label="search"
                                onClick={handleClick} 
                            >
                                <MoreVertIcon style={{ color: 'white' }} />
                            </IconButton >
                            <Menu
                                sx={{color:"#000"}}
                                anchorEl={anchorEl}
                                open={openMenu}
                                onClose={handleCloseMenu}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem  
                                    sx={{color:"gray"}} 
                                    onClick={handleCloseMenu}
                                >
                                  <ShareLocationIcon /> Set Distance
                                </MenuItem>
                            </Menu>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

            <Dialog
                 open={open}
                 onClose={handleClose}
            >
                <DialogTitle color="gray">Set distance</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    <Box sx={{ width: 300 }} mt={4}>
                        <Slider
                            aria-label="Small steps"
                            defaultValue={35}
                            getAriaValueText={valuetext}
                            step={5}
                            marks
                            min={5}
                            max={50}
                            
                        />
                        <Typography>{distance}</Typography>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default FilterBar