import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
function Item(props) {
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
            <span>
              <FaStar className="fs-6 text-warning" />
              <FaStar className="fs-6 text-warning" />
              <FaStar className="fs-6 text-warning" />
              <FaStar className="fs-6 text-warning" />
              <FaStar className="fs-6 text-secondary" />
            </span>
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
      <Card.Footer className="fs-5 pt-0 fontTitle border-0 rounded-0 bg-secondary">
        <Row className="mt-2">
          <Col xs={3} className="text-center">
            <LinkContainer to={`/item/${props.producto.id}`}>
              <Button variant="outline-secondary" size="sm" className="rounded-0 h-100">
                <span className="text-center">Details</span>
              </Button>
            </LinkContainer>
          </Col>
          <Col xs={9} className="text-end text-dark">{`U$S ${props.producto.price}`}</Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default Item;
