import React from 'react';
import { AppRouter } from './routers/AppRouter';

// Implementando el store en el punto mas alto de la aplicacion sea en App.js o JournalApp.js en este caso
import { Provider } from 'react-redux'; // hace lo mismo que useContext solo que en ves de la propiedad value usa store
import { store } from './store/store';

export const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
