import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050806] text-emerald-100 pt-16 pb-8 border-t border-[#1a271f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                N
              </div>
              <span className="text-2xl font-bold tracking-tight font-outfit text-white">
                Negotia<span className="text-indigo-400">AI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-emerald-200/80">
              The world's first AI-powered negotiation e-commerce platform. We believe in fair prices, dynamic shopping, and intelligent buying experiences.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-[#0f1712] border border-[#1a271f] flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all text-emerald-200/80"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#0f1712] border border-[#1a271f] flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all text-emerald-200/80"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#0f1712] border border-[#1a271f] flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all text-emerald-200/80"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#0f1712] border border-[#1a271f] flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all text-emerald-200/80"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-outfit text-lg">Shop Categories</h3>
            <ul className="space-y-3">
              <li><Link to="/?category=Electronics" className="hover:text-indigo-400 transition-colors">Electronics</Link></li>
              <li><Link to="/?category=Home%20Essentials" className="hover:text-indigo-400 transition-colors">Home Essentials</Link></li>
              <li><Link to="/?category=Kitchen" className="hover:text-indigo-400 transition-colors">Kitchen</Link></li>
              <li><Link to="/?category=Clothing" className="hover:text-indigo-400 transition-colors">Clothing</Link></li>
              <li><Link to="/?category=Beauty%20%26%20Personal%20Care" className="hover:text-indigo-400 transition-colors">Beauty & Personal Care</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-outfit text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-indigo-400 transition-colors">How Negotiation Works</Link></li>
              <li><Link to="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-indigo-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-outfit text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Innovation Drive, Tech Park<br />Bengaluru, Karnataka 560001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-sm">support@negotia.ai</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#1a271f] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-300/70">
            &copy; {new Date().getFullYear()} NegotiaAI. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-emerald-300/70">
            <Link to="#" className="hover:text-emerald-50 transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-emerald-50 transition-colors">Terms</Link>
            <Link to="#" className="hover:text-emerald-50 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
