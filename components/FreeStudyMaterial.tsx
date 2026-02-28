import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Lightbulb, PlayCircle, FileText, Zap, Sparkles, Check } from 'lucide-react';

const FreeStudyMaterial: React.FC = () => {
  const features = [
    {
      title: "Free Lectures",
      desc: "No fluff, just genius-level clarity! Master concepts in minutes.",
      icon: PlayCircle,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Topic Hacks",
      desc: "Weak areas? We turn them into your biggest strengths.",
      icon: Zap,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Exam-Ready 24/7",
      desc: "DPPs, NOTES, PYQs, Formula Sheets – accessible anytime.",
      icon: FileText,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gameGold/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gameTeal/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

           {/* Left: Image Side */}
           <motion.div
             className="relative flex justify-center lg:justify-start"
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
              {/* Abstract Diamond Background */}
              <div className="absolute top-1/2 left-1/2 lg:left-[45%] -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-[#f2c537] rounded-[3rem] rotate-45 z-0 shadow-2xl shadow-yellow-500/20"></div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 md:top-0 md:left-0 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
              >
                 <BookOpen size={32} className="text-gameTeal" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-4 md:right-0 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                 <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Check size={20} strokeWidth={3} />
                 </div>
                 <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Status</div>
                    <div className="text-sm font-black text-slate-900">100% Free</div>
                 </div>
              </motion.div>

              {/* Main Image */}
              <div className="relative z-10 w-[300px] md:w-[380px] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
                 <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?fit=crop&w=600&h=800&q=80"
                    alt="Student with Tablet"
                    className="w-full h-auto object-cover"
                 />
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-gameTeal/20 to-transparent mix-blend-overlay"></div>
              </div>
           </motion.div>

           {/* Right: Content Side */}
           <div className="lg:pl-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                 {/* Header */}
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-gameTeal/5 border border-gameTeal/20 text-gameTeal text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                    <Sparkles size={12} fill="currentColor" /> Study Material
                 </div>

                 <div className="relative mb-6">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15]">
                       Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal to-teal-500">Preparation Today</span>
                    </h2>
                    {/* Floating bulb icon next to title */}
                    <div className="absolute -top-6 right-0 md:right-20 hidden lg:block">
                        <div className="relative">
                           <BookOpen size={40} className="text-slate-200" strokeWidth={1.5} />
                           <div className="absolute -top-2 -right-2 bg-gameGold rounded-full p-1 border-2 border-white shadow-sm">
                              <Lightbulb size={14} className="text-black fill-white" />
                           </div>
                        </div>
                    </div>
                 </div>

                 <p className="text-slate-600 text-lg font-medium mb-10 leading-relaxed">
                    Ready to outsmart the competition? Let’s roll!
                 </p>

                 {/* Feature Cards */}
                 <div className="space-y-4 mb-10">
                    {features.map((item, i) => (
                       <motion.div
                          key={i}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-5 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-gameTeal/30 hover:bg-white hover:shadow-lg hover:shadow-gameTeal/5 transition-all duration-300 group"
                       >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                             <item.icon size={24} />
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                             <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                       </motion.div>
                    ))}
                 </div>

                 {/* Social Proof */}
                 <div className="flex items-center gap-4 mb-8">
                    <div className="flex -space-x-3">
                       {[1,2,3,4].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                             <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                          </div>
                       ))}
                    </div>
                    <p className="text-sm font-bold text-slate-500">
                       Used by <span className="text-gameTeal underline decoration-2 underline-offset-2">10,000+ students</span>
                    </p>
                 </div>

                 {/* CTA */}
                 <a 
                    href="https://docs.google.com/spreadsheets/d/1xi1kyaIeNijUVVmLWXl-rzwaEUu5V8GrknNFtjOWP5s/edit?gid=0#gid=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#075d63] hover:bg-[#054a4f] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group decoration-none inline-flex"
                 >
                    Register for Free
                    <div className="bg-white/10 rounded-full p-1 group-hover:bg-gameGold group-hover:text-black transition-colors">
                       <ArrowRight size={16} />
                    </div>
                 </a>

                 {/* Tags */}
                 <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-slate-100">
                    <span className="bg-gameGold text-black px-3 py-1 text-[10px] font-black uppercase rounded-md">FREE TESTS</span>
                    {['PRACTICE SETS', 'FREE LECTURES', 'FORMULA SHEETS', 'LECTURE NOTES', 'ASSIGNMENTS'].map((tag, i) => (
                       <span key={i} className="bg-slate-100 text-slate-500 px-3 py-1 text-[10px] font-bold uppercase rounded-md hover:bg-gameTeal hover:text-white transition-colors cursor-default">
                          {tag}
                       </span>
                    ))}
                 </div>

              </motion.div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default FreeStudyMaterial;