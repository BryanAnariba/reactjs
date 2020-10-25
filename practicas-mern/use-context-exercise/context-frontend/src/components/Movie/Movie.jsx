import React , { Fragment , useContext} from 'react';

import userContext from '../../contexts/UserContext';
const MovieComponent = ({ movie }) => {
    const { user , toggleFavoriteMovieToUser } = useContext(userContext);

    console.log('Se recargo el componente Movie');
    //
    //Como consumir el CONTEXT AQUI en este componente
    //const { user , logIn , logOut } = useContext(userContext);

    const imgStyles = {
        height: '260px'  ,
        objectFit: 'cover' ,
        //objectPosition: 'top'
    }

    // 
    const isFavorite = user?.favoriteMovies?.includes(movie.id);
    return ( 
        <Fragment>
            <div className="card">
                <img 
                    className="card-img-top"
                    src={ movie.imageUrl } 
                    alt={ movie.title }
                    style={ imgStyles }
                />
                <div className="card-body">
                    <h4>
                        { movie.title }
                    </h4>
                    {
                        user?.id &&
                        <button 
                        className={`btn ${ isFavorite ? 'btn-success' : 'btn-danger' }`} 
                        onClick={ () => toggleFavoriteMovieToUser(movie.id) }>
                            Favorito
                        </button>
                    }
                </div>
            </div>
        </Fragment>
    );
}
export default MovieComponent;