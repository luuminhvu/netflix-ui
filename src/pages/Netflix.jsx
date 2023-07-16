import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/home.jpg';
import movieLogo from '../assets/homeTitle.webp';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Netflix = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = React.useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <Container>
            <Navbar isScrolled={isScrolled} />
            <div className="hero">
                <img src={backgroundImage} alt="Background" className="background-image" />
                <div className="container">
                    <div className="logo">
                        <img src={movieLogo} alt="Movie Logo" />
                    </div>
                    <div className="flex buttons">
                        <button className="play flex a-center j-center" onClick={() => navigate('/player')}>
                            <FaPlay /> Phát
                        </button>
                        <button className="more-info flex a-center j-center">
                            <AiOutlineInfoCircle /> Thông tin thêm
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};
const Container = styled.div`
    .hero {
        position: relative;
        .background-image {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(60%);
        }
        
        .container{
            position: absolute;
            bottom: 10rem;
            .logo{
                img{
                    width: 100%;
                    height: 100%;
                    margin-left: 5rem;
                }
            }
            .buttons{
                margin: 5rem;
                gap: 1.5rem;
                button{
                    border: none;
                    gap: 1rem;
                    border-radius: 0.2rem;
                    font-size: 1.4rem;
                    font-weight: 600;
                    padding : 0.5rem 2.2rem 0.5rem 1.8rem;
                    cursor: pointer;
                    background-color: white;
                    color: black;
                    transition: 0.3s ease-in-out;
                    &:hover{
                        opacity: 0.8;
                    }
                    &:nth-of-type(2) {
                        background-color: rgba(109, 109, 110, 0.7);
                        color: white;
                        svg {
                          font-size: 1.8rem;
                        }
                    }
                }
            }

        }
`;
export default Netflix;
