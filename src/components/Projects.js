import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TrackingApp from "../assets/images/mobile-time-tracking.png"

const projects=["Tracking App","Ecommerce","Notebook App","Calender","ChiChat App","Digital Gaurdian App"];
const Project = () => {
    return (
        <>
            <h1 className="d-flex align-items-center justify-content-center">Projects</h1>
        <Container className='py-5'>
            <Row xs={1} md={2} className="g-4">
                {projects.map((_, idx) => (
                    <Col key={idx} className="col-lg-4 col-md-6 col-sm-12">
                        <Card>
                            <Card.Img variant="top" src={TrackingApp} />
                            <Card.Body>
                                <Card.Title>{_}</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    )
}

export default Project