import React, { useState } from 'react';
import { Card, Row, Col, Badge, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { FaStar } from 'react-icons/fa';

function ItemDetail(props) {
  const [cartHasProducts, setCartHasProducts] = useState(0);

  const onAdd = function onAdd(q) {
    console.log(`${q} unidades del proudcto al carrito`);
    setCartHasProducts(q);
  };

  return (
    <Container>
      <Card className="mt-3 rounded-0 border-2 border-secondary shadow">
        <Card.Body>
          <Row>
            <Col xs={6} md={5} className="p-3">
              <Card.Img src={props.producto.image} alt={props.producto.title} />
            </Col>
            <Col xs={6} md={7} className="px-0 py-2">
              <Card className="h-100 my-0 py-0" border="light">
                <Card.Body>
                  <Link to={`/category/${props.producto.category}`}>
                    <span>
                      <FaStar className="fs-6 text-warning" />
                      <FaStar className="fs-6 text-warning" />
                      <FaStar className="fs-6 text-warning" />
                      <FaStar className="fs-6 text-warning" />
                      <FaStar className="fs-6 text-secondary" />
                    </span>
                    <h6>
                      <Badge pill className="bg-primary rounded-pill text-uppercase">
                        {props.producto.category}
                      </Badge>
                    </h6>
                  </Link>
                  <Card.Title>{props.producto.title}</Card.Title>
                  <Card.Text className="fs-4 fw-bold">{`U$S ${props.producto.price}`}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-light border-0">
                  <Card.Text className="fs-6 mb-1 text-start fst-italic">{`Stock: ${props.producto.stock} unidades`}</Card.Text>

                  {cartHasProducts ? (
                    <Link to="/cart">
                      <Button className="w-100" variant="primary" size="lg">
                        Go to the Cart!
                      </Button>
                    </Link>
                  ) : (
                    <ItemCount initial={props.producto.stock > 0 ? 1 : 0} stock={props.producto.stock} onAdd={onAdd} />
                  )}
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Card.Body>
        <Card.Text className="fst-italic mx-5 mb-3">{props.producto.description}</Card.Text>
      </Card>
    </Container>
  );
}

export default ItemDetail;
