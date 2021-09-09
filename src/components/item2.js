import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <Card className="h-100 rounded-0 border-2 border-secondary shadow">
      <Card.Body className="px-1 pb-1 pt-0">
        <Row>
          <Col xs="4" md="12" className="px-md-5">
            <Link to={`/item/${props.producto.id}`}>
              <div className="card-img-wrap p-2">
                <Card.Img src={props.producto.image} alt={props.producto.title} />
              </div>
            </Link>
          </Col>
          <Col xs="8" md="12" className=" px-3 pt-3">
            <LinkContainer to={`/item/${props.producto.id}`}>
              <Card.Title className="fw-bold text-dark me-3 mb-1 fontTitle">{props.producto.title}</Card.Title>
            </LinkContainer>
            <Row>
              <Col xs="12" md="4">
                <Link to={`/category/${props.producto.category}`}>
                  <h6 className="mb-0">
                    <Badge pill className="bg-primary mt-1 p-1 rounded-0 text-uppercase">
                      <small>{props.producto.category}</small>
                    </Badge>
                  </h6>
                </Link>
              </Col>
              <Col xs="12" md="8" className="text-md-end">
                {props.producto.featured ? (
                  <Badge className="me-1 border border-warning text-warning p-1 rounded-0 text-uppercase">
                    <small>Best Choice</small>
                  </Badge>
                ) : null}
                {props.producto.discount ? (
                  <Badge className="mx-1 border border-success text-success p-1 rounded-0 text-uppercase">
                    <small>{`-${props.producto.discount * 100}%`}</small>
                  </Badge>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="fs-5 ps-0 pt-0 mt-1 border-0 rounded-0 bg-secondary">
        <Row className="mt-0">
          <Col xs={4} className="ps-3 text-start">
            <LinkContainer to={`/item/${props.producto.id}`}>
              <Button variant="outline-secondary" size="sm" className="ms-1 p-1 border-0 rounded-0">
                <span className="text-center fontTitle">
                  <small>More info?</small>
                </span>
              </Button>
            </LinkContainer>
          </Col>
          <Col xs={8} className="text-end fs-6">
            {props.producto.discount ? (
              <span className="me-2 text-decoration-line-through discounted">
                <small>{`U$S ${props.producto.price}`}</small>
              </span>
            ) : null}
            <span className="fw-bold">
              {Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USS', minimumFractionDigits: 2 }).format(
                props.producto.price / (props.producto.discount + 1),
                0
              )}
            </span>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default Item;
