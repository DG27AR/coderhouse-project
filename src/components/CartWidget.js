import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Context from '../contexts/Context';

function CartWidget(props) {
  let context = useContext(Context);

  if (context.totalQ) {
    return (
      <span className="ms-0 me-2">
        <Link to="/cart/cart">
          <FaShoppingCart className="text-light ms-2 me-1 fs-5" />
        </Link>
        {context.totalQ}
      </span>
    );
  } else {
    return <span className="ms-4 me-5"></span>;
  }
}

export default CartWidget;
