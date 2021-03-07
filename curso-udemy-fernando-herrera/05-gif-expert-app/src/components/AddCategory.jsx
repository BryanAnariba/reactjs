import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [ category, setCategory ] = useState('');

    const handleCategory = (e) => {
        const { target } = e;
        setCategory(target.value);
        //console.log(category);
    }

    const saveCategory = (e) => {
        // Evitando la recarga del navegador
        e.preventDefault();

        if (category.trim().length > 1) {
            // Enviando la categoria al arreglo de categories
            setCategories( cats => [ category ,...cats ] );

            // Limpieza del campo
            setCategory('');
        }
        
    }

    return (
        <>
            <h2>Add New Category</h2>
            <form className="form-group mb-2" onSubmit={ saveCategory }>
                <input 
                    type="text"
                    className="form-control"
                    value={ category }
                    onChange={ handleCategory }
                />
            </form>
        </>
    )
}

// Validaciones para los props, que sea requerido
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
