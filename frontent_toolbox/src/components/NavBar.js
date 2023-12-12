
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavbarCustom = () => {
    return (
        <Navbar expand="lg" className="navbar" >
            <Container>
                <Navbar.Brand href="#home" className="textNavbar">Toobox React test API</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default NavbarCustom;