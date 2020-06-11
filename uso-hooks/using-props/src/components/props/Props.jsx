import React , { useState } from 'react';

const Props = (props) => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-lg 12">
                    <div className="card">
                        <div className="card-header bg-warning text-center text white">
                            <h3>Usando Props para pasar parametros entre componentes</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="" className="text-center text-white bg-dark">
                                    Bienvenido { props.nombreUsuario } , tu edad es de { props.edadUsuario }
                                </label>
                            </div>
                        </div>
                        <div className="card-footer bg-dark">

                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default Props;