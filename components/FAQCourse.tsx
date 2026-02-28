
import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, Phone, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQCourse: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "How can I enroll in GAME Courses?", 
      a: "Check out the Course Section, where all available courses are listed, and choose the one that best matches your goals and timeline." 
    },
    { 
      q: "Does GAME provide free content for students?", 
      a: "Yes. Students can access free learning resources on our website, mobile app, and YouTube channel. All free content is available to students across India." 
    },
    { 
      q: "Does GAME provide notes for all paid courses?", 
      a: "Yes, students can access lecture notes directly from Application in the content section of each course." 
    },
    { 
      q: "Does GAME provide notes for free YouTube lectures?", 
      a: "Yes, students can access the notes of Free YouTube lectures through the Knowledge ka Pitaara (button)" 
    },
    { 
      q: "Is GAME good for SSC-JE exams?", 
      a: "Absolutely! SSC-JE coaching at GAME is specifically designed to help candidates prepare effectively for the SSC-JE exam." 
    },
    { 
      q: "Can I crack GATE/ESE/ISRO/BARC by joining GAME?", 
      a: "Yes. GAME provides structured courses, expert guidance, and comprehensive resources to help you succeed in GATE/ESE/ISRO/BARC and other technical exams as well. Your dedication and consistent effort will be key to achieving a top score." 
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
           
           {/* Left Column - Sticky Header */}
           <div className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#075d63]/10 text-[#075d63] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                    <HelpCircle size={14} /> Course Queries
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                    Got Questions? <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#075d63] to-teal-500">We Help.</span>
                 </h2>
                 
                 <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
                    Clear your doubts about our batches, materials, and teaching style. We want you to be confident in your choice.
                 </p>

                 {/* Support Card */}
                 <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-200 relative overflow-hidden group hover:shadow-lg transition-all">
                    <div className="relative z-10">
                       <h4 className="text-xl font-bold text-slate-900 mb-2">Need Exam Guidance?</h4>
                       <p className="text-slate-500 text-sm mb-6">Talk to our mentors for a personalized study plan.</p>
                       
                       <div className="flex gap-3">
                          <button className="flex-1 bg-[#075d63] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#054a4f] transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1">
                             <MessageCircle size={18} /> Chat
                          </button>
                          <button className="flex-1 bg-white text-slate-900 border border-slate-200 py-3 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                             <Phone size={18} /> Call
                          </button>
                       </div>
                    </div>
                 </div>
              </motion.div>
           </div>

           {/* Right Column - Accordion */}
           <div className="lg:col-span-7">
              <div className="space-y-4">
                 {faqs.map((faq, i) => (
                    <motion.div 
                       key={i} 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                          openIndex === i 
                          ? 'border-[#075d63] shadow-lg shadow-[#075d63]/10 ring-1 ring-[#075d63]/10' 
                          : 'border-slate-200 shadow-sm hover:border-[#075d63]/50'
                       }`}
                    >
                       <button 
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                          className="w-full flex justify-between items-center p-6 text-left cursor-pointer"
                       >
                          <span className={`font-bold text-lg pr-4 ${openIndex === i ? 'text-[#075d63]' : 'text-slate-800'}`}>
                             {faq.q}
                          </span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                             openIndex === i ? 'bg-[#075d63] text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-[#075d63]/10'
                          }`}>
                             {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                          </div>
                       </button>
                       
                       <AnimatePresence>
                          {openIndex === i && (
                             <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                             >
                                <div className="px-6 pb-6 pt-0">
                                   <div className="h-px w-full bg-slate-100 mb-4"></div>
                                   <p className="text-slate-600 leading-relaxed font-medium">
                                      {faq.a}
                                   </p>
                                </div>
                             </motion.div>
                          )}
                       </AnimatePresence>
                    </motion.div>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default FAQCourse;
