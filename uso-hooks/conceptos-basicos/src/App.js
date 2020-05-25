import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from './components/contador/Contador';
import Reactividad from './components/reactividad/Reactividad';


function App() {
  return (
    <div className="App">
      <Contador />
      <Reactividad />
    </div>
  );
}

export default App;
