import React, { useRef } from 'react'
import '../02-useEffect/effects.css';
export const FocusScream = () => {

    // Use ref es para mantener una referencia mutable
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }
    return (
        <div>
            <h2>Focus Scream</h2>
            <hr/>
            <input 
                ref={ inputRef }
                type="text" 
                id="name"
                className="form-control"
                placeholder="name"
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }>Focus</button>
        </div>
    )
}
