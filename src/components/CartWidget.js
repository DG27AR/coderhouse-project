import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Context from '../contexts/Context';

function CartWidget(props) {
  let context = useContext(Context);

  return (
    <span className="text-light">
      <Link to="/cart/cart">
        <div className="me-1 d-inline-block">
          <div class="border border-0 btn btn-primary position-relative p-0">
            <FaShoppingCart className="text-light fs-5" />
            {context.totalQ ? (
              <span class="position-absolute top-25 start-75 badge rounded-pill bg-dark p-1">{context.totalQ}</span>
            ) : null}
          </div>
        </div>
      </Link>
    </span>
  );
}

export default CartWidget;
