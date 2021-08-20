import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CartWidget(props) {
  return (
    <span className="ms-0 me-4">
      <Link to="/cart">
        <FaShoppingCart className="text-light ms-2 me-1 fs-5" />
      </Link>
      {props.q}
    </span>
  );
}

export default CartWidget;
