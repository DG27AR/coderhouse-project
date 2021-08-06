import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ItemDetail from './ItemDetail';
import p from './productos';

function ItemDetailContainer(props) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

    promise.then(productos => setProductos(p));
  }, []);

  console.log(productos);

  return (
    <Container>
      <ItemDetail productos={productos} productosId={5} />
    </Container>
  );
}

export default ItemDetailContainer;
