import React, { useRef, useState } from 'react';
import { 
  GraduationCap, Trophy, Briefcase, Building2, Train, MapPin, 
  BookOpen, ChevronRight, Info, ChevronLeft 
} from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedExamsProps {
  onNavigate: (page: string) => void;
}

const FeaturedExams: React.FC<FeaturedExamsProps> = ({ onNavigate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    // Adjust startX to be relative to the container
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320; // card width + gap
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const categories = [
    {
      id: 'ese',
      title: 'ESE',
      subtitle: 'Engineering Services Examination',
      icon: Trophy,
      color: 'text-purple-400',
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?fit=crop&w=800&q=80",
      action: 'ese'
    },
    {
      id: 'gate',
      title: 'GATE',
      subtitle: 'Graduate Aptitude Test in Engineering',
      icon: GraduationCap,
      color: 'text-blue-400',
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?fit=crop&w=800&q=80",
      action: 'gate'
    },
    {
      id: 'psu',
      title: 'PSUs / R&D',
      subtitle: 'Public Sector Undertakings / Research & Development',
      icon: Briefcase,
      color: 'text-emerald-400',
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=800&q=80",
      action: 'psu'
    },
    {
      id: 'ssc',
      title: 'SSC JE',
      subtitle: 'Staff Selection Commission Junior Engineer',
      icon: Building2,
      color: 'text-orange-400',
      image: "https://images.unsplash.com/photo-1504307651254-35680f3366d4?fit=crop&w=800&q=80",
      action: 'ssc'
    },
    {
      id: 'rrb',
      title: 'RRB JE',
      subtitle: 'Railway Recruitment Board Junior Engineer',
      icon: Train,
      color: 'text-red-400',
      image: "https://images.unsplash.com/photo-1474487548417-781cb714c223?fit=crop&w=800&q=80",
      action: 'rrb'
    },
    {
      id: 'state',
      title: 'State AE / JE',
      subtitle: 'State Assistant Engineer / Junior Engineer',
      icon: MapPin,
      color: 'text-cyan-400',
      image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?fit=crop&w=800&q=80",
      action: 'state'
    },
    {
      id: 'non-tech',
      title: 'Non-Tech',
      subtitle: 'Non Technical Exam',
      icon: BookOpen,
      color: 'text-indigo-400',
      image: "https://images.unsplash.com/photo-1456324504439-367cee10d6e6?fit=crop&w=800&q=80",
      action: 'nontech'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-[120px] -z-10"></div>

       <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
             <div className="max-w-2xl">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-[#075d63]/5 border border-[#075d63]/10 rounded-full mb-6"
                >
                   <div className="w-1.5 h-1.5 rounded-full bg-gameGold animate-pulse"></div>
                   <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Select Your Goal</span>
                </motion.div>
                
                <motion.h2 
                  className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal to-teal-500">Examination</span>
                </motion.h2>
                
                <motion.p 
                  className="text-slate-500 text-base md:text-lg leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Gaurav’s Academy for Mentorship & Education, an online institute for engineering preparation in India; guiding students to excel in GATE, ESE, PSUs, SSC JE, and AE exams.
                </motion.p>
             </div>

             {/* Navigation Buttons */}
             <div className="flex gap-4">
                <button 
                  onClick={() => scroll('left')}
                  className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-gameTeal hover:text-white transition-all shadow-sm hover:shadow-xl group active:scale-95"
                >
                   <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-gameTeal hover:text-white transition-all shadow-sm hover:shadow-xl group active:scale-95"
                >
                   <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
             </div>
          </div>

          {/* Sliding Cards Container */}
          <div 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-6 overflow-x-auto pb-12 pt-4 no-scrollbar scroll-smooth snap-x select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
             {categories.map((item, index) => (
                <motion.div
                   key={item.id}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.05 }}
                   className="min-w-[280px] md:min-w-[320px] snap-center group pointer-events-auto"
                >
                   {/* Container - Bit more rounded rounded-[3rem] */}
                   <div className="relative h-[450px] rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl border border-slate-200/10 transition-all duration-500 isolate">
                      
                      {/* Background Image */}
                      <img 
                         src={item.image} 
                         alt={item.title} 
                         draggable="false"
                         className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                      />
                      
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                      <div className="absolute inset-0 border-[6px] border-white/5 rounded-[3rem] pointer-events-none group-hover:border-gameGold/20 transition-colors"></div>

                      {/* Content */}
                      <div className="absolute inset-0 p-8 pb-12 flex flex-col">
                         
                         {/* Floating Icon */}
                         <div className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-gameTeal transition-all shadow-2xl ${item.color}`}>
                            <item.icon size={24} strokeWidth={2} />
                         </div>

                         <div className="mt-auto">
                            <h3 className="text-4xl font-black text-white mb-1 tracking-tight drop-shadow-lg leading-tight">
                               {item.title}
                            </h3>
                            <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-6 line-clamp-2 min-h-[32px]">
                               {item.subtitle}
                            </p>
                            
                            {/* Buttons container */}
                            <div className="space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                               <button 
                                 onClick={(e) => {
                                   if (!isDragging) onNavigate('courses');
                                 }}
                                 className="w-full bg-[#f2c537] text-black py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl active:scale-[0.98]"
                               >
                                  Explore Courses <ChevronRight size={16} />
                               </button>
                               <button 
                                 onClick={(e) => {
                                   if (!isDragging) onNavigate(item.action);
                                 }}
                                 className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/20 transition-all active:scale-[0.98]"
                               >
                                  View Details <Info size={16} />
                               </button>
                            </div>
                         </div>

                      </div>
                   </div>
                </motion.div>
             ))}
          </div>

       </div>
    </section>
  );
};

export default FeaturedExams;