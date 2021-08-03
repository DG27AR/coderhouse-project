import { Container, Alert, Col, Row } from 'react-bootstrap';
import ItemContainer from './ItemContainer';

function ItemListContainer(params) {
  return (
    <Container>
      <Alert variant="warning">Nuestro horario de hoy es de {params.greeting}</Alert>
      <Row>
        <Col xs={12} md={6} lg={4} className="mb-2">
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
    </Container>
  );
}

export default ItemListContainer;
