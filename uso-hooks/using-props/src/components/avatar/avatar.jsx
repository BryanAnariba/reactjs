import React , { Fragment } from 'react';

const Avatar = ({ fotografiaUsuario }) => {
    return ( 
        <Fragment>
            <img src={ fotografiaUsuario }  alt=""/>
        </Fragment>
    );
}
 
export default Avatar;