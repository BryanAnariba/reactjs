import React , { Fragment } from 'react';

const MovieComponent = ({ movie }) => {
    //
    const imgStyles = {
        height: '260px'  ,
        objectFit: 'cover' ,
        //objectPosition: 'top'
    }

    // 
    const isFavorite = true;
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
                    <button 
                        className={`btn ${ isFavorite ? 'btn-success' : 'btn-danger' }`}>
                            Favorito
                    </button>
                </div>
            </div>
        </Fragment>
    );
}
export default MovieComponent;