import React, { useContext, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { FaArrowCircleRight } from 'react-icons/fa';
import Context from '../contexts/Context';
import { firestore } from '../firebase';

const CartForm = props => {
  let context = useContext(Context);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const saveName = e => {
    const input = e.target;
    const valor = input.value;
    setName(valor);
  };

  const savePhone = e => {
    const input = e.target;
    const valor = input.value;
    setPhone(valor);
  };

  const saveEmail = e => {
    const input = e.target;
    const valor = input.value;
    setEmail(valor);
  };

  const handleBuy = () => {
    if (validation()) {
      setError(false);
      const buyer = { name: name, mail: email, phone: phone };
      const total = context.totalPrice;
      const date = new Date();
      const cart = context.items;
      firestore
        .collection('orders')
        .add({ buyer, cart, date, total })
        .then(res => props.setShowOrder(res.id));
    } else {
      setError(true);
    }
  };

  const validation = () => {
    if (name.trim().length && phone.trim().length && email.trim().length) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Row>
      <Col className="p-2" xs={12}>
        <Card className="rounded-0shadow">
          <Card.Title className="fontTitle ps-3 py-1 fs-3 bg-primary text-white">YOUR DATA</Card.Title>
          <Card.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe" onChange={saveName} />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="11 1111 1111" onChange={savePhone} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mail</Form.Label>
              <Form.Control type="text" placeholder="mail@mail.com" onChange={saveEmail} />
            </Form.Group>

            <Row>
              <Col xs={6}>
                {error ? (
                  <Form.Text className="fw-bold text-primary">Please, complete all the fields.</Form.Text>
                ) : null}
              </Col>
              <Col xs={6} className="text-end">
                <Button
                  className="pb-1 pt-0 pe-1 ps-0 mt-1 me-0 rounded-pill"
                  size="lg"
                  variant="success"
                  onClick={() => handleBuy()}
                >
                  <span className="ms-3 me-2 fw-bold fs-6">
                    Buy buy buy!
                    <FaArrowCircleRight className="ms-2" />
                  </span>
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CartForm;
