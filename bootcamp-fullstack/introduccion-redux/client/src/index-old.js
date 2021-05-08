import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { CounterReducer } from './reducers/CounterReducer';

// El store se encarga de hacer los dispatch ahora, no el reducer, el se encarga de mantener el estado, al fin y al cabo es un store/tienda
const store = createStore(
  CounterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

store.subscribe(() => {
  console.log(store.getState());
})

export const App = () => {
  const increment = () => {
    store.dispatch({
      type: '@counter/incremented'
    });
  }

  const reset = () => {
    store.dispatch({
      type: '@counter/reseted'
    });
  }

  const decrement = () => {
    store.dispatch({
      type: '@counter/decremented'
    })
  }
  return (
    <div>
      <h2>{ store.getState() }</h2>  
      <br />
      <button onClick={ increment }>
        Incremented
      </button>
      <br />
      <button onClick={ decrement }>
        Decremented
      </button>
      <br />
      <button onClick={ reset }>
        Reseted
      </button>
    </div>
  )
}

const RenderApp = () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}

RenderApp()
store.subscribe(RenderApp)
export default App;