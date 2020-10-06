import React from 'react';
import './App.css';
import UseEffectExample from './components/UseEffectExample';
import Peticion from './components/HttpRequestMasUseEffect';
function App() {
  return (
    <div className="App">
      <UseEffectExample/>
      <Peticion />
    </div>
  );
}

export default App;
