import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useCartStore } from '../store/useCartStore';
import { useWishlistStore } from '../store/useWishlistStore';
import { ShoppingCart, Search, User, LogOut, Menu, Settings, Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const cartItems = useCartStore((state) => state.items);
  const wishlistItems = useWishlistStore((state) => state.items);
  const navigate = useNavigate();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0f0d]/90 backdrop-blur-md shadow-lg shadow-emerald-900/20 py-3 border-b border-[#1a271f]' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
              N
            </div>
            <span className="text-2xl font-bold tracking-tight font-outfit text-emerald-50 hidden sm:block">
              Negotia<span className="text-indigo-600">AI</span>
            </span>
          </Link>
          
          {/* CENTER: Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8 relative">
            <form onSubmit={handleSearch} className="relative w-full flex items-center">
              <Search className="absolute left-4 text-emerald-500/50 w-5 h-5 pointer-events-none" />
              <input 
                type="text"
                placeholder="Search for products, categories, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full border border-[#22352a] bg-[#0f1712] focus:bg-[#131d17] focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm text-sm text-emerald-50"
              />
            </form>
          </div>
          
          {/* RIGHT: Actions */}
          <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0">
            
            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-emerald-200/80 hover:text-indigo-600 transition-colors flex items-center justify-center">
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1 shadow-md ring-2 ring-white">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="hidden sm:flex relative p-2 text-emerald-200/80 hover:text-indigo-600 transition-colors items-center justify-center">
              <Heart className="w-6 h-6" />
              {wishlistItems.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-pink-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1 shadow-md ring-2 ring-white">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            
            {user ? (
              <div className="hidden md:flex items-center gap-4 border-l border-[#22352a] pl-4">
                
                {/* Profile */}
                <div className="relative" ref={dropdownRef}>
                  <button 
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-[#1a271f] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center">
                      <User className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-emerald-200/80 max-w-[120px] truncate">{user.name}</span>
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {isProfileDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 bg-[#0a0f0d] rounded-xl shadow-xl border border-[#1a271f] py-2 z-50"
                      >
                        <div className="px-4 py-2 border-b border-[#131d17] mb-2">
                          <p className="text-sm font-semibold text-emerald-50 truncate">{user.name}</p>
                          <p className="text-xs text-emerald-400/60 truncate">{user.email}</p>
                        </div>
                        {user.role === 'admin' && (
                          <Link 
                            to="/admin" 
                            className="flex items-center gap-2 px-4 py-2 text-sm text-emerald-200/80 hover:bg-[#131d17] transition-colors"
                            onClick={() => setIsProfileDropdownOpen(false)}
                          >
                            <Settings className="w-4 h-4" /> Dashboard
                          </Link>
                        )}
                        <button 
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors text-left"
                        >
                          <LogOut className="w-4 h-4" /> Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Logout */}
                <button 
                  onClick={handleLogout}
                  className="p-2 text-emerald-500/50 hover:text-red-500 transition-colors flex items-center justify-center"
                  title="Sign out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-3 border-l border-[#22352a] pl-4">
                <Link to="/login" className="text-sm font-bold text-emerald-200/80 hover:text-indigo-600 transition-colors px-3 py-2">Sign In</Link>
                <Link to="/login" className="text-sm font-bold bg-emerald-600 text-white px-5 py-2.5 rounded-full hover:bg-emerald-500 transition-colors shadow-md">Sign Up</Link>
              </div>
            )}
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-emerald-200/80 hover:bg-[#1a271f] rounded-lg transition-colors ml-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0f0d] border-t border-[#1a271f] shadow-xl absolute w-full top-full left-0"
          >
            <div className="p-4 flex flex-col gap-4 max-w-7xl mx-auto">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className="absolute left-3 top-3 text-emerald-500/50 w-5 h-5 pointer-events-none" />
                <input 
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#22352a] bg-[#0f1712] focus:bg-[#131d17] focus:ring-2 focus:ring-indigo-500 outline-none text-sm text-emerald-50"
                />
              </form>
              
              <div className="flex gap-4 border-b border-[#1a271f] pb-4">
                <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#0f1712] rounded-xl text-emerald-200/80 font-medium text-sm">
                  <Heart className="w-4 h-4" /> Wishlist ({wishlistItems.length})
                </Link>
              </div>
              
              {user ? (
                <>
                  <div className="flex items-center gap-3 py-2">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-emerald-50">{user.name}</p>
                      <p className="text-sm text-emerald-400/60">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    {user.role === 'admin' && (
                      <Link to="/admin" className="flex items-center gap-3 p-3 text-emerald-200/80 bg-[#0f1712] rounded-xl font-medium text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                        <Settings className="w-5 h-5" /> Admin Dashboard
                      </Link>
                    )}
                    <button 
                      onClick={handleLogout}
                      className="flex items-center justify-center gap-2 p-3 bg-red-50 text-red-600 rounded-xl font-bold text-sm w-full"
                    >
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-2 pt-2">
                  <Link to="/login" className="w-full text-center py-3 rounded-xl bg-[#0f1712] text-emerald-50 font-bold" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
                  <Link to="/login" className="w-full text-center py-3 rounded-xl bg-indigo-600 text-white font-bold shadow-md" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
