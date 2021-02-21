import React from 'react';

// Agregando validaciones a lo props
import PropTypes from 'prop-types';

const PrimeraApp = ({ 
    saludo, 
    parrafo = 'Soy un parrafo'
}) => {
    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ parrafo }</p>
        </>
    )
}

export default PrimeraApp;

// Usando prop types para validar
PrimeraApp.propType = {
    saludo: PropTypes.string.isRequired
};

// PrimeraApp.defaultProps = {
//     parrafo: 'Soy un parrafo'
// };