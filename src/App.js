import './css/bootstrap.min.css'; // Bootstrap CSS
import './css/index.css';
import MyNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Route } from 'react-router-dom';
import CartContext from './contexts/CartContext';

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <MyNavbar />
        <Route path="/" component={ItemListContainer} exact />
        <Route path="/category/:id" component={ItemListContainer} exact />
        <Route path="/item/:id" component={ItemDetailContainer} exact />
        <Route path="/cart/:view" component={Cart} exact />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
