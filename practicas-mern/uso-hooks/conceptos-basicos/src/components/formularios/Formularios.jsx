import React , { useState } from 'react';

const Formularios = () => {
    const [data , setData] = useState({
        nombre: '' ,
        apellido: '' ,
        fechaNacimiento: ''
    });

    // El evento onChange estara pendiente de los cambios que le den a un input
    const procesarInformacion = (event) => {
        //console.log(event.target.value);
        setData({
            ...data , // primeramente copia de data por medio de operador de propagacion
            [event.target.name]: event.target.value // esto es como el binding de angular, ya que relaciona inputs con su nombre en el json
        })
    }
    

    // Por ultimo aqui es donde se procesa la informacion para guardar datos, sea con PHP Nodejs Java etc
    const guardarInformacion = (event) => {
        event.preventDefault();
        console.log(data);
    }

    return ( 
        <div className="container">
            <hr/>
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <div className="card">
                        <div className="card-header bg-primary text-center text-white">
                            <h3>Formulario Basico</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={ guardarInformacion }>
                                <div className="form-group">
                                    <label htmlFor="nombre" className="form-control bg-dark text-white">Digite Nombres Persona:</label>
                                    <input 
                                        type="text" 
                                        name="nombre" 
                                        id="nombre" 
                                        className="form-control" 
                                        placeholder="Digite nombre" 
                                        onChange= { procesarInformacion } 
                                        autoFocus/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="apellido" className="form-control bg-dark text-white">Digite Fecha Apellido:</label>
                                    <input 
                                        type="text" 
                                        name="apellido" 
                                        id="apellido"
                                        className="form-control" 
                                        placeholder="Digite apellido"
                                        onChange= { procesarInformacion } />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date" 
                                    className="form-control bg-dark text-white">Digite Fecha Nacimiento:</label>
                                    <input 
                                        type="date" 
                                        name="fechaNacimiento" 
                                        id="date" className="form-control"
                                        onChange= { procesarInformacion } />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="submit" value="Guardar Informacion" className="btn btn-outline-primary btn-block"/>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer bg-dark">

                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mx-auto">
                    <div className="card">
                        <div className="card-header bg-dark text-center text-white">
                            <p>
                                <b>
                                    Data a guardar Por medio del binding => 
                                </b>
                                { data.nombre } , { data.apellido }, { data.fechaNacimiento }
                            </p>
                        </div>
                        <div className="card-body">
                            <table className="table-bordered table table-dark">
                                <thead>
                                    <tr>
                                        <th>Nombre Persona</th>
                                        <th>Apellido Persona</th>
                                        <th>Fecha Nacimiento Persona</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer bg-dark">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Formularios;