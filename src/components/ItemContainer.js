import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
function ItemContainer(params) {
  const onAdd = function onAdd(contador) {
    console.log(contador);
  };

  return (
    <Card className="mt-3">
      <Card.Header className="text-start h4">Producto</Card.Header>
      <Card.Body>
        <Card.Subtitle className="text-start">Descripción</Card.Subtitle>
        <Card.Text className="text-start fs-5 mt-3">
          <strong>$100</strong>
        </Card.Text>
      </Card.Body>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </Card>
  );
}

export default ItemContainer;
