import React, { useState, useCallback } from 'react';
import { SchowIncrement } from './SchowIncrement';
export const CallBackHook = () => {
    const [counter, setCounter] = useState(1)


    const incrementCounter = useCallback(
        (incrementNum) => {// Lo que queremos ejecutar 
            setCounter(c => c + incrementNum);
        }
    ,[setCounter]);
    return (
        <div>
            <hr/>
            <h2>Uso de Use Callback:  Dos casos de uso principales</h2>
            <p>
                1: Cuando queremos mandar una funcion a un componente hijo, manda una version memorizada de esta funcion setCounter, que sirve para mandarla a otros componentes como argumento y react sabra que no a cambiado si la dependencia no a cambiado en este caso setCounter, BASICAMENTE SE USA CUANDO QUEREMOS MANDAR UN COMPONENTE Y EL COMPONENTE ESTA MEMORIZADO CON REACT.MEMO, si no lo hacemos se crea un nuevo espacion en memoria

                2: Cuando lo usamos con un useEffect
            </p>
            <p>Counter Value: { counter }</p>
            <SchowIncrement incrementCounter={ incrementCounter } />
        </div>
    )
}
