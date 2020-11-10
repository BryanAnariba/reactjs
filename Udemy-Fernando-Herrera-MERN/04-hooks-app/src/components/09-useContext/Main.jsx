import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const Main = () => {
    // const user = {
    //     id: 1234,
    //     name: 'Bryan Ariel',
    //     email: "bryan@gmail.com"
    // };

    const [user, setUser] = useState({});

    // Metemos el AppRouter en UserContext
    // User Context es un higther order component 
    // Al meter el AppRouter dentro de UserContext podemos y mandar un estado a todos los componentes hijos
    /* parametro value es lo que yo quiero compartir a los demas componentes hijos*/
    // El useContext actua como osbervable esta pendiente de cambios al value
    return (
        <UserContext.Provider value={{
            user,// el value puede tener mas de una sola variable
            setUser
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
