import React from 'react';
import { Grid, Typography, Stack } from '@mui/material';

const CategoryCard = ({ name, img }) => {
  return (
    <Grid item xs={2} sm={4} md={4} p={2}>
      <Stack
        position='relative'
        width='250px'
        height='150px'
        justifyContent='flex-start'
        alignItems='flex-end'
      >
        <img
          src={img}
          alt=''
          width='100%'
          height='100%'
          className='glass-card'
        />
        <Typography
          position='absolute'
          color='#fff'
          backgroundColor='lightslategrey'
          p={0.8}
          m={0.4}
          sx={{ borderRadius: { lg: '10px', xs: '10px' } }}
        >
          {name}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default CategoryCard;
