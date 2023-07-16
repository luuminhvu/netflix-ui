import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Netflix = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div>
            <Navbar isScrolled={isScrolled} />
        </div>
    );
};
const Container = styled.div``;
export default Netflix;
