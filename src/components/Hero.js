import { useEffect, useRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Typed from 'typed.js';

import InjuredMan from '../assets/close-up-injured-man-with-dark-bruise-eyes-brain-concussion-wears-bandage (1).jpg'

const Hero = () => {
  const typedJSRef = useRef(null);

  // Setting up typedJS
  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: ['Exercise is good for the body', 'who are isrealites'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 200,
      startDelay: 200,
      showCursor: false,
      loop: true,
    });
    return () => typedJS.destroy();
  }, []);

  return (
    <Stack
      direction='row'
      justifyContent='flex-start'
      alignItems='center'
      ml={28}  
      mt={12}  
      color='white'
      >
      <Box>
        <Typography variant='h3' ref={typedJSRef} width='500px'></Typography>
      </Box>
      <Box>
        <img src={InjuredMan} alt="" />
      </Box>
    </Stack>
  );
};

export default Hero;
