import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import Logo from '../assets/Logo.png';

const Header = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      alignItems='center'
      borderBottom='1px solid gray'
    >
      <Box className='header-logo'>
        <Link to='/'>
          <img src={Logo} alt='' width='80px' />
        </Link>
      </Box>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        gap='50px'
        className='navMenu'
        sx={{ display: { lg: 'flex', xs: 'none' } }}
      >
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Typography variant='h6' color='#000'>
            Home
          </Typography>
        </Link>
        <Link to='/exercise' style={{ textDecoration: 'none' }}>
          <Typography variant='h6' color='#000'>
            Diet
          </Typography>
        </Link>
        <Link to='/exercise' style={{ textDecoration: 'none' }}>
          <Typography variant='h6' color='#000'>
            Contact
          </Typography>
        </Link>
      </Stack>
      <Button variant='contained' sx={{ display: { lg: 'flex', xs: 'none' } }}>
        Explore
      </Button>
    </Stack>
  );
};

export default Header;
