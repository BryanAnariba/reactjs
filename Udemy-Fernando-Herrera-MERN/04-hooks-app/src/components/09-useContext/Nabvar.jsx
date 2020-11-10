import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from './UserContext';
export const Nabvar = () => {
    const { user, setUser } = useContext(UserContext);
    
    const handleLogOut = () => {
        setUser({});
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand" >Use Context Example</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active"  to="/about" className="nav-link" >About</NavLink >
                        </li>
                        <li className="nav-item">
                                    <NavLink 
                                        exact activeClassName="active"  
                                        to="/login" 
                                        className="nav-link" >
                                            Login
                                        </NavLink >
                                </li>
                        <li className="nav-item">
                                    <NavLink 
                                        exact 
                                        activeClassName="active"  
                                        to="/" 
                                        className="nav-link" 
                                        onClick={ handleLogOut }>
                                            LogOut
                                    </NavLink >
                                </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
