import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap CSS
import MyNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <MyNavbar />
      <ItemListContainer greeting="20 a 2!" />
    </>
  );
}

export default App;
