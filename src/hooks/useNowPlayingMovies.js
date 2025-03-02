import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../store/slices/moviesSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const dataStream = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const data = await dataStream.json();
    dispatch(addNowPlayingMovies(data.results));
  }

  useEffect(() => {
    getNowPlayingMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useNowPlayingMovies;
