import React, { memo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoPlayCircleSharp } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import { BiChevronDown } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import video from '../assets/video.mp4';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/netflix-config';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeMovieFromLiked } from '../store';

const Card = ({ movieData, isLiked = false }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = React.useState(undefined);
    const dispatch = useDispatch();
    onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
            setEmail(user.email);
        } else {
            navigate('/login');
        }
    });
    const AddToList = async () => {
        try {
            await axios.post('https://netflixapi-blym.onrender.com/api/user/add', {
                email,
                data: movieData,
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Container onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={`https://image.tmdb.org/t/p/w500/${movieData.image}`} alt="Movie Poster" />
            {isHovered && (
                <div className="hover">
                    <div className="image-video-container">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movieData.image}`}
                            alt="Movie Poster"
                            onClick={() => {
                                navigate('/player');
                            }}
                        />
                        <video
                            autoPlay
                            loop
                            onClick={() => {
                                navigate('/player');
                            }}
                            src={video}
                        />
                    </div>
                    <div className="info-container flex column">
                        <h3 className="name" onClick={() => navigate('/player')}>
                            {movieData.name}
                        </h3>
                        <div className="icons flex j-between">
                            <div className="controls flex">
                                <IoPlayCircleSharp title="Phát" onClick={() => navigate('/player')} />
                                <RiThumbUpFill title="Thích" />
                                <RiThumbDownFill title="Không thích" />
                                {isLiked ? (
                                    <BsCheck
                                        title="Xoá khỏi danh sách"
                                        onClick={() => dispatch(removeMovieFromLiked({ movieId: movieData.id, email }))}
                                    />
                                ) : (
                                    <AiOutlinePlus title="Thêm vào danh sách" onClick={AddToList} />
                                )}
                            </div>
                            <div className="info">
                                <BiChevronDown title="Thông tin khác" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
};
const Container = styled.div`
    max-width: 220px;
    width: 220px;
    height: 100%;
    cursor: pointer;
    position: relative;
    img {
        border-radius: 0.2rem;
        width: 220px;
        height: 125px;
        z-index: 10;
    }
    .hover {
        z-index: 99;
        height: 262px;
        width: 20rem;
        position: absolute;
        top: -18vh;
        left: 0;
        border-radius: 0.3rem;
        box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
        background-color: #181818;
        transition: 0.3s ease-in-out;
        .image-video-container {
            position: relative;
            height: 150px;
            img {
                width: 100%;
                height: 140px;
                object-fit: cover;
                border-radius: 0.3rem;
                top: 0;
                z-index: 4;
                position: absolute;
            }
            video {
                width: 100%;
                height: 140px;
                object-fit: cover;
                border-radius: 0.3rem;
                top: 0;
                z-index: 5;
                position: absolute;
            }
        }
        .info-container {
            padding: 1rem;
            gap: 0.5rem;
        }
        .icons {
            .controls {
                display: flex;
                gap: 1rem;
            }
            svg {
                font-size: 2rem;
                cursor: pointer;
                transition: 0.3s ease-in-out;
                &:hover {
                    color: #b8b8b8;
                }
            }
        }
    }
`;
export default memo(Card);
