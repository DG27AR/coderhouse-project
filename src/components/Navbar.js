import { Navbar } from 'react-bootstrap';
import { default as myLogo } from '../assets/logo.svg';
import CartWidget from './CartWidget';

function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top py-0">
        <Navbar.Brand>
          <img alt="My Fake Store" src={myLogo} width="35" height="35" className="d-inline-block align-top mx-2" />
          <span className="fontLogo text-white align-top fs-2">MY STORE</span>
        </Navbar.Brand>
        <span className="me-2">
          <CartWidget q={0} />
        </span>
      </Navbar>
    </>
  );
}

export default MyNavbar;
