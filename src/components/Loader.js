import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { Stack } from '@mui/material';

const Loader = () => {
  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      direction='row'
      width='100%'
      height='100vh'
    >
      <CirclesWithBar
        height='100'
        width='80'
        color='#4fa94d'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        outerCircleColor=''
        innerCircleColor=''
        barColor=''
        ariaLabel='circles-with-bar-loading'
      />
    </Stack>
  );
};

export default Loader;
