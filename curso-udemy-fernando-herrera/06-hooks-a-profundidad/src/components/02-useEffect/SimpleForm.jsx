import React, { useEffect, useState } from 'react'
import './effects.css';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {

        console.log('hey');   
    }, []);

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        const { target } = e;
        setFormState({
            ...formState,
            [ target.name ]: target.value // Anadiendo name del input
        });
    }

    return (
        <>
            <h1>Simple Form (useEffect)</h1>
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
                    placeholder="Your email"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>
        </>
    )
}
