import React from 'react'

export const SchowIncrement = React.memo(({ incrementCounter }) => {
    console.log('Me volvi a ejecutar :(');
    return (
        <button 
            className="btn btn-primary"
            onClick={
                () => {
                    incrementCounter(5)
                }

            }>
            Increment Counter
        </button>
    )
})
