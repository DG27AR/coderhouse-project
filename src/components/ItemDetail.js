import React, { useContext } from 'react';
import { Card, Row, Col, Badge, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { FaShoppingCart, FaStar, FaTrashAlt } from 'react-icons/fa';
import Context from '../contexts/Context';

function ItemDetail(props) {
  let context = useContext(Context);

  const onAdd = function onAdd(q) {
    context.addItem(
      props.producto.id,
      q,
      props.producto.title,
      props.producto.price,
      props.producto.description,
      props.producto.image,
      props.producto.category,
      props.producto.discount
    );
  };

  return (
    <Container>
      <Card className="mt-3 rounded-0 border-2 border-secondary shadow">
        <Card.Body>
          <Row>
            {/* <Col className="d-xs-none" md={2} lg={3} xl={4}></Col> */}
            <Col xs={12} sm={12} md={7} lg={5} xl={4} className="p-3">
              <Card.Img src={props.producto.image} alt={props.producto.title} />
            </Col>
            <Col xs={12} sm={12} md={5} lg={7} xl={8} className="px-0 py-2">
              <Card className="h-100 my-0 py-0" border="light">
                <Card.Body>
                  <Card.Title className="fs-2 fw-bold fontTitle text-dark">{props.producto.title}</Card.Title>
                  <Link to={`/category/${props.producto.category}`}>
                    <h6>
                      <Badge className="bg-primary rounded-0 text-uppercase">{props.producto.category}</Badge>
                    </h6>
                  </Link>
                  <span>
                    <FaStar className="fs-6 text-warning" />
                    <FaStar className="fs-6 text-warning" />
                    <FaStar className="fs-6 text-warning" />
                    <FaStar className="fs-6 text-warning" />
                    <FaStar className="fs-6 text-secondary" />
                  </span>
                  <Container className="mx-0 px-0 mt-3">
                    <div className="fs-5 fw-bold">{`U$S ${props.producto.price}`}</div>
                  </Container>
                  <Card.Text className="mx-0 my-3">{props.producto.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-light border-0">
                  <div className="fs-6 text-start fst-italic">
                    <small>{`${props.producto.stock} units left!`}</small>
                  </div>
                  {context.isInCart(props.producto.id) ? (
                    <Row className="mt-2">
                      <Col xs={12} lg={6}>
                        <Button
                          className="w-100 rounded-0 button-custom"
                          variant="outline-secondary"
                          size="sm"
                          onClick={() => context.removeItem(props.producto.id)}
                        >
                          Remove
                          <FaTrashAlt className="ms-1" />
                        </Button>
                      </Col>
                      <Col xs={12} lg={6}>
                        <Link to="/cart/cart">
                          <Button className="w-100 rounded-0" variant="success" size="sm">
                            To the cart!
                            <FaShoppingCart className="ms-1" />
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <ItemCount
                        initial={props.producto.stock > 0 ? 1 : 0}
                        stock={props.producto.stock}
                        onAdd={onAdd}
                      />
                    </Row>
                  )}
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemDetail;
