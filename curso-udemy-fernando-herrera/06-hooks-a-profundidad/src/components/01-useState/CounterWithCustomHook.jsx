import React from 'react'
import './counter.css';

import { useCounter } from '../../Hooks/useCounter';

export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter( 10 );
    return (
        <div className="mt-5">
            <h1>Counter with custom hook { state }</h1>
            <hr/>
            <button
                className="btn ml-4 btn-success"
                onClick={ () => increment() }
            >
                +1
            </button>
            <button
                className="btn ml-4 btn-danger"
                onClick={ () => decrement(2) }
            >
                -1
            </button>

            <button
                className="btn btn-info"
                onClick={ reset }
            >
                Reset
            </button>
        </div>
    )
}