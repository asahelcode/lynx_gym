import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ShowExercise from './pages/ShowExercise';
import SearchPage from './pages/SearchPage';
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/showexercise/:name' element={<ShowExercise />} />
        <Route path='/exercisedetail/:exerciseId' element={<ExerciseDetail />} />
        <Route path='/search/:term' element={<SearchPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
