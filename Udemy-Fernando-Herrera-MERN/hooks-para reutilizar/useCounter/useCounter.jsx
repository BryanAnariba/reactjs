import { useState } from 'react'

export const useCounter = (initialState = 0) => {
    const [ counter, setCounter ] = useState(initialState);

    const add = ( ) => {
        setCounter(counter + 1);
    }

    const remove = ( ) => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialState);
    }
    return {
        counter,
        add,
        remove,
        reset
    }
}
