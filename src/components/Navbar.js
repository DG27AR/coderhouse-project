import { Navbar, Container } from 'react-bootstrap';
import { BiCart } from 'react-icons/bi';
import { default as myLogo } from '../assets/logo.svg';

function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="colorLightGrey fontCursive fs-3" href="#home">
            <img alt="" src={myLogo} width="30" height="30" className="d-inline-block align-top me-1" /> LO DE RODO
          </Navbar.Brand>
          <BiCart className="colorLightGrey fs-3" />
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
