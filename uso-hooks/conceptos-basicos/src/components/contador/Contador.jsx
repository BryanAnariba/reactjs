import React , { useState } from 'react';

const Contador = () => {
    // Ejercicio 1
    /*
        Este ejemplo renderiza un contador. Cuando haces click en el botón, incrementa el valor:
    */
    
    // Establecemos los estados iniciales [ variable -> nombre del estado , setVariable -> para modificar el estado]
    const [ contador , setContador ] = useState(0);

    const aumentando = () => {
        setContador(contador + 1);
    }
    return ( 
        <div className="container">
            <p>
                Imprimiento el estado en html, en este caso el estado inicial -> <b> { contador } </b>
            </p>
            <button onClick={ aumentando } className="btn btn-outline-success" >Aumentar</button>
            <hr />
        </div>
    );
}
export default Contador;