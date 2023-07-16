import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/home.jpg';
import movieLogo from '../assets/homeTitle.webp';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Netflix = () => {
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
                        <button className="play flex a-center j-center">
                            <FaPlay /> Play
                        </button>
                        <button className="more-info flex a-center j-center">
                            <AiOutlineInfoCircle /> More Info
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
            filter: brightness(60%);
        }
        .img{
            width: 100%vw;
            height: 100%vh;
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
                gap: 2rem;
                button{
                    border: none;
                    gap: 1rem;
                    border-radius: 0.2rem;
                    font-size: 1.4rem;
                    font-weight: 600;
                    padding : 0 2.4rem 0 2rem;
                    cursor: pointer;
                    transition: 0.3s ease-in-out;
                    &:hover{
                        opacity: 0.8;
                    }
                    svg{
                        font-size: 1.6rem;
                    }
                }
            }

        }
`;
export default Netflix;
