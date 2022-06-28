import React from 'react'
import {Box, Button, Divider, Grid, Paper, Stack, TextField, Typography, Snackbar  } from '@mui/material'
import { Link } from 'react-router-dom';

//Icons----------------------------------------------
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//Logo ----------------------------------------------
import logo from '../images/logo.svg'
import Particle from '../components/Particle';

// import { styled } from '@mui/material/styles';

const styles = {
	leftBox: {
		backgroundImage: 'linear-gradient(to right top, #16c2ce, #00c9cd, #00d0cb, #00d7c7, #00ddc1)'
	},
	bgColor: {
		backgroundImage: 'linear-gradient(to right top, #000000, #121212, #1d1d1e, #28292a, #323536)',
	},
	textColor: {
		color:"red"
	}
}

const Login = () => {
	const [open, setOpen] = React.useState(false)
	const handleClick = () => {
		setOpen(true)
	}

	const handleClose =(event, reason) => {
		if(reason === 'clickaway') {
			return;
		}
		setOpen(false);
	}

	return (
    	<React.Fragment>
			<Box 
				display="flex"
				justifyContent="center"
				alignItems="center"
				minHeight="100vh"
				direction="column"
				style={styles.bgColor}
				sx={{ flexGrow: 1, }}
			>
				<Particle />
				<Stack 
					item 
					xs={12} 
					md={6} 
					sx={{width:{md:"800px", xs:'90%'}}}
				>
					<Paper>
						<Grid container>
							<Grid 
								style={styles.leftBox} 
								item md={5} xs={12}  
								p={4}   
								textAlign="center"
							>
								<img src={logo} alt="" width="50px" />
								<Typography 
									variant="h5" 
									color="white"
								>
									<strong>GAS</strong> Stations
								</Typography>
								<Typography 
									variant="subtitle2" 
									color="white" 
									pb={2}
								>
									Find nearest petrol station and book an appointment for filling petrol for your vehicle.
								</Typography>
								<Divider />
								<Typography 
									variant="subtitle2" 
									color="white"
									pt={2} 
								>
									Don't have an account? <strong>Sign up here</strong>
								</Typography>
							</Grid>
							<Grid 
								item md={7} 
								xs={12} 
								p={4} 
								alignItems="center" 
								textAlign="center"
							>
								<Typography 
									variant="h5" 
									color="#00cad6"
								>
									Login
								</Typography>
								<Typography 
									mb={2} 
									variant="subtitle2" 
									color="gray"
								>
									Sing in to continue access service
								</Typography>
								<Box sx={{
                                	display: 'flex', 
                                	alignItems: 'flex-end' 
                    			}}
								mb={2}
								>
									<EmailIcon text="primary" sx={{ 
										mr: 1, 
										my: 0.5 }} 
									/>
									<TextField 
										text="primary" 
										fullWidth 
										label="Email" 
										variant="standard" 
										sx={{input:{color:'#00cad6'}}}
									/>
								</Box>
								<Box sx={{ 
									display: 'flex', 
									alignItems: 'flex-end' }}
								>
									<KeyIcon text="primary" sx={{ mr: 1, my: 0.5 }} />
									<TextField 
										text="primary"  
										fullWidth 
										label="Password" 
										variant="standard" 
										type="password"
										sx={{input:{color:'#00cad6'}}}
									/>
								</Box> 
								<Link to="#">
									<Typography 
										mt={2}
										variant="subtitle2" 
										color="#00cad6"
									>	
										Forget password?
									</Typography>
								</Link>
								<Link to="/">
									<Button 
										color="primary"
										sx={{mt:2}}  
										variant="contained" 
										fullWidth 
										onClick={handleClick}
									>
										Sign In <ArrowForwardIosIcon />
									</Button>
                            	</Link>
							</Grid>
						</Grid>
					</Paper>
					<Typography 
						variant="subtitle2" 
						color="gray" 
						textAlign="center"
						pb={2}
						mt={4}
					>
						Copyright © 2022 cerexio. 
					</Typography>
				</Stack>
			</Box>
    	</React.Fragment>
	)
}

export default Login
