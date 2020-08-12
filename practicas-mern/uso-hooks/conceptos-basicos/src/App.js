import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from './components/contador/Contador';
import Reactividad from './components/reactividad/Reactividad';
import Arreglos from './components/arreglos/Arreglos';
import Operador from './components/operador-ternario/Operador';
import Formularios from './components/formularios/Formularios';
import ValidacionFormularios from './components/validacion-formularios/validacionFormularios';

function App() {
  return (
    <div className="App">
      <Contador />
      <Reactividad />
      <Operador />
      <Arreglos />
      <Formularios />
      <ValidacionFormularios/>
    </div>
  );
}

export default App;