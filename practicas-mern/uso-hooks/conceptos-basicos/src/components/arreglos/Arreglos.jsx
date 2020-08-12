import React , { useState }  from 'react';

const Arreglos = () => {

    // Podemos tener los estados quq queramos
    const [arrayNum , setArrayNum] = useState([1,2,3]);
    const [numero , setNumero] = useState(4);

    const agregarNumero = () => {
        setNumero(numero + 1);
        console.log('Se agregara un nuevo item al arreglo');
        
        // Agregar numero al arreglo con el operador de propagacion, aumentamos en uno gracias al estado numero y set numero
        setArrayNum([
            ...arrayNum ,
            numero
        ]);
    }
    return ( 
        <div className="container">
            <hr/>
            <h2>Listas y Arreglos con su recorrido map</h2>
            <input type="button" value="Agregar Numero" className="btn btn-primary" onClick={ agregarNumero }/>
            {
                arrayNum.map((numero , index) => {
                    return <p className="text-center" key={ index }><strong> Indice -> </strong>{ index } - <strong> Numero -></strong> - { numero }</p>
                })
            }
        </div>
    );
}

export default Arreglos;