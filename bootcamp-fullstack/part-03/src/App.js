import React, { useState } from 'react';
import { Clicks } from './components/Clicks';

import { Display } from './components/Display';
import { NotUse } from './components/NotUse';

export const App = () => {
  const [ counter, setCounter ] = useState(0);

  const [ clicks, setClicks ] = useState([]);

  const [ counters, setCounters ] = useState({
    left: 0,
    right: 0,
    clicks: 0,
    message: 'Works'
  });

  // cuando se actualiza el estado o cambia o llegan props nuevas, se vuelve a renderizar el componente App = () = {}
  // OJO a eso por que lo que hay dentro del return se vuelve a renderizar
  // OJO , LOS COMPONENTES SOLO SE RENDERIZAN SI LLEGAN NUEVAS PROPS, pero props en el aspecto que cambie la prop, si siemmpre llega lo mismo no se renderiza

  const handleClick = (type) => {
    switch (type) {
      case 'add':
        setCounter(counter + 1);
      break;
      case 'substract':
        setCounter(counter - 1);
      break;
      case 'reset':
        setCounter(0);
      break;
      default:
        setCounter(0);
      break;
    }
  }

  const handleClickToCounter = (type) => {
    switch (type) {
      case 'left':
        setCounters({
          ...counters,
          left: counters.left + 1,
        });

        // Para saber donde di click en este caso izquierda
        setClicks( previusClick => ([ ...previusClick, 'L' ]));
      break;
      case 'right':
        setCounters({
          ...counters,
          left: counters.left,
          right: counters.right + 1,
        });

        // Para saber donde di click en este caso derecha
        setClicks( previusClick => ([ ...previusClick, 'R' ]));
      break;
      default:
      break;
    }
  }

  const isEvent = counter % 2 === 0;

  return (
    <>
      <strong>Valor del contador</strong>
      <Display counter = { counter } />
      <small>
        {
          (isEvent) 
          ?
          'Es par'
          :
          'Es impar'
        }
      </small>
      <br/>

      <button
        onClick={ () => handleClick('add') }
      >
        Add +
      </button>
      <button
        onClick={ () => handleClick('substract') }
      >
        Substract -
      </button>
      <button
        onClick={ () => handleClick('reset') }
      >
        Reset
      </button>

      <hr/>
      <h2>Counters left & right</h2>
        { counters.left }
        <button
          onClick={ () => handleClickToCounter('left') }
        >
          Left
        </button>
        <button
          onClick={ () => handleClickToCounter('right') }
        >
          Right
        </button>
        { counters.right }

        <h2>Clicks Totales { clicks.length }</h2>
        <h2>Clicks L: Left, R: Right</h2>
        {
          ( clicks.length === 0 )
          ?
            <NotUse />
          : 
            <Clicks clicks={ clicks } />
        }
    </>
  )
}

