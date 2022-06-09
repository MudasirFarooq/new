import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Allproduct from './components/allproducts/Allproduct';
import CartDetails from './components/cart/CartDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CartMain from './components/cart/CartMain';
import ProductDetail from './components/ProductDetail';
import NotificationList from './components/notification/NotificationList';
import Login from './components/form/Login';


function App() {
  
  return (
    <Router>
      {/* <Login/> */}
      <NotificationList/>
      <Routes>
    <Route exact path="/" element={ <Home />} />   
    <Route exact path="/products" element={<Allproduct/>} />
    <Route exact path="/cart"  element={<CartMain/> } />  
    <Route exact path="/detail/:id" element={ <ProductDetail/>} />   

      </Routes>
    </Router>
  );
}

export default App;
