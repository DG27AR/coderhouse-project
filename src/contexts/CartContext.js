import React, { useState, useEffect } from 'react';
import { Provider } from './Context';

const CartContext = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(`Items dentro del context:`);
    console.log(items);
  }, [items]);

  function addItem(id, q, title, price, description, image, category) {
    // Agregar Items, en ItemDetail detecta si ya estaba el producto
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

  return <Provider value={{ items, setItems, addItem, removeItem, clear, isInCart }}>{children}</Provider>;
};

export default CartContext;
