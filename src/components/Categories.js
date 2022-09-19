import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CategoryCard from '../components/CategoryCard';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [{}, dispatch] = useStateValue();

  const categoryImages = [
    'https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?size=626&ext=jpg&uid=R69649432',
    'https://imgs.search.brave.com/6PhQbD0AZ12hKaDdNz0NHBTWB3eB7SvxFhs64_NDT7M/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC4tLVhEWER0/ZTNkUVBzMXJ1TXNU/TFV3SGFFSyZwaWQ9/QXBp',
    'https://img.freepik.com/free-photo/beautiful-young-sporty-woman-training-workout-gym_155003-41224.jpg?size=626&ext=jpg&uid=R69649432',
    'https://img.freepik.com/free-photo/mauscular-woman-posing-with-iron-chains-neck_651396-1611.jpg?size=626&ext=jpg&uid=R69649432',
    'https://img.freepik.com/free-photo/attractive-shirtless-man-is-looking-camera-while-doing-exercises-with-rubber-there-is-dark-background_613910-20885.jpg?size=626&ext=jpg&uid=R69649432',
    'https://img.freepik.com/free-photo/strong-wet-woman-posing-during-jump_7502-7078.jpg?size=626&ext=jpg&uid=R69649432',
    'https://img.freepik.com/free-photo/attractive-male-body-builder-blue-wall_155003-3921.jpg?size=626&ext=jpg&uid=R69649432',
    'https://img.freepik.com/free-photo/young-muscular-caucasian-athlete-training-gym-doing-strength-exercises-practicing-work-his-upper-body-pulling-weights-barbells-fitness-wellness-healthy-lifestyle-concept-working_155003-28637.jpg?size=626&ext=jpg&uid=R69649432',
    'https://img.freepik.com/free-photo/beautiful-young-sporty-couple-workout-gym-together-caucasian-man-training-with-female-trainer_155003-41538.jpg?size=626&ext=jpg&uid=R69649432',
    'https://img.freepik.com/free-photo/young-sport-girl-workout-gym-fitness-woman-doing-exercises_627829-9293.jpg?size=626&ext=jpg&uid=R69649432',
    'https://img.freepik.com/free-photo/young-muscular-woman-practicing-gym_155003-35527.jpg?size=626&ext=jpg&uid=R69649432',
  ];

  const exerciseCategory = [];

  for (let i = 0; i < categories.length; ++i) {
    exerciseCategory.push({ name: categories[i], img: categoryImages[i] });
  }

  useEffect(() => {
    const fetchExerciseCategory = async () => {
      const exerciseCategoryData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );

      dispatch({
        type: 'SET_BODYPARTS',
        payload: ['all', ...exerciseCategoryData],
      });
      setCategories(exerciseCategoryData);
    };

    fetchExerciseCategory();
  }, []);

  return (
    <Box
      height='140vh'
      sx={{ ml: { lg: '12.5em', xs: '0.5em' } }}
      mt={5}
      className='category-section'
    >
      <Typography variant='h3' p={3}>
        Categories
      </Typography>
      {categories !== null ? (
        <Grid
          container
          spacing={{ xs: 2, md: 5 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
          sx={{ marginLeft: { xs: '10%', lg: '0' }, width: { xs: '100%' } }}
          p={4}
        >
          {exerciseCategory.map((exercise, index) => (
            <Link to={`/showexercise/${exercise.name}`}>
              <CategoryCard
                key={index}
                name={exercise.name}
                img={exercise.img}
              />
            </Link>
          ))}
        </Grid>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default Categories;
