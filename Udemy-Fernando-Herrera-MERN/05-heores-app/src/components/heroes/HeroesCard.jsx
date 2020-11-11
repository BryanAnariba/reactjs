import React from 'react'
import { Link } from 'react-router-dom';
export const HeroesCard = ({ 
    id, 
    superhero, 
    publisher, 
    alter_ego, 
    first_appearance, 
    characters 
}) => {
    const styles = {
        maxWidth: '540px',
    };
    return (
        <div className="card ms-3 animate__animated animate__flipInY" style={styles}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ `./assets/heroes/${id}.jpg` } alt={ superhero } className="card-img"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">
                            { alter_ego }
                        </p>

                        {
                            (alter_ego !== characters) 
                            &&
                            <p>
                                { characters }
                            </p>
                        }

                        <p className="card-text">
                            <small className="text-muted">
                                {first_appearance}
                            </small>
                        </p>

                        <Link to={`/heroe/${id}`}>
                            Mas..
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
