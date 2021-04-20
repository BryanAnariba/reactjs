import React from 'react';

import {    
    Alert,
    Container,
    Row,
    Col
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col xl={ 6 } lg={ 6 } md={ 6 } sm={ 12 } className="mx-auto">
                        <Alert variant="danger">
                            <strong>
                                404 - Not Found 
                            </strong>           
                        </Alert>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xl={ 6 } lg={ 6 } md={ 6 } sm={ 12 } className="mx-auto">
                        <Link to="/" className="btn btn-block btn-outline-info">
                            Return to Landing Page
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
