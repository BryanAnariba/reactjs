import React , { Fragment , useState } from 'react';
import NabvarComponent from './components/Nabvar/Navbar';
import MovieListComponent from './components/MovieList/MovieList';

// Importar userContext, 
//desde app por que es necesario envolver los componentes a los cuales quieres trasmitir informacion
import userContext from './contexts/UserContext'; 
/*
  la etiqueta userContext.Provider -> retorna un componente para envolver los componentes a los cuales se desea trasmitir una data
*/
function App() {
 
  // GENERALMENTE EN EL PROVIDER SE ENVIA UN OBJETO 
  const InitialUser = {
    id: 1 ,
    user: 'Bryan' ,
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

  const data = { 
    user ,
    logIn ,
    logOut
  };
  return (
    <Fragment>
      <userContext.Provider value={data}>
        <div>
          <NabvarComponent />
          <MovieListComponent />
        </div>        
      </userContext.Provider>
    </Fragment>
  );
}

export default App;
