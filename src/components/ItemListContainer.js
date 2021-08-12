import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import MyLoader from './MyLoader';

function ItemListContainer() {
  let [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const listParams = useParams();

  useEffect(() => {
    setLoading(true);
    // setTimeout(function () {
    fetch(
      listParams.id
        ? `https://fakestoreapi.com/products/category/${listParams.id}`
        : 'https://fakestoreapi.com/products/'
    )
      .then(res => res.json())
      .then(json => setProductos(json))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch(error => console.log(error));
    // }, 2000);
  }, [listParams.id]);

  function addStock(p) {
    p.forEach(e => {
      e.stock = 5;
    });

    return p;
  }
  productos = addStock(productos);

  console.log(productos);
  return <>{loading ? <MyLoader /> : <ItemList productos={productos} />}</>;
}

export default ItemListContainer;
