import { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { default as myLogo } from '../assets/logo.svg';
import CartWidget from './CartWidget';
import InfoWidget from './InfoWidget';
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
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top py-0">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              alt="My Fake Store"
              src={myLogo}
              width="35rem"
              height="35rem"
              className="d-inline-block align-top mx-2 navBarFontSize"
            />
          </Link>
          <span className="fontLogo text-white align-top navBarFontSize">MY STORE</span>
        </Navbar.Brand>
        <span className="me-2">
          <CartWidget />
          <CategoryWidget categories={categories} />
          <InfoWidget />
        </span>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
