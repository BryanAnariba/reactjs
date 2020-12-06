import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
    // Disparando acciones con redux, le da acceso al dispatch de acciones, cabe recalcar que este dispatch ya sabe lo que hay en el store, las settings
    const dispatch = useDispatch();

    // Recogemos del estado para recoger el valor del loading de store, si es true desabilita el boton y es false lo habilita
    const { loading }= useSelector(state => state.ui);



    const [ formValues, handleInputChange] = useForm({
        email: 'saariel115@gmail.com',
        password: 'asd.456'
    });
    
    const { email, password } = formValues;

    // Login con correos que no son de google
    const handleLogin = (e) => {
        e.preventDefault();

        // AQUI HACEMOS EL DISPATCH DEL LOGIN => este dispatch hay que mandarle la accion que creamos
        // console.log(email, password);
        //
        dispatch(startLoginEmailPassword(email, password));

    }

    // Iniciar sesion con cuenta de google
    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }




    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={ handleLogin }>

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                        disabled={ loading }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>

            </form>
        </>
    )
}
