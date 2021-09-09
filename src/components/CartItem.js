import { Card, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { useContext } from 'react';
import Context from '../contexts/Context';

function Item(props) {
  const context = useContext(Context);

  return (
    <Card className="h-100 rounded-0 border-2 border-secondary shadow">
      <Card.Body className="p-1">
        <Row>
          <Col xs={4} className="px-2 pt-2 pb-0">
            <Link to={`/item/${props.producto.id}`}>
              <div className="card-img-wrap p-2">
                <Card.Img src={props.producto.image} alt={props.producto.title} />
              </div>
            </Link>
          </Col>
          <Col xs={8} className="px-0 pt-3">
            <LinkContainer to={`/item/${props.producto.id}`}>
              <Card.Title className="fw-bold text-dark me-3 mb-1 fontTitle">{props.producto.title}</Card.Title>
            </LinkContainer>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="fs-5 pt-0 border-0 rounded-0 bg-secondary">
        <Row className="mt-0">
          <Col xs={4} className="ps-0 text-center">
            <span className="fs-6">
              <small>{`${props.producto.q} unit x ${Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'USS',
                minimumFractionDigits: 2,
              }).format(props.producto.price)}`}</small>
            </span>
          </Col>
          <Col xs={8} className="text-end fs-6 fw-bold">
            {Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USS', minimumFractionDigits: 2 }).format(
              props.producto.price * props.producto.q
            )}
          </Col>
        </Row>

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
      </Card.Footer>
    </Card>
  );
}

export default Item;
