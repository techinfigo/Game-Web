import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, PlayCircle, Star, Briefcase, GraduationCap } from 'lucide-react';

const students = [
  { name: "Priya Sharma", rank: "AIR 15 (ESE)", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=400&q=80" },
  { name: "Rahul Verma", rank: "Selected (PSU)", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&q=80" },
  { name: "Amit Patel", rank: "AIR 8 (GATE)", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=400&q=80" },
  { name: "Sneha Reddy", rank: "AIR 22 (ESE)", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=400&q=80" },
  { name: "Vikram Das", rank: "Selected (BARC)", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=600&q=80" },
  { name: "Ananya Ray", rank: "AIR 1 (GATE ME)", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=400&q=80" },
  { name: "Siddharth S.", rank: "AIR 45 (ESE)", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=400&q=80" },
  { name: "Kavita J.", rank: "Selected (IOCL)", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=400&q=80" },
  { name: "Rohan M.", rank: "AIR 12 (SSC-JE)", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=400&q=80" },
  { name: "Megha Gupta", rank: "AIR 4 (ESE)", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=400&q=80" },
  { name: "Ishaan Kohli", rank: "Selected (ONGC)", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=400&q=80" },
  { name: "Tanya Bisht", rank: "AIR 31 (GATE)", img: "https://images.unsplash.com/photo-1554151228-14d9def656ec?fit=crop&w=400&q=80" },
];

const VerticalSlider = ({ items, speed, reverse = false }: { items: typeof students, speed: number, reverse?: boolean }) => {
  const doubledItems = [...items, ...items, ...items];
  return (
    <div className="flex flex-col gap-6 h-full py-0">
      <motion.div
        animate={{ 
          y: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"] 
        }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex flex-col gap-6"
      >
        {doubledItems.map((student, idx) => (
          <div 
            key={idx} 
            className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl border-[6px] border-white bg-white group"
          >
            <img src={student.img} className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" alt={student.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="bg-gameGold text-black text-[8px] font-black uppercase px-2 py-0.5 rounded-md w-fit mb-1 shadow-lg">
                {student.rank}
              </div>
              <p className="text-xs font-black leading-tight drop-shadow-md">{student.name}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-white overflow-hidden min-h-[90vh] lg:min-h-screen flex flex-col pt-0 pb-0">
      
      {/* Dynamic Decor Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full flex-grow flex flex-col justify-end">
        <div className="grid lg:grid-cols-12 gap-12 items-end min-h-[80vh] lg:min-h-[90vh]"> 
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 text-center lg:text-left z-40 mx-auto lg:mx-0 pb-16 lg:pb-32">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
             >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full mb-8 shadow-sm">
                   <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gameGold opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gameGold"></span>
                   </span>
                   <span className="text-xs font-black text-slate-500 tracking-widest uppercase">
                      #1 ONLINE INSTITUTE FOR GATE & ESE
                   </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-6 tracking-tighter">
                   Crack <span className="text-gameTeal">Competitive</span> <br/>
                   Exams Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameGoldDark to-gameGold">Pro Player</span>
                </h1>
                
                <p className="text-lg text-slate-500 mb-10 leading-relaxed font-bold max-w-lg mx-auto lg:mx-0">
                   Join India's most trusted mentorship platform. <br className="hidden md:block" />
                   Experience visualized learning with <br />
                   <span className="text-gameTeal font-black">Gaurav Babu Sir</span> <span className="text-slate-900 font-black">( 13+ yrs Teaching Exp. ).</span>
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
                    <button 
                      onClick={() => onNavigate('gate')}
                      className="bg-gameTeal text-white px-8 md:px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-gameTeal/30 hover:bg-gameTealDark hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group whitespace-nowrap"
                    >
                       SELECT OUR GOAL <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => onNavigate('jobs')}
                      className="bg-white text-slate-900 border-2 border-slate-200 px-8 md:px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 hover:border-gameTeal/30 transition-all flex items-center justify-center gap-3 shadow-xl whitespace-nowrap"
                    >
                       <Briefcase size={20} className="text-gameTeal" /> JOB UPDATES
                    </button>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-slate-200/60">
                   <div>
                      <div className="text-3xl font-black text-slate-900 leading-none mb-1">100k+</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Aspirants</div>
                   </div>
                   <div className="w-px h-10 bg-slate-200"></div>
                   <div>
                      <div className="text-3xl font-black text-slate-900 leading-none mb-1">5000+</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Selections</div>
                   </div>
                   <div className="w-px h-10 bg-slate-200"></div>
                   <div>
                      <div className="flex items-center gap-1.5 text-gameGold">
                         <span className="text-3xl font-black text-slate-900 leading-none mb-1">4.9</span>
                         <Star size={20} fill="currentColor" />
                      </div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Rating</div>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* RIGHT VISUAL AREA - Mentor touches the floor */}
          <div className="lg:col-span-7 relative h-full flex items-end justify-center">
             
             {/* 1. BACKGROUND SUCCESS WALL */}
             <div className="absolute inset-0 z-0 overflow-hidden mask-fade-top-bottom pointer-events-none opacity-40">
                <div className="flex gap-6 h-full px-4 lg:px-10 scale-90 lg:scale-100 translate-y-[-5%] lg:translate-y-0">
                   <div className="flex-1">
                      <VerticalSlider items={students.slice(0, 4)} speed={45} />
                   </div>
                   <div className="flex-1 mt-20">
                      <VerticalSlider items={students.slice(4, 8)} speed={35} reverse />
                   </div>
                   <div className="flex-1">
                      <VerticalSlider items={students.slice(8, 12)} speed={55} />
                   </div>
                   <div className="flex-1 mt-20 hidden xl:block">
                      <VerticalSlider items={students.slice(0, 4)} speed={40} reverse />
                   </div>
                </div>
             </div>

             {/* 2. MENTOR IMAGE */}
             <motion.div 
                className="relative z-30 w-full flex items-end justify-center h-full"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
             >
                <div className="relative flex items-end justify-center w-full h-full">
                    <img 
                      src="https://pngimg.com/uploads/businessman/businessman_PNG6582.png" 
                      alt="Gaurav Babu Sir" 
                      className="h-[85vh] lg:h-[95vh] w-auto object-contain object-bottom drop-shadow-[0_-10px_60px_rgba(0,0,0,0.1)] z-30 block filter brightness-110 saturate-[1.1] mb-[-2px]"
                      onError={(e) => {
                        e.currentTarget.src = "https://www.freeiconspng.com/uploads/businessman-png-10.png";
                      }}
                    />

                    {/* Verified Badge */}
                    <motion.div 
                      initial={{ scale: 0, x: 50 }}
                      animate={{ scale: 1, x: 0 }}
                      transition={{ delay: 1.2, type: "spring" }}
                      className="absolute top-[35%] right-[-10%] lg:right-[-5%] bg-white/95 backdrop-blur-xl p-4 lg:p-5 rounded-[2.5rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.2)] flex items-center gap-4 border border-white/60 z-40"
                    >
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                          <CheckCircle2 size={24} strokeWidth={3} />
                      </div>
                      <div className="text-left whitespace-nowrap">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Verified</p>
                          <p className="text-lg font-black text-slate-900 leading-none">Ranker Results</p>
                      </div>
                    </motion.div>

                    {/* Name Plate - Refined based on screenshot */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }} 
                      className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white px-14 py-6 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] text-center z-40 border border-slate-50 min-w-[340px]"
                    >
                      <h3 className="text-[32px] font-extrabold text-[#0f172a] tracking-tight leading-none mb-3">Gaurav Babu Sir</h3>
                      <div className="h-[4px] w-14 bg-gameTeal mx-auto my-4 rounded-full"></div>
                      <div className="text-[11px] font-black tracking-[0.35em] text-[#075d63] uppercase">Founder & Mentor</div>
                    </motion.div>
                </div>
             </motion.div>

          </div>
        </div>
      </div>

      <style>{`
        .mask-fade-top-bottom {
          mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
        }
      `}</style>
    </section>
  );
};

export default Hero;