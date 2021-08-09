import './css/bootstrap.min.css'; // Bootstrap CSS
import MyNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        {/* <ItemListContainer greeting="Are you sure to want to buy here??" />
        <ItemDetailContainer /> */}
        <Route path="/" component={ItemListContainer} />
        <Route path="category/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
      </BrowserRouter>
    </>
  );
}

export default App;
