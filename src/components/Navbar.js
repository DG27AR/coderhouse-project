import { Navbar, Container } from 'react-bootstrap';
import { default as myLogo } from '../assets/logo.svg';
import CartWidget from './CartWidget';

function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand className="colorLightGrey fontLogo" href="#home">
            <img alt="" src={myLogo} width="30" height="30" className="d-inline-block align-top my-0" />
            <span className="d-inline-block align-top my-0 ms-2 fs-5">LO DE RODO</span>
          </Navbar.Brand>
          <span>
            <CartWidget q={0} />
          </span>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
