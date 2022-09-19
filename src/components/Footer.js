import React from 'react';
import { Stack, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Stack
      borderTop='1px solid gray'
      justifyContent='center'
      alignItems='center'
      padding='15px'
      backgroundColor='#fff'
      className='footer-section'
    >
      <Typography variant='h6'>Developed with 💖 by Gray</Typography>
      <Stack direction='row' gap='10px'>
        <TwitterIcon />
        <LinkedInIcon />
        <GitHubIcon />
      </Stack>
    </Stack>
  );
};

export default Footer;
