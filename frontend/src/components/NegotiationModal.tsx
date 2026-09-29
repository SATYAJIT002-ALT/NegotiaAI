import { useState, useRef, useEffect } from 'react';
import { api } from '../api/client';
import { useCartStore } from '../store/useCartStore';
import { X, Send, Check, Bot, User, Clock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function NegotiationModal({ product, onClose }: { product: any, onClose: () => void }) {
  const [negotiation, setNegotiation] = useState<any>(null);
  const [mode, setMode] = useState<'MANUAL' | 'AUTO'>('MANUAL');
  const [offer, setOffer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAgentTyping, setIsAgentTyping] = useState(false);
  
  const { addToCart } = useCartStore();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [negotiation?.messages, isAgentTyping]);

  useEffect(() => {
    if (!negotiation) return;
    
    // Auto-step logic for Buyer Agent mode
    if (negotiation.status === 'ACTIVE' && negotiation.mode === 'AUTO') {
      const messages = negotiation.messages;
      const lastMsg = messages[messages.length - 1];
      
      // If the last message was from the seller, the buyer agent needs to respond
      if (lastMsg && lastMsg.sender === 'SELLER') {
        setIsAgentTyping(true);
        const timer = setTimeout(async () => {
          try {
            const res = await api.post(`/negotiations/${negotiation.negotiationId}/auto-step`);
            setNegotiation(res.data);
          } catch (err: any) {
             console.error(err);
          } finally {
            setIsAgentTyping(false);
          }
        }, 1500); // 1.5 seconds simulated thinking time
        
        return () => clearTimeout(timer);
      }
    }
  }, [negotiation]);

  const startNegotiation = async (selectedMode: 'MANUAL' | 'AUTO') => {
    setError('');
    setLoading(true);
    setMode(selectedMode);
    try {
      const res = await api.post('/negotiations/start', { 
        productId: product.productId, 
        mode: selectedMode 
      });
      setNegotiation(res.data);
    } catch (err: any) {
      setError(err.response?.data?.error || err.message || 'Failed to start negotiation');
    } finally {
      setLoading(false);
    }
  };

  const sendOffer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!offer || isNaN(Number(offer))) return;
    
    setLoading(true);
    try {
      const res = await api.post(`/negotiations/${negotiation.negotiationId}/offer`, { offer: Number(offer) });
      setNegotiation(res.data);
      setOffer('');
    } catch (err: any) {
      alert(err.response?.data?.error || 'Failed to send offer');
    } finally {
      setLoading(false);
    }
  };

  const acceptOffer = async () => {
    setLoading(true);
    try {
      const res = await api.post(`/negotiations/${negotiation.negotiationId}/accept`);
      setNegotiation(res.data);
    } catch (err: any) {
      alert(err.response?.data?.error || 'Failed to accept offer');
    } finally {
      setLoading(false);
    }
  };

  const rejectOffer = async () => {
    setLoading(true);
    try {
      const res = await api.post(`/negotiations/${negotiation.negotiationId}/reject`);
      setNegotiation(res.data);
    } catch (err: any) {
      alert(err.response?.data?.error || 'Failed to reject offer');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      productId: product.productId,
      name: product.name,
      image: product.image,
      originalPrice: product.originalPrice,
      negotiatedPrice: negotiation.negotiatedPrice,
      quantity: 1,
      negotiationId: negotiation.negotiationId
    });
    onClose();
    navigate('/cart');
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#0a0f0d] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[700px] max-h-[90vh]"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#1a271f] flex items-center justify-between bg-[#0a0f0d] z-10">
          <div className="flex items-center gap-4">
            <img src={product.image} alt={product.name} className="w-12 h-12 object-contain bg-[#0f1712] rounded-lg p-1" />
            <div>
              <h3 className="font-bold text-emerald-50 font-outfit text-lg">Negotiate Price</h3>
              <p className="text-sm text-emerald-400/60 line-clamp-1 max-w-[300px]">{product.name} • Original: ₹{product.originalPrice}</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#131d17] text-emerald-400/60 hover:bg-slate-200 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!negotiation ? (
          <div className="flex-1 overflow-y-auto p-8 bg-[#0f1712] flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-outfit text-emerald-50 mb-2">Choose Negotiation Mode</h4>
                <p className="text-emerald-400/60">How would you like to negotiate the price of ₹{product.originalPrice}?</p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              )}

              <div className="space-y-4">
                <button 
                  onClick={() => startNegotiation('MANUAL')}
                  disabled={loading}
                  className="w-full p-5 rounded-2xl border-2 border-[#22352a] hover:border-indigo-400 hover:bg-indigo-50/50 bg-[#0a0f0d] transition-all flex items-center gap-5 group text-left disabled:opacity-50"
                >
                  <div className="w-12 h-12 rounded-full bg-[#131d17] group-hover:bg-indigo-100 text-emerald-400/60 group-hover:text-indigo-600 flex items-center justify-center flex-shrink-0 transition-colors">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-emerald-50 text-lg">Manual Mode</h5>
                    <p className="text-sm text-emerald-400/60 mt-0.5">Chat directly with the AI seller agent.</p>
                  </div>
                </button>

                <button 
                  onClick={() => startNegotiation('AUTO')}
                  disabled={loading}
                  className="w-full p-5 rounded-2xl border-2 border-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-all flex items-center gap-5 text-left shadow-[0_0_20px_rgba(79,70,229,0.1)] disabled:opacity-50"
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-indigo-950 text-lg">Buyer Agent</h5>
                    <p className="text-sm text-indigo-700 mt-0.5">Let our AI negotiate on your behalf.</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
              
              {/* Status Header */}
              <div className="flex justify-between items-center bg-[#0a0f0d] p-3 rounded-xl shadow-sm border border-[#1a271f] text-sm font-medium text-emerald-300/70 mb-4 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-500" />
                  <span>Rounds: {negotiation.rounds} / {negotiation.maxRounds}</span>
                </div>
                <div className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                  negotiation.status === 'ACTIVE' ? 'bg-blue-100 text-blue-700' :
                  negotiation.status === 'ACCEPTED' ? 'bg-green-100 text-green-700' :
                  negotiation.status === 'FAILED' || negotiation.status === 'REJECTED' ? 'bg-red-100 text-red-700' :
                  'bg-[#1a271f] text-emerald-200/80'
                }`}>
                  {negotiation.status}
                </div>
              </div>

              {negotiation.messages.map((msg: any, idx: number) => {
                const isBuyer = msg.sender === 'BUYER' || msg.sender === 'BUYER_AGENT';
                const isSystem = msg.sender === 'SYSTEM';

                if (isSystem) {
                  return (
                    <div key={idx} className="flex justify-center my-6">
                      <span className="bg-[#1a271f] text-emerald-300/70 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                        {msg.text}
                      </span>
                    </div>
                  );
                }

                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={idx} 
                    className={`flex ${isBuyer ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-3 max-w-[80%] ${isBuyer ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-auto ${
                        isBuyer ? 'bg-indigo-600 text-white' : 'bg-emerald-500 text-white'
                      }`}>
                        {msg.sender === 'BUYER' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      
                      <div>
                        <span className={`text-[10px] font-bold text-emerald-500/50 mb-1 block ${isBuyer ? 'text-right' : 'text-left'}`}>
                          {msg.sender.replace('_', ' ')}
                        </span>
                        <div className={`px-5 py-3 shadow-sm ${
                          isBuyer 
                            ? 'bg-indigo-600 text-white rounded-2xl rounded-br-sm'
                            : 'bg-[#0a0f0d] border border-[#22352a] text-emerald-100 rounded-2xl rounded-bl-sm'
                        }`}>
                          <p className="leading-relaxed">{msg.text}</p>
                          
                          {/* Manual Accept/Reject Action Area */}
                          {msg.sender === 'SELLER' && msg.proposedPrice && negotiation.status === 'ACTIVE' && mode === 'MANUAL' && idx === negotiation.messages.length - 1 && (
                            <div className="mt-4 pt-3 border-t border-[#1a271f] flex justify-end gap-2">
                              <button 
                                onClick={rejectOffer} 
                                disabled={loading} 
                                className="px-3 py-1.5 rounded-lg text-xs font-bold text-red-600 hover:bg-red-50 transition"
                              >
                                Reject
                              </button>
                              <button 
                                onClick={acceptOffer} 
                                disabled={loading} 
                                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition flex items-center gap-1"
                              >
                                <Check className="w-3 h-3" />
                                Accept ₹{msg.proposedPrice}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Typing indicator */}
              {isAgentTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-end">
                  <div className="flex gap-3 max-w-[80%] flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 mt-auto">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                       <span className="text-[10px] font-bold text-emerald-500/50 mb-1 block text-right">BUYER AGENT</span>
                       <div className="px-5 py-4 bg-indigo-600 rounded-2xl rounded-br-sm flex items-center gap-1.5">
                         <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                         <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                         <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />

              {/* Status Banners */}
              {negotiation.status === 'ACCEPTED' && mode === 'AUTO' && (
                 <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#0a0f0d] border-2 border-indigo-100 rounded-2xl p-6 text-center mx-auto shadow-xl max-w-md relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                   <h4 className="text-xl font-bold font-outfit mb-4 text-emerald-50">DEAL PROPOSED</h4>
                   <div className="space-y-2 mb-6">
                     <div className="flex justify-between items-center text-sm">
                       <span className="text-emerald-400/60">Final Negotiated Price:</span>
                       <span className="font-bold text-emerald-50 text-lg">₹{negotiation.negotiatedPrice}</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                       <span className="text-emerald-400/60">Original Price:</span>
                       <span className="font-semibold text-emerald-500/50 line-through">₹{product.originalPrice}</span>
                     </div>
                     <div className="flex justify-between items-center text-sm bg-green-50 p-2 rounded-lg">
                       <span className="text-green-700 font-bold">You Save:</span>
                       <span className="font-bold text-green-700">₹{product.originalPrice - negotiation.negotiatedPrice}</span>
                     </div>
                   </div>
                   <div className="flex gap-3">
                     <button onClick={rejectOffer} className="flex-1 py-3 px-4 rounded-xl font-bold bg-[#131d17] text-emerald-200/80 hover:bg-slate-200 transition">
                       Reject Deal
                     </button>
                     <button onClick={handleAddToCart} className="flex-1 py-3 px-4 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md">
                       Accept Deal
                     </button>
                   </div>
                 </motion.div>
              )}

              {negotiation.status === 'ACCEPTED' && mode === 'MANUAL' && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl p-6 text-center mx-auto shadow-lg">
                  <h4 className="text-xl font-bold font-outfit mb-2 flex items-center justify-center gap-2">
                    <Check className="w-6 h-6" /> Deal Accepted!
                  </h4>
                  <p className="mb-6 opacity-90">You secured this item for ₹{negotiation.negotiatedPrice} (Savings: ₹{product.originalPrice - negotiation.negotiatedPrice})</p>
                  <button onClick={handleAddToCart} className="bg-[#0a0f0d] text-green-700 hover:bg-green-50 py-3 px-8 rounded-xl font-bold transition w-full shadow-sm">
                    Add to Cart at ₹{negotiation.negotiatedPrice}
                  </button>
                </motion.div>
              )}

              {(negotiation.status === 'FAILED' || negotiation.status === 'REJECTED') && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#131d17] border border-[#22352a] text-emerald-200/80 rounded-2xl p-6 text-center mx-auto">
                  <h4 className="text-lg font-bold font-outfit mb-1">Negotiation Ended</h4>
                  <p className="text-sm opacity-80">We couldn't reach an agreement this time.</p>
                </motion.div>
              )}
            </div>

            {/* Input area for MANUAL mode only */}
            {negotiation.status === 'ACTIVE' && mode === 'MANUAL' && (
              <form onSubmit={sendOffer} className="p-4 bg-[#0a0f0d] border-t border-[#1a271f] flex gap-3 z-10 shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.1)]">
                <div className="relative flex-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500/50 font-medium">₹</span>
                  <input
                    type="number"
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                    placeholder="Enter your counter offer..."
                    className="w-full pl-9 pr-4 py-3 bg-[#0f1712] border border-[#22352a] rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    disabled={loading}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loading || !offer}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 font-bold flex items-center justify-center rounded-xl transition disabled:opacity-50 shadow-md"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send
                </button>
              </form>
            )}
            
            {/* Auto Mode UI Info footer (optional) */}
            {negotiation.status === 'ACTIVE' && mode === 'AUTO' && (
               <div className="p-4 bg-[#0a0f0d] border-t border-[#1a271f] flex justify-center z-10 shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.1)]">
                  <span className="text-xs font-bold text-emerald-500/50 uppercase tracking-wider flex items-center gap-2">
                    <Bot className="w-4 h-4" /> Buyer Agent is negotiating on your behalf...
                  </span>
               </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}
