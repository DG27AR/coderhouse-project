import { useState, useEffect } from 'react';
import { Container, Alert, Row } from 'react-bootstrap';
import ItemList from './ItemList';
import p from './productos';

function ItemListContainer(props) {
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
      <Alert className="mt-1 p-1 text-center" variant="warning">
        Are you sure to want to buy here??
      </Alert>
      <Row>
        <ItemList productos={productos} />
      </Row>
    </Container>
  );
}

export default ItemListContainer;
