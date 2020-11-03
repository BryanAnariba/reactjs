import React , { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef();
    const handleClick = () => {

        // con el hook ref no necesito acceder asi con document.tal
        //document.querySelector('#focus-name').focus();

        inputRef.current.select();
        console.log(inputRef)
    }
    return (
        <>
            <hr/>
            <h2>Use Ref Example: Focus Screen</h2>
            <p>
                Descripcion del hook: 
            </p>
            <input 
                ref = { inputRef }
                type="text" 
                placeholder="Su Nombre" 
                className="form-control"
                id="focus-name"
            />
            <button 
                className="btn btn-success mt-3"
                onClick={ handleClick }>
                Evento Focus-> hook UseRef
            </button>
        </>
    )
}
