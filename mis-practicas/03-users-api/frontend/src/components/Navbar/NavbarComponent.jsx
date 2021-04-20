import React from 'react';

import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';

import { Link } from 'react-router-dom';
export const NavbarComponent = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/" className="navbar-brand">React + Laravel</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/posts">Post</Link>
                        <Link className="nav-link" to="/post/create">New Post</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
