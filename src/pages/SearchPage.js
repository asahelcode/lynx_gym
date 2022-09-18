import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Stack,
  Typography,
  Pagination,
  TextField,
  Button,
  fabClasses,
  CircularProgress,
} from '@mui/material';
import { useStateValue } from '../StateProvider';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';
import Loader from '../components/Loader';

const SearchPage = () => {
  const questionPerPage = 6;
  const [{ exercises }, dispatch] = useStateValue();
  const { term } = useParams();
  const [page, setPage] = useState(1);
  const [currentExercises, setCurrentExercises] = useState([]);
  const [input, setInput] = useState('');
  const [searchBoolean, setSearchBoolean] = useState(false);

  useEffect(() => {
    const fetchSearchData = async () => {
      const exercisesData = await fetchData(
        // `https://exercisedb.p.rapidapi.com/exercises`,
        exerciseOptions
      );

      const filterSearch = exercisesData.filter(
        (exercise) =>
          exercise.target.includes(term) ||
          exercise.name.includes(term) ||
          exercise.equipment.includes(term) ||
          exercise.bodyPart.includes(term)
      );

      dispatch({
        type: 'SET_EXERCISES',
        payload: filterSearch,
      });
    };

    fetchSearchData();
  }, [term]);

  const handleSearch = async () => {
    setSearchBoolean(true);
    const fetchSearchData = async () => {
      const exercisesData = await fetchData(
        // `https://exercisedb.p.rapidapi.com/exercises`,
        exerciseOptions
      );

      const filterSearch = exercisesData.filter(
        (exercise) =>
          exercise.target.includes(input) ||
          exercise.name.includes(input) ||
          exercise.equipment.includes(input) ||
          exercise.bodyPart.includes(input)
      );

      setSearchBoolean(false);

      dispatch({
        type: 'SET_EXERCISES',
        payload: filterSearch,
      });
    };

    setInput('');
    fetchSearchData();
  };

  useEffect(() => {
    const lastExerciseIndex = page * questionPerPage;
    const beginningExerciseIndex = lastExerciseIndex - questionPerPage;

    const currentPageExercise = exercises?.slice(
      beginningExerciseIndex,
      lastExerciseIndex
    );

    setCurrentExercises(currentPageExercise);
  }, [exercises, page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

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
        {searchBoolean === false ? (
          <Button variant='contained' onClick={handleSearch}>
            Search
          </Button>
        ) : (
          <CircularProgress />
        )}
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
          defaultPage={1}
        />
      </Stack>
    </>
  );
};

export default SearchPage;
