import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import MyLoader from './MyLoader';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
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

  return <>{loading ? <MyLoader /> : <ItemList productos={productos} />}</>;
}

export default ItemListContainer;
