import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, TMBD_BASE_URL } from '../utils/constants';
const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};
export const getGenres = createAsyncThunk('Netflix/genres', async () => {
    const {
        data: { genres },
    } = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    return genres;
});
const createArrayFromRawData = (array, moviesArray, genres) => {
    array.forEach((movie) => {
        const moviesGenres = [];
        movie.genre_ids.forEach((genre) => {
            const name = genres.find((id) => id === genre);
            if (name) {
                moviesGenres.push(name.name);
            }
        });
        if (movie.backdrop_path) {
            moviesArray.push({
                id: movie.id,
                name: movie?.original_name ? movie.original_name : movie?.original_title,
                image: movie.backdrop_path,
                genres: moviesGenres.slice(0, 3),
            });
        }
    });
};
const getRawData = async (api, genres, paging) => {
    const moviesArray = [];
    for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
        const {
            data: { results },
        } = await axios.get(`${api}${paging ? `&page=${i}` : ''}`);
        createArrayFromRawData(results, moviesArray, genres);
    }
    return moviesArray;
};
export const fetchMovies = createAsyncThunk('Netflix/trending', async ({ type }, thunkApi) => {
    const {
        Netflix: { genres },
    } = thunkApi.getState();
    return getRawData(`${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`, genres, true);
});
export const fetchMoviesByGenre = createAsyncThunk('Netflix/moviesByGenres', async ({ genre, type }, thunkApi) => {
    const {
        Netflix: { genres },
    } = thunkApi.getState();
    return getRawData(`${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`, genres);
});
export const getUsersLikedMovies = createAsyncThunk('Netflix/getLiked', async (email) => {
    const {
        data: { movies },
    } = await axios.get(`https://netflixapi-blym.onrender.com/api/user/liked/${email}`);
    return movies;
});

export const removeMovieFromLiked = createAsyncThunk('netflix/deleteLiked', async ({ movieId, email }) => {
    const {
        data: { movies },
    } = await axios.put('https://netflixapi-blym.onrender.com/api/user/remove', {
        email,
        movieId,
    });
    return movies;
});
const NetflixSlice = createSlice({
    name: 'Netflix',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genresLoaded = true;
            state.genres = action.payload;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        });
        builder.addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
            state.movies = action.payload;
        });
        builder.addCase(getUsersLikedMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        });
        builder.addCase(removeMovieFromLiked.fulfilled, (state, action) => {
            state.movies = action.payload;
        });
    },
});
export const store = configureStore({
    reducer: {
        Netflix: NetflixSlice.reducer,
    },
});
