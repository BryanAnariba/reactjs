import React, { useContext } from 'react'

import { UserContext } from '../UserContext';

import { Button, Container, Row, Col } from 'react-bootstrap';

export const LoginScreen = () => {
    const { setUser } = useContext(UserContext);

    const login = () => {
        setUser({
            id: new Date().getTime(),
            name:'Bryan Anariba',
            emailUser: 'saariel115@gmail.com'
        });
    }
    return (
        <Container>
            <Row className="mt-5 mx-auto">
                <Col xl={ 12 } sm={ 12 }>
                    <h2>
                        Login Screen
                    </h2>
                    <Button variant="success" onClick={
                        login
                    }>
                        Login
                    </Button>
                    <hr/>
                </Col>
            </Row>
        </Container>
    )
}
