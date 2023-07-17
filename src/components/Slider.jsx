import React from 'react';
import CardSlider from './CardSlider';

const Slider = ({ movies }) => {
    const getMoviesFromRange = (start, end) => {
        return movies.slice(start, end);
    };
    return (
        <div>
            <CardSlider title="Tìm kiếm nhiều nhất" data={getMoviesFromRange(0, 10)} />
            <CardSlider title="Hiện đang thịnh hành" data={getMoviesFromRange(10, 20)} />
            <CardSlider title="Action Movies" data={getMoviesFromRange(20, 30)} />
            <CardSlider title="Comedy Movies" data={getMoviesFromRange(30, 40)} />
            <CardSlider title="Horror Movies" data={getMoviesFromRange(40, 50)} />
            <CardSlider title="Romance Movies" data={getMoviesFromRange(50, 60)} />
        </div>
    );
};

export default Slider;
