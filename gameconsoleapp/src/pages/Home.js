import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";

const Home = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col lg={6} className="mt-4">
                    <Link to="/ps">
                        <Image className="psimage" src="https://localhost:5001/images/ps5.png" fluid />
                    </Link>
                </Col>
                <Col lg={6} className="mt-4">
                    <Link to="/xbox">
                        <Image className="xboximage" src="https://localhost:5001/images/xbox.png" fluid />
                    </Link>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>
    )
}

export default Home;