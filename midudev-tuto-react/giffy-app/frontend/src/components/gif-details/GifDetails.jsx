import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom';

export const GifDetails = () => {
    const { params } = useParams();
    console.log(params);

    useEffect(() => {
        console.log('Gif Details rendered');
    }, []);
    return (
        <>
            <p>
                <strong className="text-white">ID: </strong>
            </p>
        </>
    )
}
