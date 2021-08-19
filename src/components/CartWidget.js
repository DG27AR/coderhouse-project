import { FaShoppingCart } from 'react-icons/fa';

function CartWidget(props) {
  return (
    <>
      <span className="ms-0 me-4">
        <FaShoppingCart className="text-light ms-2 me-1 fs-5" />
        {props.q}
      </span>
    </>
  );
}

export default CartWidget;
