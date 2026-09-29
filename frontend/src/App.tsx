import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Wishlist from './pages/Wishlist';
import { useAuthStore } from './store/useAuthStore';
import { useWishlistStore } from './store/useWishlistStore';

function App() {
  const { user } = useAuthStore();
  const { fetchWishlist, clearWishlist } = useWishlistStore();

  useEffect(() => {
    if (user) {
      fetchWishlist();
    } else {
      clearWishlist();
    }
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
