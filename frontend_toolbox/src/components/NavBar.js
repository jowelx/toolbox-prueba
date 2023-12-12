
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
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