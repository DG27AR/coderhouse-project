import { Card } from 'react-bootstrap';
function ItemDetail(props) {
  const n = props.productosId;
  console.log(props.productos);
  console.log(n);

  const filterProductos = props.productos.filter((product, index) => index === n);

  return (
    <>
      {filterProductos.map(producto => {
        return (
          <Card key={producto.id} className="mt-3">
            <Card.Body className="p-0">
              <Card.Img src={producto.pictureURL} alt="Card image" />
              <Card.ImgOverlay className="p-0">
                <Card.Title className="ps-1 fontTitle text-start text-light h4 bgPrimaryTransparent">
                  {producto.nombre}
                </Card.Title>
              </Card.ImgOverlay>
              <Card.Text className="text-end fs-5 mt-1">
                <strong>{`U$S ${producto.precio}`}</strong>
              </Card.Text>
              <Card.Text>{producto.descripcion}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default ItemDetail;
