import { Box, Typography, Stack } from '@mui/material';
import React from 'react';

const VideoCard = ({ video }) => {
  const videoDetail = video['video'];
  return (
    <Box height='200px' position='relative' backgroundColor='blue'>
      <a
        href={`https://youtube.com/watch?v=${videoDetail.videoId}`}
        target='_blank'
        rel='noreferrer'
      >
        <Box position='relative'>
          <img
            src={videoDetail.thumbnails[0].url || ' '}
            alt=''
            height='200px'
            width='100%'
            position='relative'
          />
          <Typography
            position='absolute'
            bottom='5px'
            right='10px'
            backgroundColor='rgba(0, 0, 0, 0.6)'
            color='white'
          >
            {videoDetail.lengthText || ' '}
          </Typography>
        </Box>
      </a>
      <Box textAlign='center'>
        <Typography variant='h6'>{videoDetail.title || ' '}</Typography>
        <Typography fontSize='14px'>
          {videoDetail.channelName || ' '}
        </Typography>
        <Stack direction='row' gap='20px' justifyContent='center'>
          <Typography fontSize='13px'>
            {videoDetail.viewCountText || ' '}
          </Typography>
          <Typography fontSize='13px'>
            {videoDetail.publishedTimeText || ' '}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default VideoCard;
