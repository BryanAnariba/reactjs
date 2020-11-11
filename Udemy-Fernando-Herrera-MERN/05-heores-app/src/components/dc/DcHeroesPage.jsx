import React from 'react';
import { HeroesList } from '../heroes/HeroesList';

export const DcHeroesPage = () => {
    return (
        <div>
            <h2>Heroes de DC Universe</h2>

            <HeroesList publisher={ 'DC Comics' } />
        </div>
    )
}
