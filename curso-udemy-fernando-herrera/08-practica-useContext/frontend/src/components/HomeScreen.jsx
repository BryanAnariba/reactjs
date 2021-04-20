import React, { useContext } from 'react'
import { UserContext } from '../UserContext';

import { Container, Row, Col } from 'react-bootstrap';

export const HomeScreen = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <>
            <Container>
                <Row className="mt-5 mx-auto">
                    <Col xl={ 6 } sm={ 12 }>
                        <div>
                            <h2>
                                Home Screen
                            </h2>
                            <strong>Bienvenido</strong>
                            <pre>
                                {  
                                    JSON.stringify( user, null, 3 )
                                }
                            </pre>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
