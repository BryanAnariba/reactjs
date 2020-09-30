import React from 'react';
import ReactDom from 'react-dom';


// Declarando constante en formato jsx pero no acepta aun
const userData = {
  firstName: 'Bryan Ariel' ,
  lastName: 'Sanchez Anariba' ,
  age: 23 ,
  roll: 'Ing Sistemas'
}; 

// LLamamos ala etiqueta con id root de index.html para inyectar codigo
const root = document.getElementById('root');

// Creacion de un componente
const TarjetaFruta = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Este es un componente fruta</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dolores.</p>
      <strong>Fruta: { props.fruta } , Precio: $ { props.price }</strong>
    </div>
  )
}


// Componente principal y contenedor de los demas componentes
const App = () => {
  return (
    <div>
        <h1>
        Hola
        <p>
          Datos - { userData.firstName } , { userData.lastName }
        </p>
      </h1>
      <TarjetaFruta fruta='Sandia' price={ 2.00 } />
      <TarjetaFruta fruta='Pera' price={ 4.00 } />
      <TarjetaFruta fruta='Limones' price={ 5.00 } />
    </div>
  )
}

// Renderizamos 
ReactDom.render(<App></App> , root);