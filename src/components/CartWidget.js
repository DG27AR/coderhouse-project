import { FaShoppingCart } from 'react-icons/fa';

function CartWidget(props) {
  return (
    <>
      <FaShoppingCart className="text-light ms-2 me-1 fs-5" />
      <span className="me-2">{props.q}</span>
    </>
  );
}

export default CartWidget;
