import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { setErrorAction, removeErrorAction } from '../../actions/ui';
import { registerWithEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {
    const dispatch = useDispatch(); // para disparar acciones y modificar el store en este caso el uiReducer
    const state = useSelector((state) => state.ui) // Para recoger lo del store en este caso los mensajes de error del formulario registro

    // Desestructuramos para sacar el mensaje y lo imprimimos en el cliente
    // console.log(state);
    const { msmError } = state;

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = formValues;

    const isFormValid = () => {

        // Si cae en uno de estos errores que modifique el state de ui con el error, ejecuta dispatch
        if (name.trim().length === 0) {
            let error = 'Name Is Required';
            console.log(error);
            dispatch(setErrorAction(error));
            return false;
        } else if (!validator.isEmail(email)) {
            let error = 'Email is not valid';
            console.log(error);
            dispatch(setErrorAction(error));
            return false;
        } else if ((password !== password2) || (password.length < 5)) {
            let error = 'The min of character for the password is six';
            console.log(error);
            dispatch(setErrorAction(error));
            return false
        }

        // Si no hay errores que limpie el state de ui errors con null
        dispatch(removeErrorAction());
        return true;
    }


    // Registrar usuario
    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log('Datos Correctos => ', formValues);

            // Disparamos el registro asincrono
            dispatch(registerWithEmailPassword(email, password, name));
        } 
    }
    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form>
                {// Si y solo si msmError es diferente de null lo imprimira
                    msmError && (
                        <div className="auth__alert-error">
                            { msmError }
                        </div>
                    )
                }

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

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

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                    onClick={ handleRegister }
                >
                    Register
                </button>

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
