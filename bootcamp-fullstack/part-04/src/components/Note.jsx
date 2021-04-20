import React from 'react'

export const Note = ({ categories = [], id, content, date }) => {
    return (
        <>
            <p key={ id }>
            <strong>
                { content }:
            </strong>
            <small>
                <time>
                    { date }
                </time>
            </small>
            </p>
            
            <ul>
            {
                categories.map((category) => {
                    return <li key={ category }>{ category }</li>
                })
            }
            
            </ul>
        </>
    )
}
