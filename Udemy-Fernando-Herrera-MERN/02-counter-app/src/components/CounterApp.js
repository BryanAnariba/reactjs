import React , { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ valor }) => {

    // Primer hook -> manejado estado useState, enviamos un valor inicial y un setValorInicial para cambiarlo durante su ejecucion
    const [ value, setValue ] = useState(valor);
    const aumentarElValor = (e) => {
        console.log(e);
        setValue(value + 1);
    }

    // Funciones handleSubstrac -> restar -1 , handleReset -> poner valor por default 0
    const handleSubstract = () => {
        setValue(value - 1);
    }

    const handleReset = () => {
        setValue(valor);// Mande el prop que por defecto es 0
    }

    return ( 
        <>
            <strong>Works Counter App</strong>
            <p>
                <strong>
                    valor: <span>{ value }</span>
                </strong>
                <br/>
                <button onClick={ aumentarElValor }>
                    Aumentar Valor: ( valor + 1 )
                </button>
                
                <button onClick={ handleSubstract }>
                    Disminuir Valor: ( valor - 1 )
                </button>
                
                <button onClick={ handleReset }>
                    Resetear Valor: ( 0 )
                </button>
            </p>
        </>
    );
}

CounterApp.propTypes = {
    valor: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    valor: 0
}
export default CounterApp;