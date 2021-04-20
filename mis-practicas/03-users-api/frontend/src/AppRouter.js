import React from 'react';

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';

import { LandingPage } from './components/pages/LandingPage';
import { NavbarComponent } from './components/Navbar/NavbarComponent';
import { NotFound } from './components/NotFound/NotFound';
import { CreatePost } from './components/Posts/CreatePost';
import { ListsPost } from './components/Posts/ListsPost';
import { EditPost } from './components/Posts/EditPost';

export const AppRouter = () => {
    return (
            <Router>
                <NavbarComponent/>
                <Container>
                    <Switch>
                        <Route path="/" exact={ true } component={ LandingPage } />
                        <Route path="/posts" exact={ true } component={ ListsPost } />
                        <Route path="/post/create" exact={ true } component={ CreatePost } />
                        <Route path="/post/edit/:postId" exact={ true } component={ EditPost } />
                        <Route component={ NotFound } />
                    </Switch>
                </Container>
            </Router>
    )
}
