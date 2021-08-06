import { Navbar, Container } from 'react-bootstrap';
import { default as myLogo } from '../assets/logo.svg';
import CartWidget from './CartWidget';
import InfoWidget from './InfoWidget';

function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top py-0">
        <Container>
          <Navbar.Brand>
            <img
              alt="My Fake Store"
              src={myLogo}
              width="35rem"
              height="35rem"
              className="d-inline-block align-top mx-2 navBarFontSize"
            />
            <span className="fontLogo text-white align-top navBarFontSize">MY STORE</span>
          </Navbar.Brand>
          <span className="me-2">
            <CartWidget q={0} />
            <InfoWidget />
          </span>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
