
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-slate-400 py-16 font-sans border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
           
           {/* Brand Column (Span 4) */}
           <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gameTeal rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-[0_0_15px_rgba(7,93,99,0.5)]">
                    G
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold leading-none text-white tracking-tight">GAME</span>
                  <span className="text-[10px] text-gameGold font-bold uppercase tracking-[0.25em]">Academy</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                 India's premier institute for Engineering Services preparation. We don't just teach; we mentor the future builders of the nation.
              </p>
              <div className="flex gap-3">
                 {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gameTeal hover:text-gameGold transition-all duration-300 group border border-white/5 hover:border-gameTeal">
                       <Icon size={16} className="group-hover:scale-110 transition-transform" />
                    </a>
                 ))}
              </div>
           </div>

           {/* Quick Links (Span 2) */}
           <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                 <span className="text-gameGold font-black mr-2">|</span> Quick Links
              </h4>
              <ul className="space-y-3">
                 {[
                    { label: 'About Us', page: 'about' },
                    { label: 'Success Stories', page: 'achievers' },
                    { label: 'Strategy', page: 'hacks' },
                    { label: 'Resources', page: 'resources' },
                    { label: 'Contact', page: 'contact' }
                 ].map((link, i) => (
                    <li key={i}>
                       <button 
                          onClick={() => onNavigate && onNavigate(link.page)}
                          className="text-sm hover:text-gameGold transition-colors flex items-center gap-1 group w-full text-left"
                       >
                          <ChevronRight size={12} className="text-gameTeal group-hover:text-gameGold group-hover:translate-x-0.5 transition-all" />
                          {link.label}
                       </button>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Courses (Span 3) */}
           <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                 <span className="text-gameGold font-black mr-2">|</span> Popular Courses
              </h4>
              <ul className="space-y-3">
                 {['GATE Mechanical', 'ESE Civil Engineering', 'SSC-JE Electrical', 'State AE Exams', 'General Studies', 'Interview Guidance'].map((item, i) => (
                    <li key={i}>
                       <a href="#" className="text-sm hover:text-gameGold transition-colors flex items-center gap-2 group">
                          <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-gameGold transition-colors"></span>
                          {item}
                       </a>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Contact Info (Span 3) */}
           <div className="lg:col-span-3 space-y-8">
              <div>
                <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                   <span className="text-gameGold font-black mr-2">|</span> Contact Us
                </h4>
                <ul className="space-y-4">
                   <li className="flex items-start gap-3 group">
                      <MapPin size={18} className="text-gameTeal mt-0.5 shrink-0 group-hover:text-gameGold transition-colors" />
                      <span className="text-sm text-slate-400 leading-relaxed group-hover:text-white transition-colors">
                         Sector 62, Noida, Uttar Pradesh - 201301
                      </span>
                   </li>
                   <li className="flex items-center gap-3 group cursor-pointer">
                      <Phone size={18} className="text-gameTeal shrink-0 group-hover:text-gameGold transition-colors" />
                      <span className="text-sm text-white font-medium group-hover:text-gameGold transition-colors">+91 999-888-7777</span>
                   </li>
                   <li className="flex items-center gap-3 group cursor-pointer">
                      <Mail size={18} className="text-gameTeal shrink-0 group-hover:text-gameGold transition-colors" />
                      <span className="text-sm text-white font-medium group-hover:text-gameGold transition-colors">info@gameacademy.in</span>
                   </li>
                </ul>
              </div>

              {/* Download App - Restructured */}
              <div>
                 <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-4 opacity-80 flex items-center">
                    <span className="text-gameGold font-black mr-2">|</span> Download the App
                 </h5>
                 <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] px-3 py-2.5 rounded-xl border border-white/10 transition-all group">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white group-hover:text-gameGold transition-colors shrink-0">
                           <path d="M3,20.5V3.5C3,2.91,3.34,2.39,3.84,2.15L13.69,12L3.84,21.85C3.34,21.6,3,21.09,3,20.5M19.16,17.48L14.5,12.81L14.19,12.5L4.54,22.15C4.76,22.19,5,22.15,5.2,22.04L19.16,17.48M19.16,6.52L5.2,1.96C5,1.85,4.76,1.81,4.54,1.85L14.19,11.5L19.16,6.52M20.57,8.68L21.83,9.41C22.28,9.66,22.28,10.34,21.83,10.59L20.57,11.32L15.3,6.05L15.3,17.95L20.57,8.68Z" />
                        </svg>
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[9px] font-bold text-slate-500 group-hover:text-slate-400 transition-colors">GET IT ON</span>
                            <span className="text-xs font-bold text-white group-hover:text-gameGold transition-colors">Google Play</span>
                        </div>
                    </button>
                    <button className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] px-3 py-2.5 rounded-xl border border-white/10 transition-all group">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white group-hover:text-gameGold transition-colors shrink-0">
                           <path d="M17.5,15.3c0-3.4,2.8-5,3-5.1c-1.6-2.2-4.1-2.6-4.9-2.6c-2-0.2-4,1.2-5,1.2c-1,0-2.6-1.2-4.3-1.2c-2.2,0.1-4.2,1.3-5.3,3.3c-2.3,3.9-0.6,9.8,1.6,13c1.1,1.5,2.4,3.2,4.1,3.1c1.6-0.1,2.2-1,4.2-1c2,0,2.5,1,4.2,1c1.7,0,2.9-1.5,4-3.1c1.2-1.8,1.7-3.6,1.7-3.7C20.6,20.1,17.5,18.9,17.5,15.3z M14.3,5.5c0.9-1.1,1.5-2.6,1.3-4.1c-1.3,0.1-2.9,0.9-3.8,2C11,4.5,10.3,6,10.5,7.5C12,7.6,13.5,6.6,14.3,5.5z" />
                        </svg>
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[9px] font-bold text-slate-500 group-hover:text-slate-400 transition-colors">Download on</span>
                            <span className="text-xs font-bold text-white group-hover:text-gameGold transition-colors">App Store</span>
                        </div>
                    </button>
                 </div>
              </div>
           </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
           <div>
              © 2024 GAME Academy. All Rights Reserved.
           </div>
           <div className="flex gap-6">
              <button onClick={() => onNavigate && onNavigate('privacy')} className="hover:text-gameGold transition-colors">Privacy Policy</button>
              <button onClick={() => onNavigate && onNavigate('terms')} className="hover:text-gameGold transition-colors">Terms of Use</button>
              <button onClick={() => onNavigate && onNavigate('refund')} className="hover:text-gameGold transition-colors">Refund Policy</button>
              <button onClick={() => onNavigate && onNavigate('takedown')} className="hover:text-gameGold transition-colors">Takedown Policy</button>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
