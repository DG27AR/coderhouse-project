import React, { useContext, useEffect, useState } from 'react';
import { Container, Col, Card, CardGroup, Button, Row } from 'react-bootstrap';
import { FaArrowCircleRight, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Context from '../contexts/Context';
import CartItem from './CartItem';
import { firestore } from '../firebase';

const Cart = () => {
  let context = useContext(Context);
  let [showOrder, setShowOrder] = useState(0);

  useEffect(() => {
    if (showOrder) {
      console.log(`El numero de orden es: ${showOrder}`);
      context.clear();
    }
  }, [showOrder]);

  function handleBuy(cart) {
    const buyerData = { name: 'Buyer', mail: 'buyer@buyer', phone: '000000000' };
    const total = context.totalPrice;
    const date = new Date();

    firestore
      .collection('orders')
      .add({ buyerData, cart, date, total })
      .then(res => setShowOrder(res.id));
  }

  if (context.totalQ) {
    return (
      <Container className="mt-2">
        <Row>
          <Col xs={12} xl={4}>
            <Card className="rounded-0 border border-3 border-primary shadow p-2 mt-2 mx-2 pb-2">
              <Card.Text className="fw-bold text-start ms-2 pt-1 h6">1. ORDER CONFIRMATION</Card.Text>
            </Card>
          </Col>
          <Col xs={12} xl={4}>
            <Card className="rounded-0 shadow p-2 mt-2 mx-2 pb-2 disabled-custom">
              <Card.Text className="fw-bold text-start ms-2 pt-1 h6">
                <small>2. YOUR INFO</small>
              </Card.Text>
            </Card>
          </Col>
          <Col xs={12} xl={4}>
            <Card className="rounded-0 shadow p-2 mb-1 mt-2 mx-2 pb-2 disabled-custom">
              <Card.Text className="fw-bold text-start ms-2 pt-1 h6">
                <small>3. PAYMENT METHOD</small>
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <Col className="fs-6 text-end me-2 mb-2">
          <span className="fs-6 text-end pe-1">
            <Button
              className="pb-1 pt-0 pe-1 ps-1 mt-1 me-0 rounded-0"
              size="sm"
              variant="outline-primary"
              onClick={() => context.clear()}
            >
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
                <CartItem producto={item} />
              </Col>
            );
          })}
          <Col className="p-2">
            <Card className="h-100 rounded-0 border-2 border-secondary shadow">
              <Card.Title className="fontTitle ms-2 mt-2 fs-3">TOTAL ORDER</Card.Title>
              <Card.Body>
                <Card.Text className="fontTitle fs-4">{context.totalPrice}</Card.Text>
                <Card.Text>{`${context.totalQ} units`}</Card.Text>
              </Card.Body>
              <Card.Footer className="fs-5 pt-0 border-0 rounded-0 bg-secondary">
                <Row className="mx-1 my-2 pb-2 bg-cart-card-footer shadow px-2 pt-1">
                  <span className="fs-6 text-end px-0">
                    <Button
                      className="pb-1 pt-0 pe-1 ps-0 mt-1 me-0 rounded-pill"
                      size="sm"
                      variant="success"
                      onClick={() => handleBuy(context.items)}
                    >
                      <span className="ms-2 me-1">
                        My order is Ok, take me to the next step
                        <FaArrowCircleRight className="ms-1" />
                      </span>
                    </Button>
                  </span>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </CardGroup>
      </Container>
    );
  } else if (!context.totalQ && showOrder) {
    return (
      <Container className="text-center mt-5">
        <h2 className="h1 fontTitle mb-4">{`YOUR ORDER: ${showOrder}`}</h2>
        <Link to="/">
          <Button variant="outline-primary">Take me to buy!</Button>
        </Link>
      </Container>
    );
  } else {
    return (
      <Container className="text-center mt-5">
        <h2 className="h1 fontTitle mb-4">YOUR CART IS EMPTY</h2>
        <Link to="/">
          <Button variant="outline-primary">Take me to buy!</Button>
        </Link>
      </Container>
    );
  }
};

export default Cart;
