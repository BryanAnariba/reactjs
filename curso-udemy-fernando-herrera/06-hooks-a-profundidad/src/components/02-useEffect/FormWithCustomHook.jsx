import React, { useEffect } from 'react'
import './effects.css';
import { useForm } from '../../Hooks/useForm';

export const FormWithCustomHook = () => {
    const [ formValues, handleInputChange, resetForm ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const getData = (e) => {
        e.preventDefault();
        console.log(formValues);
        resetForm();
    }

    useEffect( () => {
        console.log('email cambio');
    }, [ email ] )

    return (
        <form onSubmit = { getData }>
            <h1>FORM WITH CUSTOM HOOK</h1>
            <hr/>

            <div className="form-group">
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group mt-2">
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group mt-2">
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    className="form-control"
                    placeholder="Your password"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group mt-2">
                <button className="btn btn-primary" type="submit">
                    Save Data
                </button>
            </div>
        </form>
    )
}
