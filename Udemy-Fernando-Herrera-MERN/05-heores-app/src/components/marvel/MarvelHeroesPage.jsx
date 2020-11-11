import React from 'react'
import { HeroesList } from '../heroes/HeroesList';
export const MarvelHeroesPage = () => {
    return (
        <div>
            <h2>Heroes del universo de marvel </h2>
            <HeroesList publisher={ 'Marvel Comics' } />
        </div>
    )
}

