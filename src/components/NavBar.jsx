import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import NotificationsIcon from '@mui/icons-material/Notifications';

import logo from '../images/logo.svg'
import userProfileImg from '../images/userProfile.jpg'
import { Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Stack, Paper } from '@mui/material';
import DialogContentText from '@mui/material/DialogContentText';

import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openList, setOpenList] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        console.log(anchorEl)
    };

    const handleCloseList = () => {
        setOpenList(false);
    };

    const handleList = (props) => {
        setOpenList(true);
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img 
                        src={logo} 
                        alt="" 
                        width="30px" 
                        sx={{ display: { xs: 'none', md: 'block' }, mr: 1 }} 
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        ml={2}
                        href="/"
                        sx={{
                            mr: 2,
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        GAS Stations
                    </Typography>
                    <Box sx={{ color: 'action.active' }}>
                        <IconButton sx={{ p: 0 }} onClick={handleList}>
                            <NotificationsIcon />
                        </IconButton>
                    </Box>
                    <Box ml={2} sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0 }} onClick={handleClick}>
                                <Avatar alt="Remy Sharp" src={userProfileImg} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{color:"#000"}}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem  
                                sx={{color:"gray"}} 
                                onClick={handleClose}
                            >
                                My account
                            </MenuItem>
                            <MenuItem  
                                sx={{color:"gray"}} 
                                onClick={handleClose}
                            >
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
            <Dialog
                open={openList}
                onClose={handleCloseList}
            >
                <DialogTitle color="gray">Appointment List</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Paper>
                            <Stack p={2} direction="row">
                                <LocalGasStationIcon  style={{ color: '#00cad6' }}/>
                                <Typography  ml={2} style={{ color: 'gray' }}>Maharagama</Typography>
                                <Typography  ml={2} style={{ color: 'gray' }}>06/29/2022</Typography>
                                <Typography  ml={2} mr={2} style={{ color: 'gray' }}>10:30 AM</Typography>
                                <IconButton sx={{ p: 0 }} >
                                    <HighlightOffIcon  style={{ color: '#f50057' }} />
                                </IconButton>
                            </Stack>
                        </Paper>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </AppBar>
    )
}

export default NavBar