import React from 'react'

export const Clicks = ({ clicks }) => {
    return (
        <p> 
            { clicks.join(",") }
        </p>
    )
}
