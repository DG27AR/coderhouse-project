import React, { useContext } from 'react';
import { Container, Col, Card, CardGroup, Button } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import Context from '../contexts/Context';
import Item from './Item';

const Cart = () => {
  let context = useContext(Context);

  return (
    <Container className="mt-2">
      <Card className="rounded-0 shadow p-2 mb-1 mt-3 mx-2 pb-2">
        <Card.Text className="fw-bold text-start ms-2 pt-1 h6">1. CONFIRM YOUR CART CONTENT</Card.Text>
      </Card>
      <Col className="fs-6 text-end me-2 mb-2">
        <span className="fs-6 text-end pe-1">
          <Button className="pb-1 pt-0 pe-1 ps-1 mt-1 me-0 rounded-0" size="sm" variant="outline-primary">
            <small>
              <FaTrashAlt className="me-1" />
              Empty Cart
            </small>
          </Button>
        </span>
      </Col>
      <CardGroup>
        {context.items.map(item => {
          return (
            <Col key={item.id} xs={12} md={6} lg={4} className="p-2">
              <Item producto={item} />
            </Col>
          );
        })}
      </CardGroup>
    </Container>
  );
};

export default Cart;

// <Card className="rounded-0 mt-2" key={item.id}>
//   <Row>
//     <Col xs={6} className="ms-2 bg-dark text-light">
//       {`${item.title} (x${item.q})`}
//     </Col>
//     <Col>{`US$${item.price * item.q}`}</Col>
//     <Col className="text-end me-2">
//       <FaTrashAlt />
//     </Col>
//   </Row>
// </Card>
