import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoutes = ({ component: Component, ...rest, auth = true}) => {
    return (
        <Route
            render = {
                props => {
                    auth 
                    ?
                        <Component { ...props } />
                    :
                        <Redirect to="/login" />
                }
            }
        >

        </Route>
    )
}
