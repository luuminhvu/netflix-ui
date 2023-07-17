import React from 'react';
import styled from 'styled-components';
import CardSlider from './CardSlider';
import { useNavigate } from 'react-router-dom';
import { IoPlayCircleSharp } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import { BiChevronDown } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import video from '../assets/video.mp4';

const Card = ({ movieData, isLiked = false }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const navigate = useNavigate();
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
                                    <BsCheck title="Xoá khỏi danh sách" />
                                ) : (
                                    <AiOutlinePlus title="Thêm vào danh sách" />
                                )}
                            </div>
                            <div className="info">
                                <BiChevronDown title="Thông tin khác" />
                            </div>
                        </div>
                        <div className="genres flex">
                            <ul className="flex">
                                {movieData.genres.map((genre) => (
                                    <li>{genre}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
};
const Container = styled.div``;
export default Card;
