import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ItemDetail from './ItemDetail';
import p from './productos';

function ItemDetailContainer(props) {
  const [producto, setproducto] = useState([]);

  const idProducto = 5;

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(producto);
      }, 2000);
    });

    promise.then(producto => setproducto(p[idProducto]));
  }, []);

  console.log('ItemDetailContainer:');
  console.log(producto);
  console.log(producto[idProducto]);

  return (
    <Container>
      <ItemDetail producto={producto} />
    </Container>
  );
}

export default ItemDetailContainer;
