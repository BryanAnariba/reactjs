import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';// Validacion para props

// con esto protegemos las rutas
export const PublicRoutes = ({
    isAuthenticated, // Veriricar si esta autenticados
    component: Component, // Componente/Componentes que la usuario quiere renderizar o ver
    ...rest// los demas argumentos como exact path de la rutas del componente a renderizar
}) => {


    return (
        <Route { ...rest }
            component = {
                (props) => ( 
                    (!isAuthenticated)  // Si no esta autenticado
                    
                    ? 
                        <Component {...props} /> // Renderice el componente login

                    : // OJO SI YO ESTOY AUTENTICADO Y QUIERO IRME AL LOGIN SIN HACER LOGOUT, NO ME DEJARA HACERLO, ME REDIRECCIONARA AL DASHBOARD
                        <Redirect to='/' />
                )
            }
        />
    )
}


PublicRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};