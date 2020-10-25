import React , { Fragment, useContext} from 'react';

// Importamos el userContext antes de usarlo
import userContext from '../../contexts/UserContext';

import './Nabvar.css';

const NabvarComponent = () => {

    //Como consumir el CONTEXT AQUI en este componente
    const { user , logIn , logOut } = useContext(userContext);
    console.log('Se recargo el componente narbvar');

    return ( 
        <Fragment>
            <nav className="nabvar navbar-dark bg-dark">
                <div className="grilla">
                    <div className="grilla-uno">
                            <span className="navbar-brand">
                            <h2>
                                {
                                    // si el usuario existe decir hola usuario, si no bienvenid@
                                    user ? `Context API: Hola ${ user.name }` : 'Bienvenid@'
                                }
                            </h2>
                        </span>
                    </div>
                    <div className="grilla-dos">
                        {
                            // Si existe usuario que indique cerrar sesion , si no existe iniciar sesion
                            user
                            ?
                                <button className="btn btn-outline-warning" onClick={ logOut }>
                                    Cerrar Sesion
                                </button>   
                            :
                                <button className="btn btn-outline-primary" onClick={ logIn }>
                                    Iniciar Sesion
                                </button>
                        }
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default NabvarComponent;
