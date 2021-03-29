import React, { useMemo, useState } from 'react'
import '../02-useEffect/effects.css';

import { useCounter } from '../../Hooks/useCounter';

export const MemoHook = () => {


    const [show, setShow] = useState(false);
    const { counter, increment } = useCounter(3000);

    // Funcion que carga la memoroa, y como al dar click en incrementar esta funcion se ejecuta pero al dar click en show tambien lo hace y no deberia de hacerlo para eso es el use memo, para que solo se ejecute la funcion de proceso pesado cuando el counter cambien y no cuando se de click al show
    const procesoPesado = (iteraciones) => {
        for (let i=0; i < iteraciones; i++) {
            console.log('Hay vamos');
        }
    }


    const memoProcesoPesado = useMemo( () => procesoPesado(counter), [ counter ]);

    return (
        <div>
            <h2>Use Memo</h2>
            <h3>Counter: { counter }</h3>
            <hr/>

            <p>
                {
                    memoProcesoPesado
                }
            </p>
            <button
                onClick={ increment }
                className="btn btn-success"
            >
                +1
            </button>

            <button
                onClick={ () => {
                    setShow(!show);
                } }
                className="btn btn-primary ml-3"
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}