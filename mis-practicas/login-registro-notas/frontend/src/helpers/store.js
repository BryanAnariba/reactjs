import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { rootReducer } from '../reducers';

//  aqui se crea el store pero con el reducer o reducers que contendra la aplicacion
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

// para ver lo que hay en el store
store.subscribe(() => {
    console.log(store.getState());
});