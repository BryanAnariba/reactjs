import React , { useState } from 'react';
import Avatar from '../avatar/avatar';

//  Seria genial para un nabvar que al logearse muestre el prop de bienvenida del usuario logueado
const ComentariosPros = ({ usuario }) => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="media">
                        <Avatar fotografiaUsuario={ usuario.fotografiaUsuario }/>
                        <div className="media-body">
                            <h5 className="ml-2">{ usuario.nombreUsuario }</h5>
                                <p className="ml-2">{ usuario.comentarioUsuario }</p>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    );
}
export default ComentariosPros;