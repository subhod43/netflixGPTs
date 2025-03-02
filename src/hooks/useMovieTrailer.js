import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from '../store/slices/moviesSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    
    const getMainMovieVideo = async () => {
        const dataStream = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
        );
        const data = await dataStream.json();
        const filteredData = data.results.filter((video) => video.type === "Trailer");
        const trailer = filteredData.length ? filteredData[0] : data.results[0];
        dispatch(addTrailerVideo(trailer));
    };


    useEffect(() => {
        getMainMovieVideo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);  
};

export default useMovieTrailer;