import { Col, CardGroup, Container } from 'react-bootstrap';
import Item from './Item';

function ItemList(props) {
  return (
    <Container>
      <CardGroup>
        {props.productos.map(producto => {
          return (
            <Col key={producto.id} xs={12} md={6} lg={4} className="p-2">
              <Item producto={producto} viewMode="item" />
            </Col>
          );
        })}
      </CardGroup>
    </Container>
  );
}

export default ItemList;
