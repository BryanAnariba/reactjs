import React, { Fragment } from 'react';
import CounterApp from './components/CounterApp';
import PropTypes from 'prop-types';// Verificando que venga el contenido de los props

const PrimeraApp = ({ nombre, apellido } ) => {
    const usuarios = {
        nombre: nombre,
        apellido: apellido
    };

    //console.log(props);
    
    return (
        <Fragment>
            <h2>Hello, { usuarios.nombre } { usuarios.apellido }</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nesciunt!</p>
            <hr/>
            <h2>Componente Counter App</h2>
            <CounterApp valor={ 0 } />
        </Fragment>
    );
}

// Manejo de los errores en caso que los parametros sean obligatorios---> POSIBLE IDEA PARA REALIZAR EL SIGNUP
PrimeraApp.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
    nombre: 'Nombre Usuario',
    apellido: 'Apellido Usuario'
}

export default PrimeraApp;