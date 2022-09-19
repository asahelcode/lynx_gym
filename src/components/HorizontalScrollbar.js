import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useContext } from 'react';
import { Typography, Box } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollPrev()}
      sx={{ display: { lg: 'flex', xs: 'none' } }}
      ml={1}
      mt={15}
    >
      <ArrowBackIosNewIcon />
    </Typography>
  );
};

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollNext()}
      sx={{ display: { lg: 'flex', xs: 'none' } }}
      mr={1}
      mt={15}
    >
      <ArrowForwardIosIcon />
    </Typography>
  );
}

const HorizontalScrollbar = ({ exercises }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {exercises.slice(0, 10).map((exercise) => (
        <Box
          key={exercise.id}
          itemId={exercise.id}
          title={exercise.id}
          m='0 40px'
        >
          <ExerciseCard exercise={exercise} similar />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
