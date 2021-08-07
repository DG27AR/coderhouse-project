import './css/bootstrap.min.css'; // Bootstrap CSS
import MyNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <MyNavbar />
      {/* <ItemListContainer greeting="Are you sure to want to buy here??" /> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
