import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';  
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/auth';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
    const dispatch = useDispatch();


    // debo esperar que firebase responda para ver si las credenciales son correctas redirijo al menu, si no al login de nuevo
    const [checking, setChecking] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //  Con esto verifico que el usuario este logueado para que cuando recargue la pag no se pierda la informacion
    useEffect(() => { 
        firebase.auth().onAuthStateChanged((user) => {
            // si el objeto user tiene algo
            if (user?.uid) {
                console.log(user);
                dispatch(login(user.uid, user.displayName, user.email));
                setIsAuthenticated(true); // si esta logueado
            } else {
                setIsAuthenticated(false); // no esta logueado
            }

            setChecking(false);
        });
    },[dispatch, setChecking]);

    
    //  Si esta en true significa que sigue procesando, cuando ya firebase retorna la informacion cambia  a false y muestra lo que esta abajo
    if (checking) {
        return (<h1>Cargando.....</h1>)
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes 
                        isAuthenticated={ isAuthenticated }
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <PrivateRoutes 
                        isAuthenticated={ isAuthenticated }
                        exact
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
