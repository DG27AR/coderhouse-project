import React, { useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { FaPlus, FaMinus, FaCartPlus } from 'react-icons/fa';

const ItemCount = props => {
  const [contador, setContador] = useState(props.initial);

  const sumar = function sumar(numero, valor) {
    if (numero > 0 && hayStock(numero, props.stock)) {
      numero = numero + valor;
    }

    return numero;
  };

  const restar = function restar(numero, valor) {
    if (numero > 1) {
      numero = numero - valor;
    }

    return numero;
  };

  const hayStock = function hayStock(numero, stock) {
    if (numero < stock) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Card className="mb-0 py-0 border-0">
      <Container className="p-0">
        <Row className="border border-dark mx-0 bg-dark">
          <Col xs={4} className="text-start">
            <Button className="p-0 border-0" variant="dark" size="sm" onClick={() => setContador(restar(contador, 1))}>
              <FaMinus />
            </Button>
          </Col>
          <Col xs={4} className="text-center text-light fs-6 mt-1">
            {contador}
          </Col>
          <Col xs={4} className="text-end">
            <Button className="p-0 border-0" variant="dark" size="sm" onClick={() => setContador(sumar(contador, 1))}>
              <FaPlus />
            </Button>
          </Col>
        </Row>
        <Row className="my-0 mx-0">
          <Button className="mt-1 rounded-0" variant="primary" size="sm" onClick={() => props.onAdd(contador)}>
            Add to the cart <FaCartPlus />
          </Button>
        </Row>
      </Container>
    </Card>
  );
};

export default ItemCount;
