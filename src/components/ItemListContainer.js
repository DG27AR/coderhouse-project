import { Container, Alert, Col, Row } from 'react-bootstrap';
import ItemContainer from './ItemContainer';

function ItemListContainer(params) {
  return (
    <Container className="mt-3">
      <Alert variant="warning">Nuestro horario de hoy es de {params.greeting}</Alert>
      <Row>
        <Col>
          <ItemContainer />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ItemContainer />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ItemContainer />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ItemContainer />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ItemContainer />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ItemContainer />
        </Col>
      </Row>
      {/* <CardGroup>
        <Card>
          <Card.Img variant="top" src={cardImg} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content
              is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={cardImg} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={cardImg} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional content. This card has
              even longer content than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup> */}
    </Container>
  );
}

export default ItemListContainer;
