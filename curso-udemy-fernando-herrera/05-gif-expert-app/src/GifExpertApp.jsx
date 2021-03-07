import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['Konosuba']);

    return (
        <>
            <h2>Gif Expert App</h2>
            <hr/>

            <AddCategory setCategories={ setCategories } />

            <hr/>
            <ul>
                {
                    categories.map((category) => {
                        return <GifGrid category={ category } key={ category } />
                    })
                }
            </ul>
            <hr/>
        </>
    )
}
