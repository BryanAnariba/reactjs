import React from 'react'

// con memo, el componente solo se va a disparar si y solo si el prop que viene en la funcion se altera si no no cambia
export const Small = React.memo(({ value }) => {
    console.log('Me Volvi Llamar :(');
    return (
        <small>{ value }</small>
    )
})
