import React from 'react'
import { Col,Container,Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const LoginPage = () => {
  return (
    <>
        <Container className="mt-5">
            <Row>
                <Col lg={4} md={6} sm={12}>
                    
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                     
                      <Form.Control type="email" placeholder="Enter email" />
                      
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                       
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary-btn-block" type="submit">
                      Login
                    </Button>
                </Form>

                </Col>
                <Col lg={8} md={6} sm={12}>
                    
                </Col>

            </Row>
        </Container>

    </>
  )
}

export default LoginPage