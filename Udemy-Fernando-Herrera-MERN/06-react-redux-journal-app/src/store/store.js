import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk'; // Es un middleware y permite hacer peticiones asincronas antes de que llegen a los reducers
import { uiReducer } from '../reducers/uiReducer';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // para que funcion redux tools en chrome

// Para meter mas reducers al store, ya que siempre hay mas de uno o en la mayoria de los casos
const rootReducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

// Creamos la fuente unica de informacion, de donde cada componente ira a sacar lo que necesita, para que funcione necesita el segundo parameto
export const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
);