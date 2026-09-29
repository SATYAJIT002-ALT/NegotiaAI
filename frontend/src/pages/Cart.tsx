import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { api } from '../api/client';
import { useState } from 'react';
import FallbackImage from '../components/FallbackImage';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  const subtotal = items.reduce((acc, item) => {
    const price = item.negotiatedPrice || item.originalPrice;
    return acc + (price * item.quantity);
  }, 0);
  
  const originalTotal = items.reduce((acc, item) => acc + (item.originalPrice * item.quantity), 0);
  const totalSavings = originalTotal - subtotal;

  const handleCheckout = async () => {
    if (items.length === 0) return;
    setIsCheckingOut(true);
    try {
      await api.post('/orders/checkout', { items });
      clearCart();
      alert('Checkout successful! Orders created.');
      navigate('/');
    } catch (err: any) {
      alert(err.response?.data?.error || 'Checkout failed');
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#0f1712] flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 pt-32 pb-16 flex flex-col items-center justify-center text-center px-4">
          <div className="w-24 h-24 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold font-outfit text-emerald-50 mb-4">Your cart is empty</h2>
          <p className="text-emerald-400/60 mb-8 max-w-md">Looks like you haven't added anything to your cart yet. Browse our catalog and negotiate the best deals!</p>
          <Link to="/" className="px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg">
            Start Shopping
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1712] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-3xl font-bold font-outfit text-emerald-50 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => {
              const isNegotiated = !!item.negotiatedPrice;
              const price = item.negotiatedPrice || item.originalPrice;
              const savings = item.originalPrice - price;
              
              return (
                <div key={`${item.productId}-${item.negotiationId}`} className="bg-[#0a0f0d] p-6 rounded-2xl border border-[#1a271f] shadow-sm flex flex-col sm:flex-row gap-6">
                  <Link to={`/product/${item.productId}`} className="w-32 h-32 bg-[#0f1712] rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                    <FallbackImage 
                      src={item.image} 
                      alt={item.name} 
                      className="max-h-full object-contain mix-blend-screen" 
                    />
                  </Link>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <Link to={`/product/${item.productId}`} className="font-bold text-emerald-50 font-outfit text-lg hover:text-indigo-600 transition line-clamp-2">
                          {item.name}
                        </Link>
                        {isNegotiated && (
                          <div className="inline-flex items-center gap-1 mt-2 px-2.5 py-1 bg-green-50 border border-green-200 text-green-700 text-xs font-bold rounded-lg uppercase tracking-wider">
                            <Tag className="w-3 h-3" />
                            Negotiated Deal
                          </div>
                        )}
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.productId)}
                        className="text-emerald-500/50 hover:text-red-500 transition p-2 bg-[#0f1712] rounded-full"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex items-end justify-between mt-6">
                      <div className="flex items-center gap-3 bg-[#0f1712] border border-[#22352a] rounded-xl p-1">
                        <button 
                          onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center font-bold text-emerald-300/70 hover:bg-slate-200 rounded-lg transition"
                        >
                          -
                        </button>
                        <span className="w-6 text-center font-bold text-emerald-50">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center font-bold text-emerald-300/70 hover:bg-slate-200 rounded-lg transition"
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="text-right">
                        {isNegotiated && (
                          <p className="text-xs text-emerald-500/50 line-through mb-0.5">₹{item.originalPrice.toLocaleString()}</p>
                        )}
                        <p className="text-2xl font-bold font-outfit text-emerald-50">₹{price.toLocaleString()}</p>
                        {isNegotiated && savings > 0 && (
                          <p className="text-xs font-bold text-green-600">Saved ₹{savings.toLocaleString()}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#0a0f0d] p-6 rounded-2xl border border-[#1a271f] shadow-sm sticky top-28">
              <h2 className="text-xl font-bold font-outfit text-emerald-50 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-emerald-300/70">
                  <span>Subtotal ({items.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                  <span>₹{originalTotal.toLocaleString()}</span>
                </div>
                
                {totalSavings > 0 && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Negotiation Savings</span>
                    <span>- ₹{totalSavings.toLocaleString()}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-emerald-300/70">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                
                <div className="flex justify-between text-emerald-300/70">
                  <span>Taxes (Estimated)</span>
                  <span>₹0</span>
                </div>
              </div>
              
              <div className="border-t border-[#1a271f] pt-4 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-emerald-50 font-bold">Total</span>
                  <span className="text-3xl font-bold font-outfit text-emerald-50">₹{subtotal.toLocaleString()}</span>
                </div>
              </div>
              
              <button 
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold font-outfit text-lg transition shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isCheckingOut ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Checkout Now
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-emerald-400/60 font-medium">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                Secure Checkout & Payment Encryption
              </div>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
