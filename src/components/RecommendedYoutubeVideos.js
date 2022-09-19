import { Stack, Typography, Box } from '@mui/material';
import React from 'react';
import { useStateValue } from '../StateProvider';
import VideoCard from './VideoCard';

const RecommendedYoutubeVideos = ({ videos }) => {
  return (
    <>
      <Box mt={3}>
        <Typography variant='h4' mb={2} ml={3}>
          Recommended Youtube Videos
        </Typography>
        <Stack
          direction='row'
          width='100%'
          height='50vh'
          justifyContent='center'
        >
          {videos?.slice(0, 2)?.map((video) => (
            <VideoCard video={video} />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default RecommendedYoutubeVideos;
