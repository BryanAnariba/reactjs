import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value = 0 }) => {
    const [ add, setAdd ] = useState(value);
    const handleAdd = () => {
        setAdd(add + 1);
    }

    const handleSubstract = () => {
        setAdd(add - 1);
    }

    const handleReset = () => {
        setAdd(value);
    }
    return (
        <>
            <h1>Counter App</h1>
            <h2>{ add }</h2>
            <hr/>
            <button
                onClick={ handleAdd }
            >
                Add value +1
            </button>
            <hr/>
            <button
                onClick={ handleSubstract }
            >
                Substract value -1
            </button>
            <hr/>
            <button
                onClick={ handleReset }
            >
                Reset Value
            </button>
        </>
    )
}

CounterApp.propType = {
    value: PropTypes.number.isRequired
};
