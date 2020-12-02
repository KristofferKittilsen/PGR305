import { Link } from "react-router-dom";
import styled from 'styled-components';
const { Col, Navbar, Nav, NavDropdown } = require("react-bootstrap")

const CustomNavbar = () => {
    return (
        <NavbarStyled collapseOnSelect expand="lg">
            <NavbarToggleStyled bg="light" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-center">
                <NavStyled>
                    <Nav.Link style={{color: "#ffff"}} as={Link} to="/">Home</Nav.Link>
                    <Nav.Link style={{color: "#ffff"}} as={Link} to="/ps">PS5</Nav.Link>
                    <Nav.Link style={{color: "#ffff"}} as={Link} to="/xbox">Xbox</Nav.Link>
                    <NavDropdown title="Admin panel">
                        <NavDropdown.Item as={Link} to="/add-game">Add</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/edit">Edit</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/delete-game">Delete</NavDropdown.Item>
                    </NavDropdown>
                </NavStyled>
            </Navbar.Collapse>
        </NavbarStyled>
    )
}

const NavbarStyled = styled(Navbar)`
    
`;

const NavStyled = styled(Nav)`
    font-size: 1.5rem;
`;

const NavbarToggleStyled = styled(Navbar.Toggle)`
    background-color: #ffff;
`;

export default CustomNavbar;