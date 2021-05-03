import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './helpers';

ReactDOM.render(
  <React.StrictMode>


    {/* Store es el estado inicial de la aplicacion */}
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
