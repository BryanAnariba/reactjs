import React , { createContext , useState } from 'react';

// Tiene dos propiedades , Consumer y Provider -> se consume con un hook de react
const userContext = createContext(); 

// Children contiene la informacion del nabvar y movie list components
const UserProvider = ({ children }) => {

    // ------------------------------------------> el estado se compondra de el usuarioInicial, funciones login y logout
    // GENERALMENTE EN EL PROVIDER SE ENVIA UN OBJETO 
    const InitialUser = {
        id: 1 ,
        name: 'Bryan' ,
        favoriteMovies: [1,2,3]
    };
    const [ user , setUser ] = useState(InitialUser);
    // Funciones que deben ir en el context
    const logIn = () => {
        setUser(InitialUser);
    }
    const logOut = () => {
        setUser(null);
    }

    const toggleFavoriteMovieToUser = (movieId) => {
        alert("You are selected the movie with id -> " + movieId);
        const isFavorite = user.favoriteMovies.includes(movieId);
        const favoriteMovies = isFavorite
        ? // si el id esta en el arreglo actualEliminarla
        user.favoriteMovies.filter(favMovId => favMovId !== movieId) 
        : // Si el id no esta en el arreglo actual debemos agregarla
        [...user.favoriteMovies , movieId]
        setUser({
            ...user,
            favoriteMovies
        });
    }

    // Al final se mandara este parametro como valor al userContext.provider value ={data} para que se pueda usar en los demas componentes
    const data = { 
        user ,
        logIn ,
        logOut ,
        toggleFavoriteMovieToUser
    };
    return (
        <userContext.Provider value = { data }>
            { children }
        </userContext.Provider>
    )
}

export { UserProvider };
export default userContext;