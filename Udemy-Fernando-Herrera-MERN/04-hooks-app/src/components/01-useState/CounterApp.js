import React , { useState } from 'react'

export const CounterApp = () => {
    // Podemos desestructurar desde useState
    const [ state, setState] = useState({
        counter1: 0,
        counter2: 1
    });

    const { counter1, counter2 } = state;
    const handleAdd = () => {
        setState({
            ...state,
            counter1: counter1 + 1,
        });
    }
    return (
        <div>
            <h2>Counter One - { counter1 }</h2>
            <h2>Counter Two - { counter2 }</h2>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={ handleAdd }
            >
                Add +1 to Counter One
            </button>
        </div>
    )
}
