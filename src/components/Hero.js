import { useEffect, useRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Typed from 'typed.js';

const Hero = () => {
  const typedJSRef = useRef(null);

  // Setting up typedJS
  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: [
        'harder.',
        'longer.',
        'persistently.',
        'consistently.',
        'vigorously.',
      ],
      typeSpeed: 150,
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
      // sx={{ml: {lg:'10em', xs: '3em'}, mt: {lg:'5em', xs: '2.7em'}}}
      className='hero-section'
    >
      <Typography sx={{fontSize: {lg: '2.3em', xs: '1.6em'}, ml: {lg:'5.5em', xs: '0.5em'}, color: {xs: '#fff', lg:'#000'}}} fontFamily='Fira Sans' >
        With two minutes of exercise
        <br />
        per week you could improve
        <br />
        your fitness.
        <Stack direction='row' mt={3}>
          <Typography variant='h5'>Train</Typography>
          <Typography
            variant='h5'
            ref={typedJSRef}
            width='500px'
            mt={0}
            ml={2}
            textTransform='capitalize'
          ></Typography>
        </Stack>
      </Typography>
    </Stack>
  );
};

export default Hero;
