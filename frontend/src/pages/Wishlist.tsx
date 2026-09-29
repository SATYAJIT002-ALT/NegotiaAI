import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useWishlistStore } from '../store/useWishlistStore';
import { useCartStore } from '../store/useCartStore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Heart, ShoppingCart, MessageSquare, Trash2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FallbackImage from '../components/FallbackImage';

export default function Wishlist() {
  const { user } = useAuthStore();
  const { items, isLoading, fetchWishlist, removeFromWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchWishlist();
  }, [user, navigate, fetchWishlist]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0f1712] flex flex-col">
        <Navbar />
        <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl font-bold font-outfit text-emerald-50 mb-8">My Wishlist</h1>
          <div className="space-y-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse flex items-center gap-6 bg-[#0a0f0d] p-6 rounded-2xl border border-[#1a271f] shadow-sm">
                <div className="w-32 h-32 bg-[#131d17] rounded-xl"></div>
                <div className="flex-1 space-y-4">
                  <div className="h-6 bg-[#131d17] rounded w-1/3"></div>
                  <div className="h-4 bg-[#131d17] rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1712] flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold font-outfit text-emerald-50">My Wishlist</h1>
            <p className="text-emerald-400/60 mt-2">{items.length} {items.length === 1 ? 'item' : 'items'}</p>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="bg-[#0a0f0d] rounded-3xl p-16 text-center shadow-sm border border-[#1a271f] flex flex-col items-center justify-center min-h-[500px]">
            <div className="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-pink-300" />
            </div>
            <h2 className="text-2xl font-bold text-emerald-50 font-outfit mb-3">Your Wishlist is Empty</h2>
            <p className="text-emerald-400/60 max-w-md mx-auto mb-8">
              Save products you love and find them here later. Start exploring our collection to find your next favorite item.
            </p>
            <Link 
              to="/" 
              className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-indigo-700 transition flex items-center gap-2 shadow-lg shadow-indigo-200"
            >
              Continue Shopping <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {items.map((product) => (
              <motion.div 
                key={product.productId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-[#0a0f0d] rounded-2xl p-6 border border-[#1a271f] shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 md:items-center relative"
              >
                <Link to={`/product/${product.productId}`} className="shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-[#0f1712] rounded-xl p-4 flex items-center justify-center hover:bg-[#1a271f] transition">
                    <FallbackImage 
                      src={product.image} 
                      alt={product.name} 
                      className="max-h-full max-w-full object-contain mix-blend-screen" 
                    />
                  </div>
                </Link>
                
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-1">
                    <Link to={`/product/${product.productId}`}>
                      <h3 className="text-xl font-bold font-outfit text-emerald-50 hover:text-indigo-600 transition">{product.name}</h3>
                    </Link>
                    <button 
                      onClick={() => removeFromWishlist(product.productId)}
                      className="text-emerald-500/50 hover:text-red-500 transition p-2 bg-[#0f1712] hover:bg-red-50 rounded-full"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">{product.brand}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-bold font-outfit text-emerald-50">
                      ₹{product.originalPrice.toLocaleString()}
                    </div>
                    <div className={`text-xs font-bold px-2 py-1 rounded-md ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <button 
                      onClick={() => {
                        addToCart({
                          productId: product.productId,
                          name: product.name,
                          image: product.image,
                          originalPrice: product.originalPrice,
                          quantity: 1
                        });
                        alert('Added to cart');
                      }}
                      disabled={product.stock === 0}
                      className="flex items-center gap-2 bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-500 transition disabled:opacity-50"
                    >
                      <ShoppingCart className="w-4 h-4" /> Add to Cart
                    </button>
                    
                    {product.negotiationEnabled && (
                      <Link 
                        to={`/product/${product.productId}`}
                        className="flex items-center gap-2 bg-indigo-50 text-indigo-700 font-bold py-3 px-6 rounded-xl hover:bg-indigo-100 transition border border-indigo-100"
                      >
                        <MessageSquare className="w-4 h-4" /> Negotiate Price
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
