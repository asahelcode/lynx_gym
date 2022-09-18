import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Stack,
  Typography,
  Pagination,
  TextField,
  Button,
} from '@mui/material';
import { useStateValue } from '../StateProvider';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';

import data from '../data.json';

const ShowExercise = () => {
  const questionPerPage = 6;
  const [{ exercises }, dispatch] = useStateValue();
  const { name } = useParams();
  const [page, setPage] = useState(1);
  const [currentExercises, setCurrentExercises] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const lastExerciseIndex = page * questionPerPage;
    const beginningExerciseIndex = lastExerciseIndex - questionPerPage;

    const currentPageExercise = exercises.slice(
      beginningExerciseIndex,
      lastExerciseIndex
    );

    setCurrentExercises(currentPageExercise);
  }, [exercises, page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch({
      type: 'SET_BODYPART',
      bodypart: name,
    });

    const fetchBodyPartExercises = async () => {
      // const exercisesData = await fetchData(
      //   // `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${name}`,
      //   exerciseOptions
      // );

      dispatch({
        type: 'SET_EXERCISES',
        payload: data,
      });
    };

    fetchBodyPartExercises();
  }, [name]);

  return (
    <>
      <Stack
        direction='row'
        gap='10px'
        justifyContent='center'
        alignItems='center'
        mt={5}
      >
        <TextField
          size='small'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button
          variant='contained'
          onClick={() => navigate(`/search/${input}`)}
        >
          Search
        </Button>
      </Stack>
      <Box
        width='100%'
        justifyContent='center'
        alignItems='center'
        className='show-exercise'
        p={6}
      >
        {exercises.length === 0 ? (
          <Stack sx={{ marginLeft: { lg: '150px' } }} width='100%'>
            <Loader />
          </Stack>
        ) : (
          currentExercises?.map((exercise, index) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))
        )}
      </Box>
      <Stack
        width='100%'
        justifyContent='center'
        alignItems='center'
        marginBottom='25px'
      >
        <Pagination
          count={Math.ceil(exercises.length / questionPerPage)}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default ShowExercise;
