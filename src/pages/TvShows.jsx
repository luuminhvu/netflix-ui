import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from './NotAvailable';
import SelectGenres from '../components/SelectGenres';
// import { onAuthStateChanged } from 'firebase/auth';
// import { firebaseAuth } from '../utils/netflix-config';

const TVShows = () => {
    const genresLoaded = useSelector((state) => state.Netflix.genresLoaded);
    const movies = useSelector((state) => state.Netflix.movies);
    const genres = useSelector((state) => state.Netflix.genres);
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);
    useEffect(() => {
        if (genresLoaded) {
            dispatch(fetchMovies({ genres, type: 'tv' }));
        }
    }, [genresLoaded, dispatch, genres]);

    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled} />
            </div>

            <div className="data">
                <SelectGenres genres={genres} type="tv" />
                {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
            </div>
        </Container>
    );
};
const Container = styled.div`
    .data {
        margin-top: 8rem;
        .not-available {
            text-align: center;
            color: white;
            margin-top: 4rem;
        }
    }
`;

export default memo(TVShows);
