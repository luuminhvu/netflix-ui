import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersLikedMovies } from '../store';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { firebaseAuth } from '../utils/netflix-config';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const UserLiked = () => {
    const movies = useSelector((state) => state.Netflix.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [email, setEmail] = useState(undefined);

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setEmail(currentUser.email);
        else navigate('/login');
    });

    useEffect(() => {
        if (email) {
            dispatch(getUsersLikedMovies(email));
        }
    }, [email, dispatch]);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <Container>
            <Navbar isScrolled={isScrolled} />
            <div className="content flex column">
                <h1 className="title">Phim đã thích</h1>
                <div className="grid flex">
                    {movies && movies.length > 0 ? (
                        movies.map((movie, index) => <Card movieData={movie} isLiked={true} index={index} />)
                    ) : (
                        <p>Không có phim đã thích.</p>
                    )}
                </div>
            </div>
        </Container>
    );
};
const Container = styled.div`
    .content {
        margin: 2.3rem;
        margin-top: 8rem;
        gap: 3rem;

        .title {
            margin-left: 0.3rem;
            color: black;
        }
        .grid {
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
`;

export default UserLiked;
