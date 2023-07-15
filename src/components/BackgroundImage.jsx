import React from 'react';
import background from '../assets/login.jpg';
import styled from 'styled-components';
export default function BackgroundImage() {
    return (
        <Container>
            <img src={background} alt="background" />
        </Container>
    );
}
const Container = styled.div`
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%
    transform: scale(1.25) translateY(-10%);
    object-fit: cover;
`;
