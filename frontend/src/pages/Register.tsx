import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { api } from '../api/client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      // Register customer (role is enforced by backend)
      await api.post('/auth/register', { name, email, password });
      
      // Auto login after registration
      const res = await api.post('/auth/login', { email, password });
      login(res.data.user, res.data.token);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1712] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-24 pb-16 px-4">
        <div className="w-full max-w-md bg-[#0a0f0d] p-8 rounded-2xl shadow-xl border border-[#1a271f]">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-white font-bold text-3xl shadow-lg mx-auto mb-4">
              N
            </div>
            <h2 className="text-2xl font-bold font-outfit text-emerald-50">Create an Account</h2>
            <p className="text-emerald-400/60 text-sm mt-2">Join NegotiaAI to start negotiating.</p>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-emerald-200/80 mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="auth-input"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-emerald-200/80 mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="auth-input"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-emerald-200/80 mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="auth-input"
                placeholder="••••••••"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-emerald-200/80 mb-1.5">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#0f1712] border border-[#22352a] rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-emerald-50 focus:text-gray-900"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-all disabled:opacity-70 flex justify-center mt-4"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : 'Sign Up'}
            </button>
            <div className="text-center mt-6">
              <span className="text-emerald-400/60 text-sm">Already have an account? </span>
              <a href="/login" className="text-indigo-400 hover:text-indigo-300 text-sm font-bold ml-1">Sign In</a>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
