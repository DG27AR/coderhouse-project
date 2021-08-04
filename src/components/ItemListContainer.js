import { useState, useEffect } from 'react';
import { Container, Alert, Row } from 'react-bootstrap';
import ItemList from './ItemList';
import p from './productos';

function ItemListContainer(itemListContainer) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

    promise.then(productos => setProductos(p));
  }, []);

  return (
    <Container>
      <Alert variant="warning">Nuestro horario de hoy es de {itemListContainer.greeting}</Alert>
      <Row>
        <ItemList productos={productos} />
      </Row>
    </Container>
  );
}

export default ItemListContainer;
