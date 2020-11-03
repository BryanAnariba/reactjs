import React , { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { ProcesoPesado } from '../../helpers/ProcesoPesado'
export const MemoHook = () => {
    const { add, counter } = useCounter(100);
    const [ show, setShow ] = useState(true);

    // 
    const memoProcesoPesado = useMemo(() => ProcesoPesado(counter), [counter]);

    return (
        <>
            <hr/>
            <h2>
                Use MemoHook
            </h2>
            <strong>
                counter: { counter }
            </strong>


            <p>
                {
                    memoProcesoPesado
                }
            </p>
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