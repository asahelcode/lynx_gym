import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RecommendedYoutubeVideos from '../components/RecommendedYoutubeVideos';
import { useStateValue } from '../StateProvider';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import SimilarTarget from '../components/SimilarTarget';
import SimilarEquipment from '../components/SimilarEquipment';

const ExerciseDetail = () => {
  const { exerciseId } = useParams();
  const [exercise, setExercise] = useState([]);
  const [{ youtubeVideos }, dispatch] = useStateValue();

  useEffect(() => {
    const exerciseApiUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeApiUrl = 'https://youtube-search-and-download.p.rapidapi.com';

    const fetchExerciseData = async () => {
      const exerciseDetail = await fetchData(
        `${exerciseApiUrl}/exercises/exercise/${exerciseId}`,
        exerciseOptions
      );

      const videos = await fetchData(
        `${youtubeApiUrl}/search?query=${exerciseDetail.name} exercise`,
        youtubeOptions
      );

      dispatch({
        type: 'SET_YOUTUBE_VIDEOS',
        payload: videos.contents,
      });
      setExercise(exerciseDetail);
    };

    fetchExerciseData();
  }, [dispatch, exerciseId]);

  return (
    <Box height='100%'>
      <Stack
        sx={{ flexDirection: { lg: 'row', xs: 'column' } }}
        alignItems='center'
        justifyContent='space-around'
      >
        <Box sx={{ height: { lg: '420px', xs: '250px' } }}>
          <img src={exercise.gifUrl} alt={exercise.name} height='100%' />
        </Box>
        <Stack>
          <Typography
            sx={{
              fontSize: { lg: '3.5em', xs: '1.7em' },
              textAlign: { xs: 'center', lg: 'left' },
            }}
            textTransform='capitalize'
            mb={3}
          >
            {exercise.name}
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: '1.5em', xs: '1.5em' },
              ml: { lg: '0', xs: '1.2em' },
            }}
            textTransform='capitalize'
            mb={3}
          >
            To improve <span>{exercise.target}</span> by engaging in <br />{' '}
            <span>{exercise.name}</span> exercise, ensure to use{' '}
            <span>{exercise.equipment}</span> in <br /> order to gain max
            result.
          </Typography>
          <Stack
            sx={{
              flexDirection: { lg: 'row', xs: 'column' },
              gap: { lg: '10px', xs: '15px' },
              marginLeft: { lg: '0', xs: '25px' },
            }}
            justifyContent='center'
            alignItems='flex-start'
            mt={2}
          >
            <Typography
              backgroundColor='blue'
              borderRadius='15px'
              boxShadow='1px 2px 1px rgba(0, 0, 0, 0.18)'
              color='white'
              fontWeight='bold'
              textTransform='capitalize'
              sx={{ padding: { lg: '10px', xs: '5px' } }}
            >
              {exercise.name}
            </Typography>
            <Typography
              backgroundColor='yellow'
              p={1}
              borderRadius='15px'
              boxShadow='1px 2px 1px rgba(0, 0, 0, 0.18)'
              fontWeight='bold'
              textTransform='capitalize'
            >
              {exercise.equipment}
            </Typography>
            <Typography
              backgroundColor='green'
              p={1}
              borderRadius='15px'
              boxShadow='1px 2px 1px rgba(0, 0, 0, 0.18)'
              color='white'
              fontWeight='bold'
              textTransform='capitalize'
            >
              {exercise.target}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Box>
        <RecommendedYoutubeVideos videos={youtubeVideos} />
      </Box>
      <Box className='horizontal-scroll'>
        <Typography variant='h4' ml={2}>
          Similar Target
        </Typography>
        <SimilarTarget target={exercise.target} />
      </Box>
      <Box>
        <Typography variant='h4' ml={2}>
          Similar Equipment
        </Typography>
        <SimilarEquipment equipment={exercise.equipment} />
      </Box>
    </Box>
  );
};

export default ExerciseDetail;
