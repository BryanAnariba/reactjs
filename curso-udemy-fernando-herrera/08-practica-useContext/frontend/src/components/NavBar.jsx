import React, { useContext } from 'react';

import {
    Navbar,
    Nav,
    Container,
    Button
} from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

export const NavBar = () => {
    const { setUser } = useContext(UserContext);

    const logOut = () => {
        setUser({});
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/" className="navbar-brand">Practica Use Context</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="ml-auto mr-auto">
                        <Link className="nav-link" to="/about">About</Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Link className="btn btn-info mr-4" to="/login">Login</Link>
                        <Button variant="danger" onClick={ logOut }>LogOut</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
