import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget(props) {
  return (
    <>
      <FaShoppingCart className="colorLightGrey fs-5 mx-1" width="30" height="30" />
      <Badge className="bgYellow text-dark rounder p-1" pill>
        {props.q}
      </Badge>
    </>
  );
}

export default CartWidget;
