import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget(props) {
  return (
    <>
      <FaShoppingCart className="text-light mx-1 fs-2" />
      <Badge className="bg-light p-1 m-0" pill>
        {props.q}
      </Badge>
    </>
  );
}

export default CartWidget;
