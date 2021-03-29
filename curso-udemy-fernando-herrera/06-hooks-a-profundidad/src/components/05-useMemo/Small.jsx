import React from 'react'



export const Small = React.memo(({ value }) => {
    console.log('ME VOLVI A LLAMAR :(');
    return (
        <small>{ value }</small>
    )
});
