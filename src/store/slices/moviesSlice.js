import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        addTrailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.addTrailerVideo = action.payload;
        },
        removeMovies: (state, action) => {
            return [];
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo, removeMovies} = moviesSlice.actions;
export default moviesSlice.reducer;