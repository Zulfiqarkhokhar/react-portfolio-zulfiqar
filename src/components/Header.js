import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href=""><Link style={{textDecoration: 'none'}} className="text-white" to="/"> Zulfiqar</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><Link style={{textDecoration: 'none'}} className="text-white" to="/allprojects"> Projects</Link></Nav.Link>
                        <Nav.Link href="#features">Reviews</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;