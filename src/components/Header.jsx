import React from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header(props) {
    const navigate = useNavigate();

    return (
        <Container className="flex a-center j-between">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <button onClick={() => navigate(props.login ? '/login' : '/signup')}>
                {props.login ? 'Đăng nhập' : 'Đăng ký'}
            </button>
        </Container>
    );
}

const Container = styled.div`
    padding: 0 4rem;
    margin: 0 32px;
    .logo {
        img {
            height: 5rem;
        }
    }
    button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        border-radius: 0.1875rem;
        border-width: 0.0625rem;
        color: #fff;
        font-size: 1.05rem;
        cursor: pointer;
        &:hover {
            background-color: #f40612;
        }
    }
`;
