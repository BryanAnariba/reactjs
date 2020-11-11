import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'


import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
export const Navbar = () => {
    // Inicializamos el useHistory
    const history = useHistory();

    //  LLamamos al contexto que a su ves tiene aloja el reducer con user y el diapatch con el value
    const {user, dispatch} = useContext(AuthContext)

    // Funcion de logOut
    const logOut = () => {
        // Creamos accion
        const action = {
            type: types.logout
        };

        // Disparo accion logout en el reducer
        dispatch(action);

        // Una vez disparada la accion redireccionamos al login
        history.replace('/login');
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    {
                        (user.email !== '') && 
                        <span className="text-success nav-item nav-link">
                            { user.email }
                        </span>
                    }
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search Heroe
                    </NavLink>
                    <button 
                        className="nav-item nav-link btn"
                        onClick={ logOut }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}