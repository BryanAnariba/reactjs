import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/GetHeroesByPublisher'
import { HeroesCard } from './HeroesCard';
export const HeroesList = ({ publisher }) => {

    // Para que solo haga la peticion cuando el publisher cambia para asi evitar problemas de rendimiento
    const heroes = useMemo(() => getHeroesByPublisher(publisher) , [publisher]);

    return (
        <div className="card-columns">
            {
                    heroes.map( heroe => (
                        <HeroesCard key= { heroe.id } {...heroe}>
                            { heroe.superhero }
                        </HeroesCard>
                    ))
                }      
        </div>
    )
}
