import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import { useStateValue } from '../StateProvider';

const Home = () => {
  return (
    <Box>
      <Hero />
      <Categories />
    </Box>
  );
};

export default Home;
