import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FaStar, FaTrashAlt } from 'react-icons/fa';
import { useContext } from 'react';
import Context from '../contexts/Context';

function Item(props) {
  const itemParams = useParams();
  const context = useContext(Context);

  return (
    <Card className="h-100 rounded-0 border-2 border-secondary shadow">
      <Card.Body className="p-1">
        <Row>
          <Col xs={3} className="p-3">
            <Link to={`/item/${props.producto.id}`}>
              <Card.Img src={props.producto.image} alt={props.producto.title} />
            </Link>
          </Col>
          <Col xs={9} className="px-0 py-2">
            {!itemParams.view ? (
              <span>
                <FaStar className="fs-6 text-warning" />
                <FaStar className="fs-6 text-warning" />
                <FaStar className="fs-6 text-warning" />
                <FaStar className="fs-6 text-warning" />
                <FaStar className="fs-6 text-secondary" />
              </span>
            ) : (
              false
            )}
            <Link to={`/category/${props.producto.category}`}>
              <h6>
                <Badge pill className="bg-primary rounded-0 mb-1 text-uppercase">
                  {props.producto.category}
                </Badge>
              </h6>
            </Link>
            <LinkContainer to={`/item/${props.producto.id}`}>
              <Card.Title className="fs-6 me-3">{props.producto.title}</Card.Title>
            </LinkContainer>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="fs-5 pt-0 border-0 rounded-0 bg-secondary">
        <Row className="mt-2">
          <Col xs={6} className="text-start">
            {!itemParams.view ? (
              <LinkContainer to={`/item/${props.producto.id}`}>
                <Button variant="outline-secondary" size="sm" className=" border-0 rounded-0 h-100">
                  <span className="text-center fontTitle">
                    <small>More info?</small>
                  </span>
                </Button>
              </LinkContainer>
            ) : (
              <span className="fs-6">
                <small>{`${props.producto.q} unit x US$${props.producto.price}`}</small>
              </span>
            )}
          </Col>
          {!itemParams.view ? (
            <Col xs={6} className="text-end text-dark fontTitle">{`U$S ${props.producto.price}`}</Col>
          ) : (
            <Col xs={6} className="text-end text-dark fontTitle">{`U$S ${
              props.producto.price * props.producto.q
            }`}</Col>
          )}
        </Row>
        {!itemParams.view ? (
          false
        ) : (
          <Row className="mx-1 my-2 pb-2 bg-cart-card-footer shadow px-2 pt-1">
            <span className="fs-6 text-end px-0">
              <Button
                className="pb-1 pt-0 pe-1 ps-0 mt-1 me-0 border-0 rounded-pill"
                size="sm"
                variant="outline-primary"
                onClick={() => context.removeItem(props.producto.id)}
              >
                <FaTrashAlt className="ms-1" />
              </Button>
            </span>
          </Row>
        )}
      </Card.Footer>
    </Card>
  );
}

export default Item;
