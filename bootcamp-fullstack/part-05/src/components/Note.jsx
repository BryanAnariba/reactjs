import React from 'react'

export const Note = ({ id, title, body }) => {
    return (
        <>
            <p key={ id }>
            <strong>
                { title }:
            </strong>
            <small>
                <time>
                    { body }
                </time>
            </small>
            </p>
        </>
    )
}
