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
import { Menu, MenuItem } from '@mui/material';

import { Link } from 'react-router-dom';


const NavBar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        console.log(anchorEl)
    };

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
                        <NotificationsIcon />
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
        </AppBar>
    )
}

export default NavBar