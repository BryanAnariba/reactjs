import React  , { useState , useEffect } from 'react';

const User = () => {
    const [updating , setUpdating] = useState(false);
    const [userIdenfied , setUserIdentified] = useState('');
    const [data , setData] = useState({
        firstName: '' ,
        lastName: '' ,
        date: '' ,
        emailUser: '' ,
        roleUser: '' ,
        urlImage: ''
    });
    const [users , setUsers] = useState([]); 

    // Como el constructor o ngOnInit de angular
    useEffect(() => {
        getUsers()
    } , []);

    const handleChange = (event) => {
        setData({
            ...data , // primeramente copia de data por medio de operador de propagacion
            [event.target.name]: event.target.value // esto es como el binding de angular, ya que relaciona inputs con su nombre en el json
        })
    }

    // --------------------------------------> OPERACIONES REST API BASICAS

    // Insertar un usuario
    const saveUser = async (e) => {
        e.preventDefault();

        if (!updating) {
            console.log(data);
            let insertUser = await fetch('http://localhost:3500/users' , {
                method: 'POST' ,
                headers: {
                    'Content-Type': 'application/json'
                } ,
                body: JSON.stringify(data)
            });
            let successToJson = await insertUser.json();
            console.log(successToJson);
        } else {
            let updateUser = await fetch(`http://localhost:3500/users/${ userIdenfied }` , {
                method: 'PUT' ,
                headers: {
                    'Content-Type': 'application/json'
                } ,
                body: JSON.stringify(data)
            });
            let resToJson = await updateUser.json();
            console.log(resToJson);

            // Despues de actualizar volvemos a cambiar los estado en false y el id en vacio
            setUpdating(false);
            setUserIdentified('');
        }
        getUsers();
        setData({
            firstName: '' ,
            lastName: '' ,
            date: '' ,
            emailUser: '' ,
            roleUser: '' ,
            urlImage: ''
        });
    }

    // Obtener Usuarios 
    const getUsers = async () => {
        let usersList = await fetch('http://localhost:3500/users' , { method: 'GET' });
        let usersToJson = await usersList.json();
        console.log(usersToJson);
        setUsers(usersToJson);
    }

    const getUser = async (id) => {
        // Cambiamos el estado del updating a true para cambiar el boton de guardar a modificar
        setUpdating(true);
        
        // Tambien asignamos el estado identified el valor de id para poder actualizar
        setUserIdentified(id);

        console.log(id);
        let user = await fetch(`http://localhost:3500/users/${ id }` , { method: 'GET' })
        let userToJson = await user.json();
        let selectedUser = {
            firstName: userToJson.firstName ,
            lastName: userToJson.lastName ,
            date: userToJson.date, 
            emailUser: userToJson.emailUser , 
            roleUser: userToJson.roleUser ,
            urlImage: userToJson.urlImage
        }
        setData(selectedUser);
        console.log('Data recogida -> ' , selectedUser);
    }


    const deleteUser = async (id) => { 
        console.log(id);
        let res = await fetch(`http://localhost:3500/users/${ id }` , { method: 'DELETE' });
        let json = await res.json();
        console.log(json);
        getUsers();
    }


    return ( 
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div className="card">
                        <div className="card-header text-center text-white bg-success">
                            <h3>Formulario</h3>
                        </div>
                        <div className = "card-body">
                            <form onSubmit = { saveUser }>
                                <div className = "form-group">
                                    <input 
                                        type = "text"
                                        className = "form-control"
                                        name = "firstName"
                                        onChange = { handleChange }
                                        value = { data.firstName }
                                        placeholder = "Write a first name"/>
                                </div>
                                <div className = "form-group">
                                    <input 
                                        type = "text"
                                        className = "form-control"
                                        name = "lastName"
                                        onChange = { handleChange }
                                        value = { data.lastName }
                                        placeholder="Write a last name"/>
                                </div>
                                <div className = "form-group">
                                    <input 
                                        type="date"
                                        className="form-control"
                                        name="date"
                                        onChange = { handleChange }
                                        value = { data.date }
                                    />
                                </div>
                                <div className = "form-group">
                                    <select
                                        className= "form-control"
                                        name = "roleUser"
                                        onChange = { handleChange }
                                        value = { data.roleUser }
                                    >
                                        <option value="">Seleccione cargo</option>
                                        <option value="Administrador">Administrador</option>
                                        <option value="Normal">Empleado</option>
                                    </select>
                                </div>
                                <div className = "form-group">
                                    <input 
                                        type = "email"
                                        className="form-control"
                                        name = "emailUser"
                                        onChange={ handleChange }
                                        value = { data.emailUser }
                                        placeholder="Digite el correo electronico"/>
                                </div>
                                <div className="form-group">
                                    <input 
                                        type = "text"
                                        className = "form-control"
                                        name = "urlImage"
                                        onChange = { handleChange }
                                        value = { data.urlImage }
                                        placeholder="Write the url image"/>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success btn-block"> 
                                        { 
                                            updating ? 'Update User' : 'Save User' 
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer bg-dark">

                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <table className="table table-hover table-dark table-bordered">
                        <thead>
                            <tr>
                                <th>Nombres </th>
                                <th>Apellidos </th>
                                <th>Fecha Nacimiento </th>
                                <th>Correo usuario </th>
                                <th>Cargo Usuario </th>
                                <th>Avatar </th>
                                <th>Editar </th>
                                <th>Eliminar </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((usuario) => (
                                    <tr key = { usuario._id }>
                                        <td>{ usuario.firstName }</td>
                                        <td>{ usuario.lastName }</td>
                                        <td>{ usuario.date }</td>
                                        <td>{ usuario.emailUser }</td>
                                        <td>{ usuario.roleUser }</td>
                                        <td><img src = { usuario.urlImage } width="50" alt=""/></td>
                                        <td><button type="button" onClick={ () => getUser(usuario._id) } className="btn btn-outline-primary">Editar</button></td>
                                        <td><button type="button" onClick={ () => deleteUser(usuario._id) } className="btn btn-outline-danger">Eliminar</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default User;