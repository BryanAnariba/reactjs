import React , { Fragment } from 'react';
import NabvarComponent from './components/Nabvar/Navbar';
import MovieListComponent from './components/MovieList/MovieList';
import { UserProvider } from './contexts/UserContext';
import { MoviesProvider }  from './contexts/MoviesContext'; 

function App() {

  return (
    <Fragment>
      <UserProvider>
        <MoviesProvider>
          <NabvarComponent />
          <MovieListComponent />
        </MoviesProvider>
      </UserProvider>
    </Fragment>
  );
}

export default App;
