import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ExerciseCard = ({
  exercise: { gifUrl, name, equipment, id },
  similar,
}) => {
  return (
    <Link to={`/exercisedetail/${id}`}>
      <Box
        sx={{ width: { lg: '300px', xs: '270px' } }}
        height='300px'
        backgroundColor='#fff'
        p={3}
        position='relative'
        borderRadius='15px'
        boxShadow='2px 3px 1px rgba(0, 0, 0, 0.18)'
        mb={2}
        className={similar ? '' : 'exercise-card'}
      >
        <Box>
          <img src={gifUrl} alt='' width='100%' loading='lazy' />
        </Box>
        <Stack direction='row' p={2} gap='5px' position='absolute' bottom='0'>
          <Typography
            backgroundColor={similar ? 'gray' : 'blue'}
            borderRadius='15px'
            sx={{
              fontSize: { lg: '0.75em', xs: '1.1em' },
              p: { lg: '10px', xs: '12px' },
            }}
            color='#fff'
            fontWeight='bold'
            boxShadow='1px 2px 0 rgba(0, 0, 0, 0.5)'
            textTransform='capitalize'
            fontFamily='Fira Sans'
          >
            {name}
          </Typography>
          <Typography
            display={similar ? 'none' : ''}
            backgroundColor='orange'
            color='#fff'
            borderRadius='15px'
            sx={{
              fontSize: { lg: '0.7em', xs: '1.1em' },
              p: { lg: '10px', xs: '10px' },
              ml: { lg: '0', xs: '3px' },
            }}
            fontWeight='bold'
            boxShadow='1px 2px 0 rgba(0, 0, 0, 0.3)'
            textTransform='capitalize'
            fontFamily='Fira Sans'
          >
            {equipment}
          </Typography>
        </Stack>
      </Box>
    </Link>
  );
};

export default ExerciseCard;
