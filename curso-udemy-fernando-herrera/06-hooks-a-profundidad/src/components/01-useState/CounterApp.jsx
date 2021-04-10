import React, { useState } from 'react'
import './counter.css';
export const CounterApp = () => {
    const [ counter , setCounter] = useState({
        counter1: 10,
        counter2: 20
    });

    const { counter1, counter2 } = counter;
    const addCount = () => { // Solo modificar un counter de los dos el counter1
        setCounter({
            ...counter,
            counter1: counter1 + 1
        });
    }
    return (
        <>
            <h1>Counter 1 : { counter1 }</h1>
            <h1>Counter 2 : { counter2 }</h1>
            <hr/>
            <button className="btn btn-success" onClick={ addCount }>
                +
            </button>
        </>
    )
}