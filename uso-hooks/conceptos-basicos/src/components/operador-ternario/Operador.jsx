import React from 'react';
const Operador = () => {
    const temperatura = 24;
    return ( 
        <div className="container">
            <hr/>
            <h2>Operador Ternario , Como esta el clima { temperatura }</h2>
            <p>
                {
                    temperatura > 29 ? 'Caliente' : 'Calido'
                }
            </p>
        </div>
    );
}

export default Operador;