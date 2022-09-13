import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import Logo from '../assets/Logo.png';

const Header = () => {
  return (
    <Stack direction='row' justifyContent='space-around' alignItems='center'>
      <Box>
        <img src={Logo} alt='' width='200px' objectFit='cover' />
      </Box>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        gap='50px'
      >
        <Link to='/' style={{textDecoration:'none'}}>
          <Typography variant='h6' color='#fff'>
            Home
          </Typography>
        </Link>
        <Link to='/exercise' style={{textDecoration:'none'}}>
          <Typography variant='h6' color='#fff'>
            Explore
          </Typography>
        </Link>
      </Stack>
      <Button variant='contained'>Search</Button>
    </Stack>
  );
};

export default Header;
