import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

// 9wS70QGMWBjtZtlX46UTJPuIZEtlR6nc
export const GifExpertApp = () => {
    //const categories = ['Konosuba','Horimiya','Tate no yuusha'];

    const [categories, setCategories] = useState(['Konosuba','Horimiya','Tate no yuusha']);

    const addCategory = () => {
        let newAanime = 'Dead Note';
        setCategories(
            [
                newAanime,
                ...categories 
            ]
        );
    }
    return (
        <>
            <h1>Gif Expert App Works</h1>
            <hr/>
            <AddCategory setCategories = { setCategories }/>
            <button
                onClick = { addCategory }
            >
                Add new category
            </button>
            <ol>
                {
                    categories.map((category) => {
                        return <li key = { category }> { category } </li>
                    })
                }
            </ol>
        </>
    );
}
