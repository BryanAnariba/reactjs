import React from 'react';

import { Link } from 'react-router-dom';
export const GifItem = ({ title, id, url }) => {
    return (
        <Link to={ `/gif/${ id }/details` } key={ id } className="gif">
            <h4>{ id } - { title }</h4>
            <img src={ url } alt={ title } />
        </Link>
    )
}
