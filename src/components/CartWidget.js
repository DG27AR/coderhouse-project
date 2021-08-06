import { FaShoppingCart } from 'react-icons/fa';

function CartWidget(props) {
  return (
    <>
      <FaShoppingCart className="text-light ms-3 me-1 navBarFontSize" />
      <span>{props.q}</span>
    </>
  );
}

export default CartWidget;
