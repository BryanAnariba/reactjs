import React , { Fragment , useContext } from 'react';
import MovieComponent from '../Movie/Movie';
import MoviesContext from '../../contexts/MoviesContext';

const MovieListComponent = () => {
    const movies = useContext(MoviesContext);
    console.log('Se recargo el componente movie list');
    return ( 
        <Fragment>
            <div className="container">
                <div className="row mt-3">
                    { 
                        movies.map(movie => (
                            <div className="col-lg-4 sm-12" key={ movie.id }>
                                <MovieComponent movie={ movie /* Mandamos la movie recorrida por id como props al componente Movie */}/>
                            </div>        
                        )) 
                    }
                </div>
            </div>
            
        </Fragment>
    );
}
export default MovieListComponent;