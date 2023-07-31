import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const NotFound = () => {
  return (
    <Container style={{backgorundColor: 'red'}} >
        <Row >
            <Col md={6}>
                <h1>404</h1>
                <p>Page not found</p>
            </Col>
        </Row>
    </Container>
  )
}
