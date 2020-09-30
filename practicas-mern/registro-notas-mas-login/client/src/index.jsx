import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import { App } from './app';

// El provider va a recibir un store dicho store es que el que nos dara el estado
ReactDom.render(
    <Provider store={ store }> 
        <App>
            
        </App>
    </Provider> ,
    document.querySelector('#root')
)