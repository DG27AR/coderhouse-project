import { Card } from 'react-bootstrap';
function Item(props) {
  return (
    <>
      <Card className="mt-3">
        <Card.Header className="text-start h4">{props.producto.nombre}</Card.Header>
        <Card.Body>
          <Card.Subtitle className="text-start">{props.producto.descripcion}</Card.Subtitle>
          <Card.Text className="text-start fs-5 mt-3">
            <strong>{props.producto.precio}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
