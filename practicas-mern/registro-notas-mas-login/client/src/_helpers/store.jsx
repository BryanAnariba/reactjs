import { createStore , applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { rootReducer } from '../_reducers/index';

export const store = createStore(rootReducer , applyMiddleware(reduxThunk));

// Para ver lo que esta sucediendo osea que nos notifique que pasa en al aplicacion
store.subscribe(() => {
    console.log(store.getState());
});