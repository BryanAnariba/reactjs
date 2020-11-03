import React , { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
export const UseMemo = () => {
    const { add, counter } = useCounter(10);
    const [ show, setShow ] = useState(true); 
    return (
        <>
            <hr/>
            <h2>
                Use Memo Hook: Memorize
            </h2>
            <strong>
                counter: <Small value={ counter } />
            </strong>
            <p></p>
            <button onClick={ add } className="btn btn-info">
                add + 1    
            </button>
            
            <button 
            className="btn btn-danger"
             onClick={ () => {
                 setShow(!show)
             } }>
                Show/Hide { JSON.stringify(show) }
            </button>
        </>
    )
}
