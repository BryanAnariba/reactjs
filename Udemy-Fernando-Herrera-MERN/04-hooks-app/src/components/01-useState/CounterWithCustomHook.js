import React from 'react'
import { useCounter } from '../../hooks/useCounter';
export const CounterWithCustomHook = () => {

    const { state, add, remove, reset } = useCounter(102);

    return (
        <>
            <hr/>
            <h2>
                Counter With Hook - { state }    
            </h2>  
            <button 
                onClick={ () =>  add(2) }
                className="btn btn-success">
                Add 1
            </button>
            <button 
                onClick={ () => remove(2) }
                className="btn btn-danger">
                Substract 1
            </button>
            <button 
                onClick={ reset }
                className="btn btn-primary">
                Reset
            </button>
            <hr/>
        </>
    )
}
