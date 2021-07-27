import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaPlus, FaMinus, FaCartPlus } from 'react-icons/fa';
import { default as cardImg } from '../assets/367x160.jpg';

function ItemContainer(params) {
  return (
    <Card>
      <Card.Img variant="top" src={cardImg} />
      <Card.Body>
        <Card.Title>Producto</Card.Title>
        <Row>
          <Col>
            <Card.Text className="text-start fs-5">stock 5u</Card.Text>
          </Col>
          <Col>
            <Card.Text className="text-end fs-3">$100</Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Row className="mt-1">
          <Col className="text-start">
            <Button variant="outline-secondary" size="sm">
              <FaMinus />
            </Button>
          </Col>
          <Col className="text-center">
            {/* <Form.Control className="text-center" type="text" placeholder="1" readOnly /> */}1
          </Col>
          <Col className="text-end">
            <Button variant="outline-secondary" size="sm">
              <FaPlus />
            </Button>
          </Col>
        </Row>
        <Row className="my-2 mx-0">
          <Button variant="success">
            Añadir al pedido <FaCartPlus />
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default ItemContainer;
