import React , { Fragment , useState , useEffect } from 'react';

const Peticion = () => {
    // Arreglo Vacio
    const [ listUsers, setUsers] = useState([]);
    const [ isFetching , setIsFetching ] = useState(true);
    
    // Funcion que obtiene datos
    const getData = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await res.json();
        setUsers(users);
        setIsFetching(false);
        console.log(users);
    }

    useEffect(() => {
        getData();
    } , []);// El [] evita que se procesen un bucle infinito de peticiones

    return ( 
        <Fragment>
            <h1>Solicitud Peticion o Peticion de datos a jsonplaceholder</h1>
            { isFetching && <h1>...Cargando data</h1> }
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUsers.map(user => (
                            <tr key={ user.id }>
                                <td>{ user.name }</td>
                                <td>{ user.username }</td>
                                <td>{ user.email }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </Fragment>
    );
}
export default Peticion;