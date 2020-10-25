import React /*{ useEffect, useState }*/ from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGif } from '../hooks/UseFetchGifs';
const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGif(category);
    return (
        <>
            <h2>{ category }</h2>
            <div className="card-grid"> 
            {
                loading && <h2>Loading Data...</h2>
            } 
            {
                images.map((img) => (
                    <GifGridItem 
                        key={ img.id }
                        { ...img }
                    />
                ))
            }
            </div>
        </>
    )
}

export default GifGrid
