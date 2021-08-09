import { Card, Row, Col } from 'react-bootstrap';
import ItemCount from './ItemCount';
function ItemDetail(props) {
  const onAdd = function onAdd(contador) {
    console.log(contador);
  };

  return (
    <>
      <Card className="mt-3">
        <Row>
          <Card.Img src={props.producto.pictureURL} alt="Card image" />
          <Card.ImgOverlay className="p-0">
            <Card.Title className="ps-3 fontTitle text-start text-light fs-3 bgPrimaryTransparent">
              {props.producto.nombre}
            </Card.Title>
          </Card.ImgOverlay>
        </Row>
        <Row className="mx-0 px-0">
          <Col xs={12} md={6} lg={8}>
            <Row className="mx-0 px-0">
              <Card.Text className="text-start mx-0 px-0">Category </Card.Text>
            </Row>
            <Row className="mx-0 px-0">
              <Card.Text className="text-start fs-3 mx-0 px-0">
                <strong>{`Price U$S ${props.producto.precio}`}</strong>
              </Card.Text>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={4} className="p-0">
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
          </Col>
        </Row>
        <Row>
          <Card.Text className="px-4 mt-4">{props.producto.descripcion}</Card.Text>
        </Row>
      </Card>
    </>
  );
}

export default ItemDetail;
