import { useState } from "react"

export const useCounter = ( initialState = 0 ) => {
    const [counter, setCounter] = useState( initialState );

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter( initialState );
    }
    // Retornamos el state y las funciones
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
