import React , { Fragment , useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

type FormElement = React.FormEvent<HTMLFormElement>;

const CreateUser = () => {
    const history = useHistory();
    const [ firstName , setFirstName ] = useState('');
    const [ lastName , setLastName ] = useState('');
    const API = 'http://localhost:3500/users';


    const saveUser = async (e: FormElement): Promise<any> => {
        
        e.preventDefault();
        //console.log(firstName , lastName);
        let newUser = {
            firstName: firstName ,
            lastName: lastName
        };
        try {
            let res = await axios.post(API , newUser);
            console.log(res);   
            history.push('/list-users');
        } catch (error) {
            console.error(error);
        }
        
    }
    return ( 
        <Fragment>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-6 mx-auto">
                        <div className="card">
                            <div className="card-header bg-dark text-center text-white">
                                <h2>New User</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={ saveUser }>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="firstName" 
                                            id="firstName"
                                            className="form-control"
                                            placeholder="Digite Nombre Usuario"
                                            onChange={ (e) => setFirstName(e.target.value) }
                                            value={firstName}/>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="firstName" 
                                            id="firstName"
                                            className="form-control"
                                            placeholder="Digite Apellido Usuario"
                                            onChange={ (e) => setLastName(e.target.value) }
                                            value={lastName}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-outline-success btn-block" value="Save User"/>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer bg-warning">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default CreateUser;
