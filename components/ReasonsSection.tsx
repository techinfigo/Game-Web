import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, Trophy, Target, Users, Award, Smartphone, 
  ShieldCheck, ChevronRight, Sparkles
} from 'lucide-react';

const ReasonsSection: React.FC = () => {
  // We default the middle card (index 3) as expanded
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(3);

  const reasons = [
    {
      id: "01",
      title: "The Innovator - Gaurav Babu Sir",
      desc: "A GATE & ESE expert with over 13 years of experience in the Mechanical and Civil domains, he has mentored 1 lakh+ students to successfully crack top engineering exams nationwide.",
      icon: Lightbulb,
      color: "bg-[#021f21]", // Darkest
    },
    {
      id: "02",
      title: "Creating Top Rankers",
      desc: "GAME consistently produces top ranks in competitive exams, empowering students to achieve academic excellence through structured guidance and proven strategies.",
      icon: Trophy,
      color: "bg-[#033438]", 
    },
    {
      id: "03",
      title: "Personalized Mentorship",
      desc: "Unlock your potential with one-to-one mentorship, fostering a strong guru-shishya bond tailored to your learning needs.",
      icon: Target,
      color: "bg-[#05494f]", 
    },
    {
      id: "04",
      title: "Unite & Upskill: THE GAME COMMUNITY",
      desc: "Connect with peers, engage in discussion forums, and master skills through collaborative learning in a supportive environment.",
      icon: Users,
      color: "bg-[#075d63]", // Brand Teal
    },
    {
      id: "05",
      title: "Advanced Interview & Career Guidance",
      desc: "Receive post-exam support with mock interviews and career counselling for PSUs, placements, and engineering career pathways.",
      icon: Award,
      color: "bg-[#09767e]", 
    },
    {
      id: "06",
      title: "Learn on the Go, Anytime You Want",
      desc: "Get endless learning opportunities, accessible anywhere through our high-performance learning platform.",
      icon: Smartphone,
      color: "bg-[#0b8f99]", 
    },
    {
      id: "07",
      title: "India's Leading e-Learning Provider",
      desc: "A premier platform with proven success rates for GATE, ESE, PSUs, SSC JE & All-State AE Exams.",
      icon: ShieldCheck,
      color: "bg-[#0da6b1]", // Lightest
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] font-black text-gameGold bg-gameBlack px-4 py-1.5 rounded-full uppercase tracking-[0.3em] mb-2 shadow-lg">
              <Sparkles size={12} className="inline mr-2" /> THE GAME ADVANTAGE
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              7 Reasons Why We Are <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal to-teal-500">India's Leading Choice</span>
            </h2>
            <div className="w-24 h-1.5 bg-gameGold rounded-full mt-4"></div>
          </motion.div>
        </div>

        {/* Interactive Infographic - Desktop View (7 Cards) */}
        <div className="hidden lg:flex items-stretch justify-center h-[650px] w-full gap-0 overflow-visible">
          {reasons.map((reason, index) => {
            const isActive = hoveredIndex === index;
            
            // Logic for clip-paths based on 7 cards
            let clipStyle = "";
            if (index < 3) {
                clipStyle = 'polygon(0 0, 100% 6%, 100% 94%, 0% 100%)';
            } else if (index > 3) {
                clipStyle = 'polygon(0 6%, 100% 0, 100% 100%, 0% 94%)';
            } else {
                clipStyle = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
            }

            return (
              <motion.div
                key={reason.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(3)}
                className={`
                  relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
                  ${isActive ? 'w-[35%] z-30 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)]' : 'w-[10.8%] z-10 opacity-95'}
                  ${reason.color} flex flex-col items-center justify-center p-6 text-white cursor-pointer
                  border-r border-white/10 last:border-r-0
                `}
                style={{
                    clipPath: clipStyle,
                    transform: isActive ? 'scale(1.04)' : 'scale(1)'
                }}
              >
                <div className={`flex flex-col items-center text-center w-full h-full transition-all duration-500 ${isActive ? 'px-10 justify-center' : 'px-2 justify-between py-12'}`}>
                  
                  {/* Icon Container */}
                  <div className={`
                    w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 
                    flex items-center justify-center shadow-xl transition-all duration-500 shrink-0
                    ${isActive ? 'scale-110 bg-white text-gameGold mb-10' : 'scale-90 opacity-40'}
                  `}>
                    <reason.icon size={isActive ? 36 : 28} strokeWidth={2.5} />
                  </div>

                  {/* ACTIVE STATE: Label -> Title -> Desc -> Button */}
                  {isActive && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="flex flex-col items-center"
                    >
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-gameGold mb-4 block">
                           Reason {parseInt(reason.id)}
                        </span>
                        <h3 className="font-black uppercase tracking-wider text-4xl mb-6 leading-[1.1]">
                           {reason.title}
                        </h3>
                        <p className="text-teal-50 text-xl font-medium leading-relaxed max-w-[380px] mb-10">
                           {reason.desc}
                        </p>
                        <div className="pt-8 border-t border-white/10 w-full flex justify-center">
                            <button className="bg-gameGold text-black px-10 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-all shadow-2xl group">
                                Explore <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                  )}

                  {/* INACTIVE STATE: Vertical Title -> Number */}
                  {!isActive && (
                    <>
                        <div className="relative h-full flex items-center justify-center">
                             <h3 className="font-black uppercase tracking-[0.2em] text-lg whitespace-nowrap transform -rotate-90 origin-center opacity-70">
                                {reason.title}
                             </h3>
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] opacity-40 shrink-0">
                           {parseInt(reason.id)}
                        </span>
                    </>
                  )}
                </div>

                {/* Decorative glow line at bottom */}
                <div className={`absolute bottom-0 left-0 w-full h-2 bg-gameGold transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View - Standard Stack */}
        <div className="lg:hidden flex flex-col gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`${reason.color} p-10 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group`}
            >
              <div className="relative z-10 flex items-start gap-8">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 shadow-lg border border-white/20 group-active:text-gameGold transition-colors">
                  <reason.icon size={30} />
                </div>
                <div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-gameGold mb-2 block">Reason {parseInt(reason.id)}</span>
                   <h3 className="text-2xl font-black mb-4 leading-tight">{reason.title}</h3>
                   <p className="text-teal-50/80 text-lg font-medium leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReasonsSection;