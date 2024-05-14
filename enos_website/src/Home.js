import {Row, Col, Container, Button, Nav, Navbar} from 'react-bootstrap';
import './scss/Home.scss';

const Home = () => {
    return(
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="">
                    <Nav.Link href="#home" className="nav-link-padding"><Button variant="primary">Home</Button></Nav.Link>
                    <Nav.Link href="#features" className="nav-link-padding"><Button variant="success">Features</Button></Nav.Link>
                    <Nav.Link href="#pricing" className="nav-link-padding"><Button variant="danger">Pricing</Button></Nav.Link>
                </Nav>
            </Navbar>
            <Row>
                <Col>Content goes here...</Col>
            </Row>
        </Container>
    )
}

export default Home;