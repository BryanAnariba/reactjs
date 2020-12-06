import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';// Validacion para props

// con esto protegemos las rutas
export const PrivateRoutes = ({
    isAuthenticated, // Veriricar si esta autenticados
    component: Component, // Componente/Componentes que la usuario quiere renderizar o ver
    ...rest// los demas argumentos como exact path de la rutas del componente a renderizar
}) => {

    // Para poder hacer que al loguearse te redireccione a la ultima seccion o componente que visitaste
    // 1 paso console.log(rest.location.pathname);
    // 2 paso -> almacenamos  en localstorage
    //localStorage.setItem('lastPath', rest.location.pathname);

    
    return (
        <Route { ...rest }
            component = {
                (props) => ( 
                    (isAuthenticated)  // Si esta autenticado
                    ? 
                        <Component {...props} /> // Renderice el componente que desea ver
                    : // Caso contracion que redireccione a login
                        <Redirect to='/auth/login' />
                )
            }
        />
    )
}


PrivateRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};