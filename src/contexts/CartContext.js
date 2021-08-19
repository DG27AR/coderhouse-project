import React, { useState, useEffect } from 'react';
import { Provider } from './Context';

const CartContext = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  function addItem(id, q) {
    // Agregar Items, en ItemDetail detecta si ya estaba el producto
    setItems([...items, { id: id, q: q }]);
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

  return <Provider value={{ items, setItems, addItem, removeItem, clear }}>{children}</Provider>;
};

export default CartContext;
