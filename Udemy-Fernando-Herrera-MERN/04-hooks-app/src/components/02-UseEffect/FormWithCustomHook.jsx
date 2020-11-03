import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email is changed');
    },[email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }
    return (
        <>
            <hr/>
            <h2>UseEffect Form With Custom Hook</h2>

            <form onSubmit = { handleSubmit }>
                <div className="form-group">
                    <input 
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="tu nommbre"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="tu email"
                        autoComplete="off"
                        value={ email }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text"
                        name="password"
                        className="form-control"
                        placeholder="tu password"
                        autoComplete="off"
                        value={ password }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-success"
                    value="Save User"/>
                </div>
            </form>
            <hr/>
        </>
    )
}
