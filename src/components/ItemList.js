import { Col } from 'react-bootstrap';
import ItemCount from './ItemCount';
import Item from './Item';

function ItemList(props) {
  const onAdd = function onAdd(contador) {
    console.log(contador);
  };

  return (
    <>
      {props.productos.map(producto => {
        return (
          <Col key={producto.id} xs={12} md={6} lg={4}>
            <Item producto={producto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
          </Col>
        );
      })}
    </>
  );
}

export default ItemList;
