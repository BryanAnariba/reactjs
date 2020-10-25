import React , { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(
        [
            'Goblin Slayer'
        ]);

    return ( 
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories } categories={ categories }/>
            <hr/>
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        /> 
                    ))
                }
            </ol>
        </>
    );
}
export default GifExpertApp;