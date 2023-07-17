import React from 'react';
import Card from './Card';

const CardSlider = ({ data, title }) => {
    return (
        <div>
            {data.map((movies, index) => {
                return <Card key={movies.id} movieData={movies} title={title} />;
            })}
        </div>
    );
};

export default CardSlider;
