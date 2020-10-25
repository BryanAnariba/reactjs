import React , { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [ inputValue, setInputValue ] = useState('');

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories( categs => [inputValue,...categs]);
            console.log('Categoria -> ' + inputValue + ' Guardada');    
            setInputValue('');
        }
    }
    return (
        <>
            <div>
                <h2>Categoria a ingresar al arreglo: { inputValue }</h2>
                <form onSubmit={ handleSubmit }>
                    <input 
                        type="text"
                        placeholder="Write a new category"
                        value={ inputValue }
                        onChange={ handleInputChange }
                    />
                </form>
            </div>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
