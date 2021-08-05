import React, { useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { FaPlus, FaMinus, FaCartPlus } from 'react-icons/fa';

const ItemCount = itemCount => {
  const [contador, setContador] = useState(itemCount.initial);

  const sumar = function sumar(numero, valor) {
    if (numero > 0 && hayStock(numero, itemCount.stock)) {
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
    <>
      <Card className="mb-0 pt-2">
        <Container className="bgPrimary p-0">
          <Row>
            <Col className="text-start">
              <Button variant="outline-dark" size="sm" onClick={() => setContador(restar(contador, 1))}>
                <FaMinus />
              </Button>
            </Col>
            <Col>
              <Container className="text-center fs-5">{contador}</Container>
            </Col>
            <Col className="text-end">
              <Button variant="outline-dark" size="sm" onClick={() => setContador(sumar(contador, 1))}>
                <FaPlus />
              </Button>
            </Col>
          </Row>
          <Row className="my-2 mx-0">
            <Button variant="primary" size="sm" onClick={() => itemCount.onAdd(contador)}>
              Add to the cart <FaCartPlus />
            </Button>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default ItemCount;
