import React , { Fragment } from 'react';
import initialMovies from '../../consts/InitialMovies';
import MovieComponent from '../Movie/Movie';
const MovieListComponent = () => {
    return ( 
        <Fragment>
            <div className="container">
                <div className="row mt-3">
                    { 
                        initialMovies.map(movie => (
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