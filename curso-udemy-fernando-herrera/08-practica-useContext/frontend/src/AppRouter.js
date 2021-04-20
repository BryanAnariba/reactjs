import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { AboutScreen } from './components/AboutScreen';
import { HomeScreen } from './components/HomeScreen';
import { LoginScreen } from './components/LoginScreen';
import { NotFound } from './components/NotFound';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                {
                    // Switch para condicionar las rutas
                }
                <Switch>
                    
                    <Route path="/" exact={ true } component={ HomeScreen }/>
                    <Route path="/about" exact={ true } component={ AboutScreen } />
                    <Route path="/login" exact={ true } component={ LoginScreen } />
                    <Route component={ NotFound }/>
                </Switch>
            </div>
        </Router>
    )
}
