import { Link, useNavigate } from 'react-router-dom';
import { Star, Heart, MessageSquare, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useWishlistStore } from '../store/useWishlistStore';
import { useAuthStore } from '../store/useAuthStore';

export default function ProductCard({ product }: { product: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(product.productId);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#0a0f0d] rounded-2xl border border-[#1a271f] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.negotiationEnabled && (
          <span className="bg-indigo-600/90 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Negotiable
          </span>
        )}
        {product.stock < 5 && product.stock > 0 && (
          <span className="bg-orange-500/90 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Only {product.stock} left
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          if (!user) {
            navigate('/login');
            return;
          }
          if (isWishlisted) {
            removeFromWishlist(product.productId);
          } else {
            addToWishlist(product.productId);
          }
        }}
        className="absolute top-3 right-3 z-10 p-2 bg-[#050806]/80 backdrop-blur rounded-full border border-[#1a271f] shadow-sm hover:bg-[#131d17] transition-colors"
      >
        <Heart className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-pink-500 text-pink-500' : 'text-emerald-500/50 hover:text-pink-500'}`} />
      </button>

      {/* Image */}
      <Link to={`/product/${product.productId}`} className="relative aspect-square w-full overflow-hidden bg-[#0f1712] flex items-center justify-center p-6">
        {!product.image || imageError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#131d17] to-[#0a0f0d] rounded-xl border border-[#1a271f]">
            <ImageIcon className="w-12 h-12 text-emerald-500/20 mb-3" strokeWidth={1} />
            <span className="text-xs font-bold text-emerald-500/40 uppercase tracking-widest">Unavailable</span>
          </div>
        ) : (
          <motion.img 
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
            src={product.image} 
            alt={product.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-contain drop-shadow-md mix-blend-screen"
          />
        )}
        
        {/* Quick actions overlay */}
        <div className={`absolute inset-x-0 bottom-0 p-4 flex gap-2 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
          <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-2.5 rounded-xl text-sm shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200">
            Quick View
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-2">
          <Link to={`/product/${product.productId}`} className="flex-1">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">{product.brand}</p>
            <h3 className="font-outfit font-semibold text-emerald-50 leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-semibold text-emerald-200/80">{product.rating}</span>
          </div>
          <span className="text-xs text-emerald-500/50">({product.reviews})</span>
        </div>

        <div className="mt-auto pt-4 flex items-end justify-between border-t border-[#131d17]">
          <div>
            <p className="text-xs text-emerald-400/60 mb-0.5">Original Price</p>
            <p className="text-xl font-bold text-emerald-50 font-outfit">₹{product.originalPrice.toLocaleString()}</p>
          </div>
          {product.negotiationEnabled && (
            <Link 
              to={`/product/${product.productId}`}
              className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
              title="Negotiate Price"
            >
              <MessageSquare className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
