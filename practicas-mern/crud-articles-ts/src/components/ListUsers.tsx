import React , { Fragment , useEffect , useState } from 'react';
import axios from 'axios';

export interface ListUsersProps {
    listUsers: any;
}
const ListUsers: React.SFC<ListUsersProps>= () => {
    const [ listUsers , setListUsers ] = useState<any>([]);
    const API = 'http://localhost:3500/users';

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async (): Promise<any> => {
        try {
            let users = await axios.get(API);
            let data = await users.data;
            setListUsers(data);
        } catch (error) {
            console.error(error);
        }
    }

    return ( 
        <Fragment>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-6 mx-auto">
                        <table className="table table-hover table-bordered table-dark">
                            <thead>
                                <tr>
                                    <th>ID Usuario</th>
                                    <th>Nombre Usuario</th>
                                    <th>Apellido Usuario</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {
                                    listUsers.map((user: any) => (
                                        <tr key={user.id}>
                                            <td>{ user.id }</td>
                                            <td>{ user.firstName }</td>
                                            <td>{ user.lastName }</td>
                                            <td></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default ListUsers;