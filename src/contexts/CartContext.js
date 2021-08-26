import React, { useState, useEffect } from 'react';
import { Provider } from './Context';

const CartContext = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(`Items dentro del context:`);
    console.log(items);
  }, [items]);

  const [totalQ, setTotalQ] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalQ(items.reduce((sum, item) => sum + item.q, 0));
    setTotalPrice(
      Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USS', minimumFractionDigits: 2 }).format(
        items.reduce((sum, item) => sum + item.price * item.q, 0)
      )
    );
  }, [items]);

  function addItem(id, q, title, price, description, image, category) {
    // Agregar Items
    setItems([
      ...items,
      { id: id, q: q, title: title, price: price, description: description, image: image, category: category },
    ]);
    console.log(`Se agregaron ${q} productos del id ${id}`);
  }
  function removeItem(id) {
    // Remueve Items por id
    setItems(items.filter(item => item.id !== id));
    console.log(`Se quitaron todos productos del id ${id}`);
  }
  function clear() {
    // Limpia el carrito
    setItems([]);
    console.log(`Se quitaron TODOS productos`);
  }
  function isInCart(i) {
    return items.find(item => item.id === i);
  }

  return (
    <Provider value={{ items, setItems, addItem, removeItem, clear, isInCart, totalPrice, totalQ }}>
      {children}
    </Provider>
  );
};

export default CartContext;
