import React from 'react'

export const MiComponente = ({ data }) => {
    const { nombre, apellido, edad, carrera, color } = data;
    return (
        <>
            <div>
                <h2>Bienvenido</h2>
                <p style = { 
                    {
                        color: color
                    } 
                }>
                    Nombre: { nombre }
                </p>
                <br/>
                <p>
                    Apellido: { apellido }
                </p>
                <br/>
                <p>
                    Edad: { edad }
                </p>
                <br/>
                <p>
                    Cargo: { carrera }
                </p>
            </div>
        </>
    )
}
