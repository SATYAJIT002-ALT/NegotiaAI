import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal, ChevronRight, Zap, ShieldCheck, Tag } from 'lucide-react';

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  // Parse query parameters
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  const categoryFilter = searchParams.get('category') || '';
  
  const [activeCategory, setActiveCategory] = useState(categoryFilter || 'All');

  useEffect(() => {
    // If URL has category, update state
    if (categoryFilter) setActiveCategory(categoryFilter);
    else if (!categoryFilter && activeCategory !== 'All') setActiveCategory('All');
  }, [categoryFilter]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = searchQuery 
        ? p.name.toLowerCase().includes(searchQuery) || 
          p.brand.toLowerCase().includes(searchQuery) || 
          p.category.toLowerCase().includes(searchQuery)
        : true;
      const matchesCategory = activeCategory === 'All' ? true : p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-[#0f1712] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Hero Section - Only show if not searching */}
        {!searchQuery && activeCategory === 'All' && (
          <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-6 lg:my-8">
            <div className="relative rounded-3xl overflow-hidden bg-[#0a0f0d] text-white shadow-xl border border-[#1a271f]">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 to-[#050806]/95 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000" 
                alt="Shopping Banner" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              
              <div className="relative z-20 px-6 py-12 md:py-16 md:px-12 lg:px-16 flex flex-col md:flex-row items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-3/4 lg:w-2/3"
                >
                  <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/30 border border-indigo-400/30 text-indigo-200 text-xs font-bold tracking-wider mb-4 backdrop-blur-md">
                    THE FUTURE OF E-COMMERCE
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-outfit leading-tight mb-4">
                    Don't Just Shop.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Negotiate Your Price.</span>
                  </h1>
                  <p className="text-base md:text-lg text-emerald-100/80 mb-8 max-w-xl leading-relaxed">
                    Experience dynamic pricing driven by AI. Bargain directly with our intelligent seller agents to get the best deals on premium products.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 bg-[#0f1712] border border-[#22352a] text-emerald-50 rounded-xl font-bold hover:bg-[#131d17] hover:border-[#1a271f] transition-all shadow-md text-sm">
                      Start Shopping
                    </button>
                    <button className="px-6 py-3 bg-indigo-600/30 text-white border border-indigo-500/40 rounded-xl font-bold hover:bg-indigo-600/50 backdrop-blur-md transition-all shadow-md text-sm">
                      Learn How It Works
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Features / Value Props */}
        {!searchQuery && activeCategory === 'All' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#0a0f0d] p-6 rounded-2xl shadow-sm border border-[#1a271f] flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-emerald-50 font-outfit mb-1">AI-Powered Deals</h3>
                  <p className="text-sm text-emerald-400/60">Negotiate in real-time with our smart AI seller to find your perfect price.</p>
                </div>
              </div>
              <div className="bg-[#0a0f0d] p-6 rounded-2xl shadow-sm border border-[#1a271f] flex items-start gap-4">
                <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
                  <Tag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-emerald-50 font-outfit mb-1">Exclusive Discounts</h3>
                  <p className="text-sm text-emerald-400/60">Unlock hidden margins that standard e-commerce stores keep to themselves.</p>
                </div>
              </div>
              <div className="bg-[#0a0f0d] p-6 rounded-2xl shadow-sm border border-[#1a271f] flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-xl text-green-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-emerald-50 font-outfit mb-1">Private & Secure</h3>
                  <p className="text-sm text-emerald-400/60">Your negotiated prices are locked to your session securely.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
          
          {/* Sidebar / Filters */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto overflow-x-hidden hide-scrollbar bg-[#0a0f0d] p-6 rounded-2xl border border-[#1a271f] shadow-sm">
              <div className="flex items-center gap-2 font-outfit font-bold text-lg mb-6 pb-4 border-b border-[#1a271f]">
                <Filter className="w-5 h-5 text-indigo-600" />
                Filters
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-emerald-50 mb-3 text-sm uppercase tracking-wider">Categories</h4>
                <div className="space-y-2">
                  {categories.map((cat, idx) => (
                    <button 
                      key={idx}
                      onClick={() => {
                        setActiveCategory(cat);
                        if (searchQuery) navigate('/'); // Clear search if clicking category
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeCategory === cat 
                          ? 'bg-indigo-50 text-indigo-700 font-medium' 
                          : 'text-emerald-300/70 hover:bg-[#131d17]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-emerald-50 mb-3 text-sm uppercase tracking-wider">Price Range</h4>
                <input type="range" className="w-full accent-indigo-600" />
                <div className="flex justify-between text-xs text-emerald-400/60 mt-2">
                  <span>₹0</span>
                  <span>₹500,000+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold font-outfit text-emerald-50">
                  {searchQuery ? `Search Results for "${searchQuery}"` : activeCategory === 'All' ? 'Trending Products' : `${activeCategory} Products`}
                </h2>
                <p className="text-emerald-400/60 text-sm mt-1">Showing {filteredProducts.length} products</p>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#0a0f0d] border border-[#22352a] rounded-lg text-sm font-medium text-emerald-200/80 hover:bg-[#131d17] transition-colors">
                  <SlidersHorizontal className="w-4 h-4" />
                  Sort By: Popular
                </button>
              </div>
            </div>

            {/* Grid */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="animate-pulse bg-[#0a0f0d] rounded-2xl h-[400px] border border-[#1a271f] shadow-sm">
                    <div className="h-64 bg-[#131d17] rounded-t-2xl"></div>
                    <div className="p-5 space-y-3">
                      <div className="h-4 bg-[#131d17] rounded w-1/3"></div>
                      <div className="h-5 bg-[#131d17] rounded w-3/4"></div>
                      <div className="h-6 bg-[#131d17] rounded w-1/2 mt-4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.productId} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-[#0a0f0d] rounded-2xl border border-[#1a271f] p-12 text-center shadow-sm">
                <div className="w-16 h-16 bg-[#0f1712] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-emerald-500/50" />
                </div>
                <h3 className="text-xl font-bold text-emerald-50 font-outfit mb-2">No products found</h3>
                <p className="text-emerald-400/60 max-w-md mx-auto">
                  We couldn't find anything matching your criteria. Try adjusting your filters or search terms.
                </p>
                <button 
                  onClick={() => {
                    navigate('/');
                    setActiveCategory('All');
                  }}
                  className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
