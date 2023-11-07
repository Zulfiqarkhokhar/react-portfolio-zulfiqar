import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from "../assets/images/profile.png"

function HeroSection() {
    return (
        <Container>
            <Row>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <h1>Zulfiqar Here!</h1>
                    <h4>I am Spring Boot Developer</h4>
                    <div className="d-flex flex-row">
                    <button className="btn bg-success">Hire Me!</button>
                    <button className="btn btn-outline-success ms-3">More Info</button>
                    </div>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <img src={profile} alt="profile"/>
                </Col>
            </Row>
        </Container>
    );
}

export default HeroSection;