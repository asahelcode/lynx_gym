import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

import data from '../data.json';

const SimilarTarget = ({ target }) => {
  const [similarTargetExercises, setSimilarTargetExercises] = useState([]);

  useEffect(() => {
    const fetchSimilarTarget = async () => {
      const similarTargets = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
        exerciseOptions
      );

      setSimilarTargetExercises(similarTargets);
    };

    fetchSimilarTarget();
  }, [target]);
  return (
    <Box width='100%' mb={5}>
      <HorizontalScrollbar exercises={similarTargetExercises} similar />
    </Box>
  );
};

export default SimilarTarget;
