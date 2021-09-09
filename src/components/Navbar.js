import { useState, useEffect } from 'react';
import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import { default as myLogo } from '../assets/oldlogo.svg';
import CartWidget from './CartWidget';
import CategoryWidget from './CategoryWidget';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';

function MyNavbar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    firestore
      .collection('categorys')
      .get()
      .then(resultados => {
        const resultadoFinal = [];
        resultados.forEach(resultado => {
          const id = resultado.id;
          const dataFinal = { id, ...resultado.data() };
          resultadoFinal.push(dataFinal);
          return resultadoFinal;
        });
        setCategories(resultadoFinal);
      });
  }, []);

  /* <Navbar bg="primary" variant="dark" expand="lg" className="sticky-top py-0"> */

  return (
    <Nav>
      <Container className="bg-primary" fluid>
        <Container className="sticky-top text-white">
          <Row className="mt-1 mb-0">
            <Col xs={6}>
              <Navbar.Brand>
                <Link to="/">
                  <img alt="Foodhouse" src={myLogo} width="35rem" height="35rem" className="pb-2 ms-2" />
                </Link>
                {/* <span className="fontLogo text-white align-top navBarFontSize fs-2">FOODHOUSE</span> */}
                <span className="align-center ms-1 fontLogo fs-4">FOODHOUSE</span>
              </Navbar.Brand>
            </Col>
            <Col xs={6} className="text-end pe-4">
              <span className="me-3">
                <CategoryWidget categories={categories} />
              </span>
              <span>
                <CartWidget />
              </span>
            </Col>
          </Row>
        </Container>
      </Container>
    </Nav>
  );
}

/* </Navbar> */

export default MyNavbar;
