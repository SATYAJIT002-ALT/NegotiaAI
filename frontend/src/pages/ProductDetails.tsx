import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore';
import { useCartStore } from '../store/useCartStore';
import { useWishlistStore } from '../store/useWishlistStore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NegotiationModal from '../components/NegotiationModal';
import { Star, ShieldCheck, Truck, RotateCcw, MessageSquare, ShoppingCart, Check, Heart, Image as ImageIcon } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showNegotiation, setShowNegotiation] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [imageError, setImageError] = useState(false);
  const { user } = useAuthStore();
  const { addToCart } = useCartStore();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlistStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-[#0f1712] flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    </div>
  );
  
  if (!product) return (
    <div className="min-h-screen bg-[#0f1712] flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/" className="text-indigo-600 hover:underline mt-4">Return Home</Link>
      </div>
    </div>
  );

  const images = product.images?.length > 0 ? product.images : [product.image];

  return (
    <div className="min-h-screen bg-[#0f1712] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-emerald-400/60 mb-8">
            <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/?category=${product.category}`} className="hover:text-indigo-600 transition">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-emerald-50 font-medium">{product.name}</span>
          </nav>

          <div className="bg-[#0a0f0d] rounded-3xl shadow-sm border border-[#1a271f] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              
              {/* Image Gallery */}
              <div className="p-8 md:p-12 bg-[#0f1712] flex flex-col">
                <div className="relative flex-1 flex items-center justify-center mb-8 min-h-[400px]">
                  {(!images[activeImage] || imageError) ? (
                    <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-[#131d17] to-[#0a0f0d] rounded-2xl border border-[#1a271f]">
                      <ImageIcon className="w-16 h-16 text-emerald-500/20 mb-4" strokeWidth={1} />
                      <span className="text-sm font-bold text-emerald-500/40 uppercase tracking-widest">Image Unavailable</span>
                    </div>
                  ) : (
                    <img 
                      src={images[activeImage]} 
                      alt={product.name} 
                      onError={() => setImageError(true)}
                      className="max-h-[500px] w-full object-contain mix-blend-screen drop-shadow-xl transition-all duration-300"
                    />
                  )}
                  {product.negotiationEnabled && (
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      Negotiable
                    </div>
                  )}
                </div>
                
                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex gap-4 overflow-x-auto pb-2 justify-center hide-scrollbar">
                    {images.map((img: string, idx: number) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`w-20 h-20 rounded-xl bg-[#0a0f0d] border-2 flex items-center justify-center p-2 transition-all ${
                          activeImage === idx ? 'border-indigo-600 shadow-md' : 'border-transparent hover:border-slate-300'
                        }`}
                      >
                        <img 
                          src={img || 'https://placehold.co/500x500/0f1712/10b981?text=No+Image'} 
                          alt="" 
                          onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/500x500/0f1712/10b981?text=Image+Unavailable';
                            e.currentTarget.onerror = null;
                          }}
                          className="max-h-full object-contain mix-blend-screen" 
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-8 md:p-12 flex flex-col">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider">{product.brand || 'Brand'}</p>
                  <div className="flex items-center text-yellow-400 text-sm font-bold">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    {product.rating} <span className="text-emerald-500/50 font-normal ml-1">({product.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4 mb-4">
                  <h1 className="text-3xl md:text-4xl font-bold font-outfit text-emerald-50 leading-tight">
                    {product.name}
                  </h1>
                  <button 
                    onClick={() => {
                      if (!user) {
                        alert('Please login to wishlist products.');
                        return;
                      }
                      if (isInWishlist(product.productId)) {
                        removeFromWishlist(product.productId);
                      } else {
                        addToWishlist(product.productId);
                      }
                    }}
                    className="p-3 bg-[#0a0f0d] border border-[#22352a] rounded-full shadow-sm hover:bg-[#131d17] transition-colors flex-shrink-0"
                    title={isInWishlist(product.productId) ? "Remove from Wishlist" : "Add to Wishlist"}
                  >
                    <Heart className={`w-6 h-6 transition-colors ${isInWishlist(product.productId) ? 'fill-pink-500 text-pink-500' : 'text-emerald-500/50'}`} />
                  </button>
                </div>
                
                <p className="text-emerald-300/70 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-8 p-6 bg-[#0f1712] rounded-2xl border border-[#1a271f] flex items-end justify-between">
                  <div>
                    <p className="text-sm text-emerald-400/60 mb-1 font-medium">List Price</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold font-outfit text-emerald-50">₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className={`px-4 py-2 rounded-xl text-sm font-bold ${
                    product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4 mt-auto">
                  {product.negotiationEnabled ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button 
                        onClick={() => {
                          if (!user) return alert('Please login to negotiate.');
                          setShowNegotiation(true);
                        }}
                        className="flex items-center justify-center gap-2 bg-gradient-primary text-white py-4 px-6 rounded-2xl font-bold hover:shadow-lg transition-all"
                      >
                        <MessageSquare className="w-5 h-5" />
                        Negotiate Price
                      </button>
                      <button 
                        onClick={() => {
                          addToCart({
                            productId: product.productId,
                            name: product.name,
                            image: product.image,
                            originalPrice: product.originalPrice,
                            quantity: 1
                          });
                          alert('Added to cart at list price.');
                        }}
                        className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-4 px-6 rounded-2xl font-bold hover:bg-emerald-500 hover:shadow-lg transition-all"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Buy at List Price
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => {
                        addToCart({
                          productId: product.productId,
                          name: product.name,
                          image: product.image,
                          originalPrice: product.originalPrice,
                          quantity: 1
                        });
                        alert('Added to cart.');
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-4 px-6 rounded-2xl font-bold hover:bg-emerald-500 hover:shadow-lg transition-all"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                  )}
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#1a271f]">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-emerald-300/70">Secure AI Negotiation</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                      <Truck className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-emerald-300/70">Free Delivery</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                      <RotateCcw className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-emerald-300/70">7 Days Return</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Specifications Section */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="border-t border-[#1a271f] p-8 md:p-12">
                <h3 className="text-2xl font-bold font-outfit text-emerald-50 mb-6">Product Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex border-b border-[#1a271f] py-3">
                      <span className="w-1/3 text-emerald-400/60 font-medium">{key}</span>
                      <span className="w-2/3 text-emerald-50">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      {showNegotiation && (
        <NegotiationModal 
          product={product} 
          onClose={() => setShowNegotiation(false)} 
        />
      )}
    </div>
  );
}
