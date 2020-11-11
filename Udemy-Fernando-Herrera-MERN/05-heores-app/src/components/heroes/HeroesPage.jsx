import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/GetHeroesById';
export const HeroesPage = ({ history }) => {
    const { heroeId } = useParams();
    
    // Para que solo haga la peticion cuando el heroeId cambia para asi evitar problemas de rendimiento
    const heroe = useMemo(() => getHeroesById(heroeId), [heroeId]);
    if (!heroe) {
        return <Redirect to="/" />
    } 
    const { 
        superhero, 
        publisher, 
        alter_ego, 
        first_appearance, 
        characters 
    } = heroe;
    
    const regresar = () => {

        //  Si haz clickeado menos de dos veses o solo copiaste la ruta de heroe en especifo y quieres regresar que retorne al inicio
        if (history.length <= 2) {
            history.push('/');
        } else { // caso contrario que retorne a la pagina de heroes donde clickeo el heroe
            history.goBack('/');
        }
        
    }
    return (
        <div className="row">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img 
                    src={`../assets/heroes/${ heroeId }.jpg`} 
                    alt={ superhero }
                    className="img-thumbnail"/>
            </div>
            <div className="col-8 animate__animated animate__fadeInLeft">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>
                            AlterEgo: { alter_ego }
                        </b>
                    </li>
                    <li className="list-group-item">
                        <b>
                            Publisher: { publisher }
                        </b>
                    </li>
                    <li className="list-group-item">
                        <b>
                            Appearance: { first_appearance }
                        </b>
                    </li>
                </ul>
                <h5>Characters</h5>
                <p>
                    { characters }
                </p>
                <button className="btn btn-info" onClick={ regresar }>
                    Regresar
                </button>
            </div>
        </div>
    )
}
