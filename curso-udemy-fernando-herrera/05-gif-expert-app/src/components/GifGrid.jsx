//import React, { useEffect, useState } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from '../components/GifGridItem';


export const GifGrid = ({ category }) => {
    // const [ imagesData, setImagesData ] = useState([]);

    const { loading, data } = useFetchGifs( category );
    return (
        <>
            <h3>{ category }</h3>
            
            {
                loading && <p className="text-primary">Loading...... </p>
            }
            <div className="card-grid">
                {
                    data.map( (img) => {
                        return <GifGridItem { ...img } key={ img.id } />
                    })
                }
            </div>
        </>
    )
}
