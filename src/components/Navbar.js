import { Navbar, Container } from 'react-bootstrap';
import { default as myLogo } from '../assets/logo.svg';
import CartWidget from './CartWidget';

function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
        <Container>
          <span className="fontLogo text-white align-top fs-3">
            <img alt="Lo de Rodo" src={myLogo} width="40" height="40" className="d-inline-block align-top my-0 me-2" />
            LO DE RODO
          </span>
          <span>
            <CartWidget q={0} />
          </span>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
