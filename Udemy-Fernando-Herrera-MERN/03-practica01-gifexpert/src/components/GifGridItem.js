import React from 'react'

export const GifGridItem = ({ id, title, url}) => {
    //console.log({id, url, title});
    return (
        <>
            <div className="card animate__animated animate__flipInX">
                <p>{ title }</p>
                <img src={ url } alt={ title } />
            </div>
        </>
    )
}
