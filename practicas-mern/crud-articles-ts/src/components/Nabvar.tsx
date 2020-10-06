import React , { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container">
                    <Link className="navbar-brand" to="/">React + PHP</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                            <Link className="nav-link" to="/about-us">About <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/create-user">Create User</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/list-users">List Users</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}
export default Navbar;