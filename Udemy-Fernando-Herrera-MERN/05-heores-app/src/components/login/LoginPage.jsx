import React, { useContext } from 'react'
import { types } from '../../types/types';
import { AuthContext } from '../../auth/AuthContext';

export const LoginPage = ({ history }) => {

    //  LLamamos al contexto que a su ves tiene aloja el reducer con user con el value
    const {dispatch} = useContext(AuthContext);// el context ya tiene incluido el useReducer

    // Funcion que realiza el inicio de sesion
    const login = () => {
        //history.push('/');

        // Creamos la accion de inicio secion
        const action = {
            type: types.login,
            payload: {
                user: 'Bryan',
                email: 'saariel115@gmail.com',
                logged: true
            }
        };

        // Disparamos la accion
        dispatch(action);

        // Una vez disparada la accion redirigimos al inicio -> si en localstorage existe la ruta ultima visitada que redirecione ahi
        // caso contrario al inicio /
        const lastPath = localStorage.getItem('lastPath') || '/';
        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="colxl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto">
                    <div className="card">
                        <div className="card-header bg-dark text-center text-white">
                            <h3>Iniciar sesion</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <button 
                                    type="button" 
                                    className="btn btn-outline-success btn-block"
                                    onClick={ login }>
                                    Login
                                </button>
                            </div>
                        </div>
                        <div className="card-footer bg-warning">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
