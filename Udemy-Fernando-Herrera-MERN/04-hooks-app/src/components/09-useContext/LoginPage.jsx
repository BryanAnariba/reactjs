import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext';
export const LoginPage = () => {
    const { setUser } = useContext(UserContext);

    // Tarea 
    // 1. obtener la referencia al userConctext
    // 2. setUser 

    const [credential, setCredentials] = useState({
        id: '',
        email: '',
        password: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        // Actualizamos el userContext
        setUser(credential);
    }

    const handleInputChange = (e) => {
        setCredentials({
            ...credential,
            [ e.target.name ]: e.target.value
        });
    }
    return (
        <div className="container">
            <div className="row"></div>
            <div className="col-lx-12 text center">
                <h1>Login Page</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="card">
                    <div className="card-header text-center text-white bg-dark">
                        <h3>Digita Credenciales</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={ handleSubmit }>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="id"
                                    onChange = { handleInputChange }
                                    value={ credential.id }
                                    placeholder="id"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange= { handleInputChange }
                                    value={ credential.email }
                                    placeholder="email"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    onChange= { handleInputChange }
                                    value={ credential.password }
                                    placeholder="password"
                                />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Iniciar Sesion" className="btn btn-success"/>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer bg-warning">

                    </div>
                </div>
            </div>
            
            <hr/>
        </div>
    )
}
