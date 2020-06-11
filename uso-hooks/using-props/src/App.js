import React from 'react';
import './App.css';
import Props from './components/props/Props';
import ComentarioProps from './components/comentarios-props/ComentarioProps';
function App() {
  const usuario = {
    nombreUsuario: 'Bryan' ,
    fotografiaUsuario: 'http://via.placeholder.com/64' ,
    comentarioUsuario: 'Lorem inpum dolor de cabeza'
  }

  return (
    <div className="App">
      <Props nombreUsuario="Bryan Ariel" edadUsuario={ 23 }/>
      <Props nombreUsuario="Sanchez Anariba" edadUsuario={ 24 }/>
      <ComentarioProps usuario = { usuario }/>
      <ComentarioProps usuario = { usuario }/>
    </div>
  );
}

export default App;
