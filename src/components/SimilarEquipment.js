import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

import data from '../data.json';

const SimilarEquipment = ({ equipment }) => {
  const [similarEquipmentExercises, setSimilarEquipmentExercises] = useState(
    []
  );

  useEffect(() => {
    const fetchSimilarTarget = async () => {
      const similarEquipments = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`,
        exerciseOptions
      );

      setSimilarEquipmentExercises(similarEquipments);
    };

    fetchSimilarTarget();
  }, [equipment]);
  return (
    <Box mb={5}>
      <HorizontalScrollbar exercises={similarEquipmentExercises} similar />
    </Box>
  );
};

export default SimilarEquipment;
