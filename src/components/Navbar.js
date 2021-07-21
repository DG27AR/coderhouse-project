import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaSignInAlt } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';

function MyNavbar() {
  return (
    <Navbar bg="mediumblue" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <span className="fontCursive colorLightGrey h2">
            <SiCodechef className="me-1" /> Lo de Rodo
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <FaSignInAlt className="me-1" />
              Ingresar
            </Nav.Link>
            <hr class="dropdown-divider colorLightGrey"></hr>
            <Nav.Link href="#home">
              <FaHome className="me-1" />
              Inicio
            </Nav.Link>
            <Nav.Link href="#features">Promociones</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
