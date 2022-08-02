import './App.css';
import Nav from './Nav';
import ProductFetch from './ProductFetch';
import ProductDetails from './ProductDetails'
import Cart from './Cart';
import Checkout from './Checkout';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {CartProvider} from './CartContext';

function App() {
  return (
    <Router>
      <div className="App">
        <CartProvider >
          <Nav />
          <Routes>
            <Route path="/products" element={<ProductFetch />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </div> 
    </Router>
  );
}

export default App;
