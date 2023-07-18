import { useRef, useState, memo } from 'react';
import Card from './Card';
import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const CardSlider = ({ data, title }) => {
    const [sliderPosition, setSliderPosition] = useState(0);
    const [showControls, setShowControls] = useState(false);
    const listRef = useRef(null);
    const handleDirection = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 70;
        if (direction === 'left' && sliderPosition > 0) {
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
            setSliderPosition(sliderPosition - 1);
        }
        if (direction === 'right' && sliderPosition < 4) {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
            setSliderPosition(sliderPosition + 1);
        }
    };
    return (
        <Container
            className="flex column"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <h2>{title}</h2>
            <div className="wrapper">
                <div
                    className={`
                    slider-action flex j-center a-center left ${!showControls ? 'none' : ''}
                `}
                >
                    <AiOutlineLeft onClick={() => handleDirection('left')} />
                </div>
                <div className="flex slider" ref={listRef}>
                    {data.map((movies, index) => {
                        return <Card key={movies.id} movieData={movies} title={title} />;
                    })}
                </div>
                <div
                    className={`
                    slider-action flex j-center a-center right ${!showControls ? 'none' : ''}
                `}
                >
                    <AiOutlineRight onClick={() => handleDirection('right')} />
                </div>
            </div>
        </Container>
    );
};
const Container = styled.div`
    gap: 1rem;
    position: relative;
    padding: 2rem 0;
    h2 {
        margin-left: 50px;
    }
    .wrapper {
        .slider {
            width: max-content;
            gap: 1rem;
            transform: translateX(0px);
            transition: 0.3s ease-in-out;
            margin-left: 50px;
        }
        .slider-action {
            position: absolute;
            z-index: 99;
            height: 100%;
            top: 1.5rem;
            bottom: 0;
            width: 50px;
            transition: 0.3s ease-in-out;
            svg {
                font-size: 2rem;
            }
        }
        .none {
            display: none;
        }
        .left {
            left: 0;
        }
        .right {
            right: 0;
        }
    }
`;

export default memo(CardSlider);
