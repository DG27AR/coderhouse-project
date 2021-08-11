import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import MyLoader from './MyLoader';

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  const detailParams = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`https://fakestoreapi.com/products/${detailParams.id}`)
        .then(res => res.json())
        .then(json => setProducto(json))
        .catch(error => console.log(error));
      setLoading(false);
    }, 2000);
  }, [detailParams.id]);

  return <>{loading ? <MyLoader /> : <ItemDetail producto={producto} />}</>;
}

export default ItemDetailContainer;
