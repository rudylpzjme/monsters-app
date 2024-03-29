import React from 'react';

import './search-box.style.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        type='search'
        placeholder={ placeholder }
        onChange={ handleChange }
        className='search-box'
    />
);
