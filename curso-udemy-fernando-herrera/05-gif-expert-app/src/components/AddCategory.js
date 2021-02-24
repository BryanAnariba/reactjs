import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({ setCategories }) => { //Obtenermos y desestructuramos las props
    const [category, setCategory] = useState('');

    const handleCategoryChange = (e) => {
        const { value } = e.target;
        setCategory(value);
        console.log(category);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories( cats => [ ...cats, category ]);// Enviamos el valor del input
        setCategory('');
    }
    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type="text"
                value = { category }
                onChange = { handleCategoryChange }
            />
        </form>
    )
}

AddCategory.propTypes = { //Tipamos las props para que sean requeridas
    setCategories: PropTypes.func.isRequired
};
