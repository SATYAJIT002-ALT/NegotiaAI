import { useEffect, useState } from 'react';
import { api } from '../api/client';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { BarChart3, Users, Package, ShoppingBag, TrendingUp, DollarSign, Activity, X, ArrowLeft, XCircle } from 'lucide-react';

export default function Admin() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Views navigation
  const [activeView, setActiveView] = useState<'dashboard' | 'users' | 'rejected'>('dashboard');
  const [usersList, setUsersList] = useState<any[]>([]);
  const [rejectedList, setRejectedList] = useState<any[]>([]);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
      return;
    }

    const fetchDashboard = async () => {
      try {
        const { data } = await api.get('/analytics/dashboard');
        setMetrics(data);
      } catch (err) {
        console.error("Failed to fetch admin metrics", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, [user, navigate]);

  const fetchUsers = async () => {
    try {
      const { data } = await api.get('/analytics/users');
      setUsersList(data);
      setActiveView('users');
    } catch (err) {
      console.error(err);
    }
  };

  const fetchRejected = async () => {
    try {
      const { data } = await api.get('/analytics/negotiations/rejected');
      setRejectedList(data);
      setActiveView('rejected');
    } catch (err) {
      console.error(err);
    }
  };

  if (!user || user.role !== 'admin') return null;

  if (loading) return (
    <div className="min-h-screen bg-[#0f1712]">
      <Navbar />
      <div className="flex-1 flex items-center justify-center pt-32">
        <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
      </div>
    </div>
  );

  if (!metrics) return (
    <div className="min-h-screen bg-[#0f1712]">
      <Navbar />
      <div className="flex-1 flex items-center justify-center pt-32">
        <div className="text-red-400 font-medium">Failed to load dashboard metrics.</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f1712] font-sans">
      <Navbar />
      
      <main className="pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {activeView !== 'dashboard' && (
              <button 
                onClick={() => setActiveView('dashboard')}
                className="p-2 bg-[#1a271f] rounded-lg text-emerald-400 hover:text-emerald-300 transition"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <h1 className="text-3xl font-bold font-outfit text-emerald-50">Admin Dashboard</h1>
              <p className="text-emerald-400/60 mt-1">Platform analytics and negotiation performance</p>
            </div>
          </div>
          {activeView === 'dashboard' && (
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-emerald-500 transition">
              <BarChart3 className="w-4 h-4" /> Download Report
            </button>
          )}
        </div>
        
        {activeView === 'dashboard' && (
          <>
            {/* Top KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div 
                onClick={fetchUsers}
                className="bg-[#0a0f0d] p-6 rounded-2xl border border-[#1a271f] shadow-sm cursor-pointer hover:border-emerald-500/50 transition group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-50/10 text-blue-400 rounded-xl group-hover:bg-blue-500/20 transition">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-emerald-500/50">View Details</span>
                </div>
                <h3 className="text-3xl font-bold font-outfit text-emerald-50">{metrics.totalUsers}</h3>
                <p className="text-sm font-medium text-emerald-400/60 mt-1">Registered Users</p>
              </div>
              
              <div className="bg-[#0a0f0d] p-6 rounded-2xl border border-[#1a271f] shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-purple-50/10 text-purple-400 rounded-xl">
                    <Package className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-emerald-500/50">Active</span>
                </div>
                <h3 className="text-3xl font-bold font-outfit text-emerald-50">{metrics.totalProducts}</h3>
                <p className="text-sm font-medium text-emerald-400/60 mt-1">Products Listed</p>
              </div>
              
              <div className="bg-[#0a0f0d] p-6 rounded-2xl border border-[#1a271f] shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-emerald-50/10 text-emerald-400 rounded-xl">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-emerald-500/50">Total</span>
                </div>
                <h3 className="text-3xl font-bold font-outfit text-emerald-50">{metrics.totalOrders}</h3>
                <p className="text-sm font-medium text-emerald-400/60 mt-1">Completed Orders</p>
              </div>
              
              <div className="bg-[#0a0f0d] p-6 rounded-2xl border border-[#1a271f] shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-indigo-50/10 text-indigo-400 rounded-xl">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-emerald-500/50">Gross</span>
                </div>
                <h3 className="text-3xl font-bold font-outfit text-emerald-50">₹{(metrics.revenue / 1000).toFixed(1)}k</h3>
                <p className="text-sm font-medium text-emerald-400/60 mt-1">Total Revenue</p>
              </div>
            </div>
            
            {/* Deep Analytics */}
            <h2 className="text-xl font-bold font-outfit text-emerald-50 mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-indigo-400" /> Negotiation Intelligence
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-[#0a0f0d] p-6 rounded-2xl border border-[#1a271f] shadow-sm lg:col-span-1 flex flex-col justify-center">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-8 border-indigo-500/20 mb-4">
                    <span className="text-2xl font-bold text-indigo-400 font-outfit">{metrics.metrics.successRate.toFixed(1)}%</span>
                  </div>
                  <h4 className="font-bold text-emerald-50">Success Rate</h4>
                  <p className="text-sm text-emerald-400/60 mt-1">Percentage of negotiations resulting in a sale.</p>
                </div>
                
                <div className="space-y-4 pt-6 border-t border-[#1a271f]">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-emerald-300/70">Total Started</span>
                    <span className="font-bold text-emerald-50">{metrics.totalNegotiations}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-emerald-400">Accepted Deals</span>
                    <span className="font-bold text-emerald-500">{metrics.successfulNegotiations}</span>
                  </div>
                  <div 
                    onClick={fetchRejected}
                    className="flex justify-between items-center cursor-pointer hover:bg-[#1a271f] p-2 -mx-2 rounded-lg transition"
                  >
                    <span className="text-sm font-medium text-rose-400 flex items-center gap-2">
                      Rejected Deals <span className="text-xs bg-rose-500/20 px-2 py-0.5 rounded-full">View</span>
                    </span>
                    <span className="font-bold text-rose-500">{metrics.rejectedNegotiations}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-orange-400">Failed / Expired</span>
                    <span className="font-bold text-orange-500">{metrics.failedNegotiations}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#0a0f0d] p-6 rounded-2xl border border-[#1a271f] shadow-sm lg:col-span-2">
                <h3 className="font-bold text-emerald-50 mb-6">Performance Metrics</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-indigo-500/5 p-6 rounded-xl border border-indigo-500/20">
                    <TrendingUp className="w-8 h-8 text-indigo-400 mb-4" />
                    <p className="text-sm font-medium text-indigo-300 mb-1">Average Discount Given</p>
                    <h4 className="text-3xl font-bold font-outfit text-indigo-100">{metrics.metrics.averageDiscount.toFixed(2)}%</h4>
                    <p className="text-xs text-indigo-400/60 mt-2">Overall platform margin reduction via AI negotiations.</p>
                  </div>
                  
                  <div className="bg-emerald-500/5 p-6 rounded-xl border border-emerald-500/20">
                    <DollarSign className="w-8 h-8 text-emerald-400 mb-4" />
                    <p className="text-sm font-medium text-emerald-300 mb-1">Total Buyer Savings</p>
                    <h4 className="text-3xl font-bold font-outfit text-emerald-100">₹{metrics.buyerSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</h4>
                    <p className="text-xs text-emerald-400/60 mt-2">Total amount saved by consumers through successful bargaining.</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Registered Users View */}
        {activeView === 'users' && (
          <div className="bg-[#0a0f0d] rounded-2xl border border-[#1a271f] shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#1a271f]">
              <h2 className="text-xl font-bold font-outfit text-emerald-50">Registered Users</h2>
              <p className="text-sm text-emerald-400/60 mt-1">Listing of all {usersList.length} customer accounts</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#111a14] border-b border-[#1a271f] text-emerald-400/80 text-sm">
                    <th className="p-4 font-medium">Name</th>
                    <th className="p-4 font-medium">Email</th>
                    <th className="p-4 font-medium">Role</th>
                    <th className="p-4 font-medium">Registration Date</th>
                  </tr>
                </thead>
                <tbody>
                  {usersList.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-emerald-500/50">No users found.</td>
                    </tr>
                  ) : (
                    usersList.map(u => (
                      <tr key={u._id} className="border-b border-[#1a271f]/50 hover:bg-[#1a271f]/30 transition text-emerald-100">
                        <td className="p-4 font-medium">{u.name}</td>
                        <td className="p-4">{u.email}</td>
                        <td className="p-4 capitalize">{u.role}</td>
                        <td className="p-4">{new Date(u.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Rejected Deals View */}
        {activeView === 'rejected' && (
          <div className="bg-[#0a0f0d] rounded-2xl border border-[#1a271f] shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#1a271f]">
              <h2 className="text-xl font-bold font-outfit text-emerald-50 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-500" /> Rejected Deals
              </h2>
              <p className="text-sm text-emerald-400/60 mt-1">List of all {rejectedList.length} negotiations that were rejected</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#111a14] border-b border-[#1a271f] text-emerald-400/80 text-sm">
                    <th className="p-4 font-medium">Product</th>
                    <th className="p-4 font-medium">Buyer</th>
                    <th className="p-4 font-medium">Original Price</th>
                    <th className="p-4 font-medium">Rounds</th>
                    <th className="p-4 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {rejectedList.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-emerald-500/50">No rejected deals found.</td>
                    </tr>
                  ) : (
                    rejectedList.map(n => (
                      <tr key={n._id} className="border-b border-[#1a271f]/50 hover:bg-[#1a271f]/30 transition text-emerald-100">
                        <td className="p-4 flex items-center gap-3">
                          {n.productId?.image && (
                            <img src={n.productId.image} alt="Product" className="w-10 h-10 rounded object-cover" />
                          )}
                          <span className="font-medium line-clamp-1 max-w-[200px]">{n.productId?.name || 'Unknown'}</span>
                        </td>
                        <td className="p-4">
                          <div className="font-medium">{n.buyerId?.name || 'Unknown'}</div>
                          <div className="text-xs text-emerald-400/50">{n.buyerId?.email}</div>
                        </td>
                        <td className="p-4">₹{n.originalPrice?.toLocaleString()}</td>
                        <td className="p-4">{n.rounds}</td>
                        <td className="p-4 text-sm">{new Date(n.updatedAt).toLocaleString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
