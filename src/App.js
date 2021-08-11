import './css/bootstrap.min.css'; // Bootstrap CSS
import './css/index.css';
import MyNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Route path="/" component={ItemListContainer} exact />
      <Route path="/category/:id" component={ItemListContainer} exact />
      <Route path="/item/:id" component={ItemDetailContainer} exact />
    </BrowserRouter>
  );
}

export default App;
