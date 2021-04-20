import React from 'react'

export const Display = ({ counter }) => {
    console.log('Counter render');
    return (
        <h2>{ counter }</h2>
    )
}
