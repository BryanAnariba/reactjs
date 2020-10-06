import React , { Fragment, useContext} from 'react';
import userContext from '../../contexts/UserContext';

import './Nabvar.css';

const NabvarComponent = () => {

    //Como consumir el CONTEXT AQUI en este componente
    const { user , logIn , logOut } = useContext(userContext);
    
    const dataUser = user;

    const users = { name: dataUser }
    
    return ( 
        <Fragment>
            <nav className="nabvar navbar-dark bg-dark">
                <div className="grilla">
                    <div className="grilla-uno">
                            <span className="navbar-brand">
                            <h2>
                                {
                                    // si el usuario existe decir hola usuario, si no bienvenid@
                                    user ? `Context API: Hola ${ users.name }` : 'Bienvenid@'
                                }
                            </h2>
                        </span>
                    </div>
                    <div className="grilla-dos">
                        {
                            // Si existe usuario que indique cerrar sesion , si no existe iniciar sesion
                            user 
                            ?
                                <button className="btn btn-outline-warning">
                                    Cerrar Sesion
                                </button>   
                            :
                                <button className="btn btn-outline-primary">
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
