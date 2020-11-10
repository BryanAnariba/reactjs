import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomePage = () => {
    // Declaramos la const userContext y la igualamos al context que tenga como nombre UserContext en el arbol de componentes
    // aqui aplique desestructuracion pero normalmente para acceder sin desestruturar seria userContext.user o userContext.setUser
    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <div>
            Home Screen
            <p className="container">
                {
                    JSON.stringify(user, null, 123)
                }
            </p>
            <hr/>
        </div>
    )
}
