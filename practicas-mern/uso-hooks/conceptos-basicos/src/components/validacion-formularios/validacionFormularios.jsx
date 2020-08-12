import React , { useState } from 'react';
import { useForm } from 'react-hook-form';
const ValidacionFormularios = () => {
    const { register , errors ,  handleSubmit , watch} = useForm();

    const [usuarios , setUsuarios]  = useState([]);

    // esto es el onSubmit que ventro del handleSubmit , anexamos al estado inicial del arreglo
    const onSubmit = (data , e) => {
        console.log(data);
        setUsuarios([
            ...usuarios ,
            data
        ]);
        e.target.reset();
    }
    return ( 
        <div className="container">
            <hr/>
            <div className="row">
                <div className="col-lg-5 col-sm-12 mx-auto">
                    <div className="card">
                        <div className="card-header text-white text-center bg-primary">
                            <h3>Usando React Hook Form</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={ handleSubmit(onSubmit) }>
                                <div className="form-group">
                                    <label htmlFor="" className="form-control bg-warning text-white">
                                        Nombre del usuario:
                                    </label>
                                    <input 
                                        type="text" 
                                        name="nombreUsuario" 
                                        className="form-control" 
                                        placeholder="Digite nombres de usuario" 
                                        ref = {
                                            register({
                                                required: { value: true , message: 'El campo nombre es Obligatorio'} ,
                                                minLength: { value: 5 , message: 'Minimo de caracteres 5' } ,
                                                maxLength: { value: 60 , message: 'Maximo de caracteres 60' } ,
                                                pattern: { value: /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/ , message: 'Solo se permiten Caracteres' }
                                            })
                                        }
                                    />
                                    <span className="text-danger text-center text-small d-block mb-2">
                                        { 
                                            // existe un error(si)?.el error es en nombreusuario(si)?.entonces pinta el mensaje de error
                                            errors?.nombreUsuario?.message 
                                        }
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-control bg-warning text-white">
                                        Apellido del usuario:
                                    </label>
                                    <input 
                                        type="text" 
                                        name="apellidoUsuario" 
                                        className="form-control" 
                                        placeholder="Digite apellidos de usuario"
                                        ref = {
                                            register({
                                                required: { value: true , message: 'El campo apellido es Obligatorio' } ,
                                                minLength: { value: 5 , message: 'Minimo de caracteres 5' } ,
                                                maxLength: { value: 60 , message: 'Maximo de caracteres 60' } ,
                                                pattern: { value: /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/ , message: 'Solo se permiten Caracteres' }
                                            })
                                        } 
                                    />
                                    <span className="text-danger text-center text-small d-block mb-2">
                                        { 
                                            // existe un error(si)?.el error es en nombreusuario(si)?.entonces pinta el mensaje de error
                                            errors?.apellidoUsuario?.message 
                                        }
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-control bg-warning text-white">
                                        Fecha de nacimiento:
                                    </label>
                                    <input 
                                        type="date" 
                                        name="fechaNacimientoUsuario" 
                                        className="form-control" 
                                        ref = {
                                            register({
                                                required: { value: true , message: 'El campo fecha es Obligatorio' } 
                                            })
                                        }
                                    />
                                    <span className="text-danger text-center text-small d-block mb-2">
                                        { 
                                            // existe un error(si)?.el error es en nombreusuario(si)?.entonces pinta el mensaje de error
                                            errors?.fechaNacimientoUsuario?.message 
                                        }
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-control bg-warning text-white">
                                        Email del usuario:
                                    </label>
                                    <input 
                                        type="email" 
                                        name="correoUsuario" 
                                        className="form-control" 
                                        placeholder="Digite el correo de usuario" 
                                        ref = {
                                            register({
                                                required: { value: true , message: 'El campo email es Obligatorio' } ,
                                                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i , message: 'Correo no valido' }
                                            })
                                        }
                                    />
                                    <span className="text-danger text-center text-small d-block mb-2">
                                        { 
                                            // existe un error(si)?.el error es en nombreusuario(si)?.entonces pinta el mensaje de error
                                            errors?.correoUsuario?.message 
                                        }
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-control bg-warning text-white">
                                        Clave del usuario:
                                    </label>
                                    <input 
                                        type="password" 
                                        name="passwordUsuario" 
                                        className="form-control" 
                                        placeholder="Digite el Password del usuario" 
                                        ref = {
                                            register({
                                                required: { value: true , message: 'El campo clave es Obligatorio' } ,
                                                pattern: { 
                                                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/ ,
                                                    message: 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.' 
                                                }
                                            })
                                        }
                                    />
                                    <span className="text-danger text-center text-small d-block mb-2">
                                        { 
                                            // existe un error(si)?.el error es en nombreusuario(si)?.entonces pinta el mensaje de error
                                            errors?.passwordUsuario?.message 
                                        }
                                    </span>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-outline-success btn-block">Guardar Registro</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer bg-dark">

                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-sm-12 mx-auto">
                    <table className="table table-bordered table-dark table-hover">
                        <thead>
                            <tr>
                                <th>Nombre Usuario</th>
                                <th>Apellido Usuario</th>
                                <th>Fecha Nacimiento Usuario</th>
                                <th>Email Usuario</th>
                                <th>Password Usuaro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map((usuario) =>
                                    <tr>
                                        <td>{ usuario.nombreUsuario }</td>
                                        <td>{ usuario.apellidoUsuario }</td>
                                        <td>{ usuario.fechaNacimientoUsuario }</td>
                                        <td>{ usuario.correoUsuario }</td>
                                        <td>{ usuario.passwordUsuario }</td>
                                    </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default ValidacionFormularios;