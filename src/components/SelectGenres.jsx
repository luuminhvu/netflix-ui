import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchMoviesByGenre } from '../store';

const SelectGenres = ({ genres, type }) => {
    const dispatch = useDispatch();
    return (
        <Select className="flex" onChange={(e) => dispatch(fetchMoviesByGenre({ type: type, genre: e.target.value }))}>
            {genres.map((genres) => {
                return (
                    <option key={genres.id} value={genres.id}>
                        {genres.name}
                    </option>
                );
            })}
        </Select>
    );
};
const Select = styled.select`
    margin-left: 50px;
    cursor: pointer;
    font-size: 1.2rem;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    border-radius: 3px;
`;
export default SelectGenres;
