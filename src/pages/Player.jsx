import React from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import video from '../assets/video.mp4';
import { useNavigate } from 'react-router-dom';
const Player = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <div className="player">
                <div className="back">
                    <BsArrowLeft onClick={() => navigate(-1)} />
                </div>
                <video className="video" src={video} controls loop autoPlay></video>
            </div>
        </Container>
    );
};
const Container = styled.div`
    .player {
        width: 100wh;
        height: 100vh;
        .back {
            position: absolute;
            padding: 1rem;
            z-index: 1;
            svg {
                color: white;
                font-size: 2rem;
                cursor: pointer;
            }
        }
        .video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;
export default Player;
