import React, { useState } from 'react';
import { Gift, Copy, Share2, Check, Users, Sparkles, ArrowRight, Wallet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ReferEarn: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = "GAME2025";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-gameGold/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gameTeal/5 rounded-full blur-[100px] pointer-events-none"></div>

       <div className="max-w-[1080px] mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden relative"
          >
             {/* Top Accent Line */}
             <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gameTeal via-gameGold to-gameTeal"></div>

             <div className="flex flex-col lg:flex-row">
                
                {/* LEFT CONTENT */}
                <div className="lg:w-[60%] p-8 md:p-14 relative z-10">
                   
                   {/* Badge */}
                   <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 px-4 py-1.5 rounded-full shadow-sm mb-8">
                      <Gift size={14} className="fill-amber-700" />
                      <span className="font-extrabold text-[10px] uppercase tracking-widest">Referral Program</span>
                   </div>

                   {/* Heading */}
                   <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.15]">
                      Invite Friends & <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal to-teal-600">
                         Unlock Exclusive Rewards
                      </span>
                   </h2>
                   
                   <p className="text-slate-600 mb-12 text-lg leading-relaxed max-w-lg font-medium">
                      Knowledge grows when shared. Invite your friends to GAME Academy. When they enroll, you both get <span className="font-black text-slate-900 bg-yellow-100 px-1 rounded">₹500 OFF</span> and premium study kits.
                   </p>
                   
                   {/* 3-Step Process */}
                   <div className="grid grid-cols-3 gap-4 mb-12 relative">
                      {/* Connecting Line */}
                      <div className="absolute top-5 left-10 right-10 h-0.5 bg-slate-100 -z-10 hidden sm:block"></div>

                      {[
                        { icon: Users, title: "Invite", desc: "Share your code" },
                        { icon: ArrowRight, title: "Enroll", desc: "Friend joins course" },
                        { icon: Wallet, title: "Earn", desc: "Get rewards instantly" }
                      ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center group cursor-default">
                           <div className="w-12 h-12 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-gameTeal mb-3 shadow-sm group-hover:border-gameTeal group-hover:scale-110 transition-all duration-300 relative z-10">
                              <step.icon size={20} strokeWidth={2.5} />
                           </div>
                           <h4 className="font-bold text-slate-900 text-sm mb-1">{step.title}</h4>
                           <p className="text-xs text-slate-500 font-medium">{step.desc}</p>
                        </div>
                      ))}
                   </div>

                   {/* Action Area */}
                   <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                      {/* Code Box */}
                      <div className="flex-1 bg-slate-50 p-2 rounded-xl border border-slate-200 border-dashed flex items-center justify-between group hover:border-gameTeal hover:bg-teal-50/30 transition-colors">
                         <div className="px-4">
                            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-0.5">Your Code</span>
                            <span className="font-mono font-black text-xl text-slate-900 tracking-wider">GAME2025</span>
                         </div>
                         <button 
                            onClick={handleCopy}
                            className="bg-white w-10 h-10 rounded-lg shadow-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:text-gameTeal hover:border-gameTeal transition-all active:scale-90"
                            title="Copy Code"
                         >
                            {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                         </button>
                      </div>
                      
                      {/* WhatsApp Button */}
                      <button className="bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-green-500/20 hover:bg-[#20bd5a] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 flex-1">
                         <Share2 size={20} /> Share via WhatsApp
                      </button>
                   </div>
                </div>
                
                {/* RIGHT VISUAL */}
                <div className="lg:w-[40%] bg-gradient-to-br from-[#fffbeb] to-[#fef3c7] relative overflow-hidden flex items-center justify-center min-h-[400px]">
                   {/* Decorative Circles */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
                   <div className="absolute bottom-0 left-0 w-64 h-64 bg-gameGold/20 rounded-full blur-3xl"></div>

                   {/* Pattern */}
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.15] mix-blend-multiply"></div>

                   {/* Floating Reward Card */}
                   <motion.div 
                     animate={{ y: [-10, 10, -10] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                     className="relative z-10 bg-white/80 backdrop-blur-xl border border-white/50 p-6 rounded-3xl shadow-2xl max-w-[280px] w-full"
                  >
                      <div className="flex justify-between items-start mb-6">
                         <div className="w-12 h-12 bg-gradient-to-br from-gameGold to-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                            <Gift size={24} />
                         </div>
                         <div className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wide">Active</div>
                      </div>
                      
                      <div className="space-y-1 mb-6">
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Reward Unlocked</p>
                         <h3 className="text-3xl font-black text-slate-900">₹500 OFF</h3>
                         <p className="text-sm font-medium text-slate-500">On your next course purchase</p>
                      </div>

                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: '100%' }}
                           transition={{ duration: 1.5, delay: 0.5 }}
                           className="h-full bg-gameTeal rounded-full"
                         ></motion.div>
                      </div>
                      <div className="mt-2 text-[10px] font-bold text-right text-gameTeal">100% Completed</div>
                   </motion.div>

                   {/* Floating Particles */}
                   <motion.div 
                      animate={{ y: [10, -10, 10], rotate: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-10 right-10 bg-white p-3 rounded-2xl shadow-lg border border-white/50"
                   >
                      <Sparkles className="text-gameGold" size={24} />
                   </motion.div>
                   
                   <motion.div 
                      animate={{ y: [-5, 5, -5], rotate: [0, -10, 0] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-12 left-10 bg-white p-3 rounded-2xl shadow-lg border border-white/50"
                   >
                      <Users className="text-gameTeal" size={24} />
                   </motion.div>

                </div>

             </div>
          </motion.div>
       </div>
    </section>
  );
};

export default ReferEarn;