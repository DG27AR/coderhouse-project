import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import MyLoader from './MyLoader';

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState();

  const detailParams = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${detailParams.id}`)
      .then(res => res.json())
      .then(json => setProducto(json))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch(error => console.log(error));
  }, [detailParams.id]);

  producto.stock = 5;

  return <>{loading ? <MyLoader /> : <ItemDetail producto={producto} />}</>;
}

export default ItemDetailContainer;
