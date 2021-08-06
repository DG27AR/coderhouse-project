import { Card } from 'react-bootstrap';
function Item(props) {
  return (
    <>
      <Card className="mt-3">
        <Card.Body className="p-0">
          <Card.Img src={props.producto.pictureURL} alt="Card image" />
          <Card.ImgOverlay className="p-0">
            <Card.Title className="ps-1 fontTitle text-start text-light h4 bgPrimaryTransparent">
              {props.producto.nombre}
            </Card.Title>
          </Card.ImgOverlay>
          <Card.Text className="text-end fs-5 mt-1">
            <strong>{`U$S ${props.producto.precio}`}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
