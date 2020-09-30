import React , { useState } from 'react';

const Header = () => {
  const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px'
  }
  return (
    <header style={styles}>
      <h1>
        Activado
        <span
          role='img'
          aria-label='hook emoji'
        >
          ⚓
        </span> 
      </h1>
    </header>
  )
}

function App() {
  // Declarando estado
  const [ click , setClick ] = useState(0);
  const [ isAactive , setIsActive ] = useState(false);

  // Aumentando en uno al dar click con setClick, establecemos nuevo valor
  const addNewClick = () => {
    setClick(click + 1);
  }

  const changeStatus = () => {
    setIsActive(!isAactive);
  }

  return (
    <div>
      <h2>Ejemplos evento onClick y los hooks = state y useState()</h2>
      { isAactive && <Header/> }
      <section>
        <strong>Estado Bool, valor actual = { isAactive ? 1 : 0 }</strong>
        <p></p>
        <button onClick= { changeStatus }>
          { isAactive ? 'Desactivar' : 'Activar' }
        </button>
      </section>


      <section>
        <strong>
          Valor actual: { click }
        </strong>
      </section>
      <button onClick={ addNewClick }>
        Incrementar valor
      </button>


      <h2>Use State con Objetos</h2>

    </div>
  );
}

export default App;
