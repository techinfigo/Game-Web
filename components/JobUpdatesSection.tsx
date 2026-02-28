
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Building2, ArrowRight, Sparkles, ChevronRight, 
  Radio, Zap, Clock, LayoutGrid, ChevronLeft, CalendarDays,
  Target, Award, Wallet
} from 'lucide-react';

interface JobUpdatesSectionProps {
  onNavigate: (page: string) => void;
}

const JobUpdatesSection: React.FC<JobUpdatesSectionProps> = ({ onNavigate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const recentJobs = [
    {
      id: 1,
      title: "Assistant Engineer (Trainee)",
      org: "UPRVUNL",
      branch: ["Mechanical", "Electrical"],
      lastDate: "Oct 25, 2025",
      type: "Govt Job",
      isNew: true,
      salary: "₹56,100 - 1.7L"
    },
    {
      id: 2,
      title: "Management Trainee (Tech)",
      org: "Coal India Limited",
      branch: ["Mechanical", "Civil"],
      lastDate: "Nov 05, 2025",
      type: "PSU",
      isNew: true,
      salary: "₹50,000 - 1.6L"
    },
    {
      id: 3,
      title: "Junior Engineer (Civil)",
      org: "CPWD",
      branch: ["Civil"],
      lastDate: "Oct 12, 2025",
      type: "Govt Job",
      isNew: false,
      salary: "₹35,400 - 1.1L"
    },
    {
      id: 4,
      title: "Scientific Assistant",
      org: "BARC",
      branch: ["Mechanical", "Electronics"],
      lastDate: "Oct 30, 2025",
      type: "R&D",
      isNew: false,
      salary: "₹44,900"
    },
    {
      id: 5,
      title: "Graduate Apprentice",
      org: "ISRO - ISTRAC",
      branch: ["Mechanical"],
      lastDate: "Nov 15, 2025",
      type: "Govt Job",
      isNew: true,
      salary: "₹9,000 (Stipend)"
    },
    {
      id: 6,
      title: "Assistant Manager (ME)",
      org: "NHAI",
      branch: ["Mechanical"],
      lastDate: "Dec 05, 2025",
      type: "PSU",
      isNew: false,
      salary: "₹60,000 - 1.8L"
    }
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; 
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-gameTealDark relative overflow-hidden">
      <div className="absolute inset-0 bg-graph-paper opacity-[0.03] pointer-events-none invert"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-gameGold text-[9px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gameGold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gameGold"></span>
              </span>
              Live Job Hub
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter mb-4">
              Latest Career <br/>
              <span className="text-gameGold">Opportunities</span>
            </h2>
            <p className="text-teal-50/70 text-sm md:text-base font-bold leading-relaxed max-w-lg">
              Daily engineering job alerts from 200+ sources.
            </p>
          </motion.div>

          <div className="flex items-center gap-3 mb-2">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gameGold hover:text-black transition-all shadow-xl backdrop-blur-sm group"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gameGold hover:text-black transition-all shadow-xl backdrop-blur-sm group"
            >
              <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-5 overflow-x-auto pb-16 pt-4 px-6 -mx-6 no-scrollbar scroll-smooth snap-x select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {recentJobs.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="min-w-[250px] md:min-w-[270px] snap-center group relative bg-white p-5 rounded-[2rem] border border-white/80 transition-all duration-500 shadow-xl hover:-translate-y-2 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gameTeal group-hover:bg-gameTeal group-hover:text-white transition-all duration-500">
                  <Building2 size={20} />
                </div>
                {job.isNew && (
                  <span className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gameGold/10 text-gameTealDark text-[8px] font-black uppercase tracking-widest border border-gameGold/20">
                    <Zap size={8} className="fill-gameGold" /> New
                  </span>
                )}
              </div>

              <div className="mb-4 flex-grow">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[8px] font-black text-gameGoldDark uppercase tracking-wider">{job.org}</span>
                </div>
                <h3 className="text-base font-black text-slate-900 leading-tight group-hover:text-gameTeal transition-colors line-clamp-2">
                  {job.title}
                </h3>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                   <LayoutGrid size={14} className="text-gameTeal" />
                   <span className="text-[10px] font-bold text-slate-800 truncate">{job.branch.join(', ')}</span>
                </div>
                
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                   <CalendarDays size={14} className="text-gameGoldDark" />
                   <span className="text-[10px] font-black text-slate-900">{job.lastDate}</span>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-teal-50/40 border border-teal-100/50">
                   <Wallet size={14} className="text-gameTeal" />
                   <span className="text-[10px] font-black text-gameTealDark">{job.salary}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button 
                  onClick={() => !isDragging && onNavigate('jobs')}
                  className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-gameTeal transition-all group/btn"
                >
                   Details <ChevronRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
                <div className="px-2 py-1 rounded-md bg-gameBlack text-white text-[7px] font-black uppercase tracking-widest group-hover:bg-gameTeal transition-colors">
                   {job.type}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 relative p-1 rounded-[2.5rem] bg-gradient-to-r from-gameGold/20 via-white/5 to-gameGold/20 overflow-hidden group"
        >
          <div className="bg-gameTealDark rounded-[2.3rem] p-8 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/5">
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10 text-center md:text-left">
              <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-gameGold group-hover:scale-105 transition-transform duration-700">
                <Radio size={32} className="animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">Stay Updated</h3>
                <p className="text-teal-50/60 text-xs md:text-sm font-bold max-w-md leading-relaxed">
                  Join 35k+ engineers for real-time alerts.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10 w-full lg:w-auto">
              <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-gameTealDark bg-slate-800 overflow-hidden shadow-lg">
                       <img src={`https://i.pravatar.cc/150?img=${i + 40}`} alt="Engineer" className="w-full h-full object-cover" />
                    </div>
                 ))}
                 <div className="w-8 h-8 rounded-full border-2 border-gameTealDark bg-gameGold flex items-center justify-center text-black font-black text-[8px]">
                    +35k
                 </div>
              </div>
              <button className="bg-white text-gameBlack px-8 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-gameGold hover:text-black transition-all shadow-xl flex items-center gap-2 group/tg whitespace-nowrap active:scale-95">
                Join Channel <ChevronRight size={14} className="group-hover/tg:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobUpdatesSection;
