import React, { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { HeroesCard } from '../heroes/HeroesCard';


// Importamos el queryString que instalamos de npm
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/GetHeroesByName';

// OJO AQUI SE HACE EL QUERYSTRING
// 1 - PONER history
export const SearchHeroe = ({ history }) => {
    const location = useLocation();

    // Usamos el queryString, para manipular los parametros de la query
    const  { q = '' } = queryString.parse(location.search);
    //console.log(q); // por default tiene '' para evitar valores undefined

    const [heroe, setHeroe] = useState('');

    const handleInputChange = (e) => {
        setHeroe(e.target.value);
        //console.log(e.target.value);
    }

    // Filtro de busqueda qui
    const heroesFiltrados = useMemo(() => getHeroesByName(q), [q]);

    const searchHeroe = (e) => {
        e.preventDefault();
        console.log(heroe);

        // Creamos la query string
        history.push(`?q=${ heroe }`)
    }

    return (
        <div>
            <h2>Busca a heroe</h2>
            <div className="row">
                <div className="col-xl-5">
                    <h4>Formulario de Busquta</h4>
                    <form onSubmit={searchHeroe} className="card-body">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Encuentra un heroe"
                                className="form-control"
                                name="heroe"
                                onChange={ handleInputChange }
                                value={ heroe}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-outline-success btn-block">
                                Buscar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-xl-7">
                    <h4>
                        Resultados
                    </h4>
                    <hr/>
                        {
                            heroesFiltrados.map(heroesFiltrados => (
                                <HeroesCard key={heroesFiltrados.id} {...heroesFiltrados} />
                            ))
                        }
                </div>
            </div>
        </div>
    )
}
