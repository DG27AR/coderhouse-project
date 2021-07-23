import { Navbar, Container, Badge, Row, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { default as myLogo } from '../assets/logo.svg';

function MyNavbar() {
  return (
    <>
      <Row>
        <Navbar bg="dark" variant="dark" expand="lg" className="sticky-nav">
          <Container>
            <Navbar.Brand className="colorLightGrey fontCursive" href="#home">
              <img alt="" src={myLogo} width="30" height="30" className="d-inline-block align-top my-0" />
              <span className="d-inline-block align-top my-0 ms-2">LO DE RODO</span>
            </Navbar.Brand>
            <span>
              <FaShoppingCart className="colorLightGrey fs-5 mx-1" width="30" height="30" />
              <Badge className="bgYellow text-dark rounder p-1" pill>
                0
              </Badge>
            </span>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Container>
          <Navbar variant="secondary" bg="secondary"></Navbar>
        </Container>
      </Row>
      <Form className="d-flex my-1 mx-4">
        <FormControl type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
        <Button variant="dark" className="p-2">
          <FaSearch />
        </Button>
      </Form>
    </>
  );
}

export default MyNavbar;
