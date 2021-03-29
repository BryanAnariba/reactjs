import React, { useState } from 'react'
import '../02-useEffect/effects.css';

import { useCounter } from '../../Hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    // Al dar click en increment si se debe de ejecutar el componente Small, pero no con el boton Show/Hide
    // para eso es el useMemo, para evitar dicha carga innesesario

    const [show, setShow] = useState(false);
    const { counter, increment } = useCounter(0);
    return (
        <div>
            <h2>Use Memo</h2>
            <h3>Counter:<Small value={ counter } /></h3>
            <hr/>
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
