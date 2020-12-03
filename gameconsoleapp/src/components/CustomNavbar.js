import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const CustomNavbar = () => {
    return (
        <NavbarStyled collapseOnSelect expand="lg">
            <NavbarToggleStyled bg="light" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-center">
                <NavStyled>
                    <Nav.Link style={{color: "#ffff"}} as={Link} to="/">Hjem</Nav.Link>
                    <Nav.Link style={{color: "#ffff"}} as={Link} to="/ps">PS5</Nav.Link>
                    <Nav.Link style={{color: "#ffff"}} as={Link} to="/xbox">Xbox</Nav.Link>
                    <Nav.Link style={{color: "#ffff"}} as={Link} to="/allgames">Alle spill</Nav.Link>
                    <NavDropdown title="Admin panel">
                        <NavDropdown.Item as={Link} to="/add-game">Legg til</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/edit">Endre</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/delete-game">Slett</NavDropdown.Item>
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