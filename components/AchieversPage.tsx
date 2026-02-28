
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Quote, Star, Trophy, Video, MessageSquare, Sparkles, Crown, CheckCircle2, ArrowRight } from 'lucide-react';

interface AchieversPageProps {
  initialFilter?: 'all' | 'video' | 'story';
}

const AchieversPage: React.FC<AchieversPageProps> = ({ initialFilter = 'all' }) => {
  const [filter, setFilter] = useState<'all' | 'video' | 'story'>(initialFilter);

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilter(initialFilter);
  }, [initialFilter]);

  const allStories = [
    { 
      type: 'video',
      id: 1,
      name: "Rahul Singh", 
      rank: "AIR 1", 
      exam: "GATE ME 2023", 
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=600&h=750&q=80", 
      video: "#",
      featured: true 
    },
    { 
      type: 'story',
      id: 2,
      name: "Siddharth Verma", 
      exam: "GATE ME", 
      quote: "The conceptual clarity I got from Gaurav Sir is unmatched. Every complex topic was broken down into simple, digestible parts.", 
      rating: 5,
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=crop&w=200&h=200&q=80"
    },
    { 
      type: 'video',
      id: 3,
      name: "Priya Sharma", 
      rank: "AIR 5", 
      exam: "ESE CE 2023", 
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=600&h=750&q=80", 
      video: "#" 
    },
    { 
      type: 'story',
      id: 4,
      name: "Ananya Das", 
      exam: "SSC-JE", 
      quote: "GAME Academy doesn't just teach you subjects; they teach you how to think like an engineer. Best decision of my life.", 
      rating: 5,
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=200&h=200&q=80"
    },
    { 
      type: 'video',
      id: 5,
      name: "Amit Patel", 
      rank: "AIR 12", 
      exam: "SSC EE 2023", 
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=600&h=750&q=80", 
      video: "#" 
    },
    { 
      type: 'story',
      id: 6,
      name: "Rajesh Kumar", 
      exam: "ESE Civil", 
      quote: "The mentorship program kept me on track when I felt lost. It's not just a coaching center, it's a family.", 
      rating: 5,
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=200&h=200&q=80"
    },
    { 
      type: 'video',
      id: 7,
      name: "Neha Gupta", 
      rank: "AIR 3", 
      exam: "GATE CS 2023", 
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=600&h=750&q=80", 
      video: "#" 
    },
    { 
      type: 'story',
      id: 8,
      name: "Meera Iyer", 
      exam: "PSU (IOCL)", 
      quote: "I cleared IOCL interview in my first attempt thanks to the mock interview sessions. Highly recommended!", 
      rating: 5,
      img: "https://images.unsplash.com/photo-1554151228-14d9def656ec?fit=crop&w=200&h=200&q=80"
    },
    { 
      type: 'story',
      id: 9,
      name: "Kabir Singh", 
      exam: "RRB-JE", 
      quote: "Affordable, accessible, and high quality. The free resources in Knowledge Pitaara were a lifesaver.", 
      rating: 4,
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=200&h=200&q=80"
    }
  ];

  const filteredStories = filter === 'all' ? allStories : allStories.filter(s => s.type === filter);

  return (
    <div className="pt-20 min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-gameTeal selection:text-white">
      
      {/* 1. Hero Section: Premium Dark Theme */}
      <section className="relative px-6 py-24 lg:py-32 overflow-hidden bg-[#0f1115] text-white">
         
         {/* Background Effects */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

         <div className="max-w-[1200px] mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                  <Crown size={14} className="text-gameGold fill-gameGold" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gameGold">Hall of Fame</span>
               </div>

               <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-none">
                  Celebrating <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal via-teal-400 to-gameGold">Excellence</span>
               </h1>

               <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                  Real stories of grit, perseverance, and triumph. Meet the students who turned their dreams into reality with GAME.
               </p>

               {/* Stats Row */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-10 mb-12">
                  {[
                     { val: "50+", label: "AIR 1 Ranks" },
                     { val: "5000+", label: "Selections" },
                     { val: "100Cr+", label: "Scholarships" },
                     { val: "4.9/5", label: "Student Rating" },
                  ].map((stat, i) => (
                     <div key={i} className="text-center">
                        <div className="text-3xl font-black text-white mb-1">{stat.val}</div>
                        <div className="text-xs font-bold text-gameTeal uppercase tracking-wider">{stat.label}</div>
                     </div>
                  ))}
               </div>

               {/* Filter Tabs */}
               <div className="inline-flex bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
                  {[
                    { id: 'all', label: 'All Stories', icon: Sparkles },
                    { id: 'video', label: 'Ranker Talks', icon: Video },
                    { id: 'story', label: 'Reviews', icon: MessageSquare }
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFilter(f.id as any)}
                      className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                        filter === f.id 
                        ? 'bg-gameTeal text-white shadow-lg' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <f.icon size={16} />
                      {f.label}
                    </button>
                  ))}
               </div>

            </motion.div>
         </div>
      </section>

      {/* 2. Content Grid */}
      <section className="py-24 px-6 bg-slate-50 relative min-h-screen">
         <div className="max-w-[1200px] mx-auto">
            
            {/* Masonry Layout */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
               <AnimatePresence mode="popLayout">
                  {filteredStories.map((item) => (
                     <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="break-inside-avoid"
                     >
                        {item.type === 'video' ? (
                           /* RANKER CARD */
                           <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-gameTeal/10 transition-all duration-300 cursor-pointer">
                              
                              <div className="relative aspect-[4/5] overflow-hidden">
                                 <img 
                                    src={item.img} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80"></div>
                                 
                                 {/* Play Button */}
                                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-gameGold text-black flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                                       <Play size={28} className="ml-1 fill-current" />
                                    </div>
                                 </div>

                                 {/* Rank Badge */}
                                 <div className="absolute top-4 left-4">
                                    <div className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-black px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-white/50">
                                       <Trophy size={12} className="text-gameGold fill-gameGold" /> {item.rank}
                                    </div>
                                 </div>
                              </div>

                              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                                 <div className="w-10 h-1 bg-gameGold rounded-full mb-3"></div>
                                 <h3 className="text-2xl font-bold mb-1 leading-tight">{item.name}</h3>
                                 <p className="text-slate-300 text-sm font-medium uppercase tracking-wide flex items-center gap-2">
                                    <CheckCircle2 size={14} className="text-gameTeal" /> {item.exam}
                                 </p>
                              </div>
                           </div>
                        ) : (
                           /* TESTIMONIAL CARD */
                           <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 relative group hover:border-gameTeal/30 transition-colors">
                              <Quote size={40} className="text-slate-100 absolute top-6 right-6" />
                              
                              <div className="flex items-center gap-4 mb-6 relative z-10">
                                 <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-gameTeal to-slate-200">
                                    <img src={item.img} alt={item.name} className="w-full h-full rounded-full object-cover border-2 border-white" />
                                 </div>
                                 <div>
                                    <h4 className="font-bold text-slate-900 text-base">{item.name}</h4>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{item.exam}</span>
                                 </div>
                              </div>

                              <div className="flex gap-1 mb-4 text-gameGold">
                                 {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} size={14} fill={idx < (item.rating || 0) ? "currentColor" : "none"} className={idx < (item.rating || 0) ? "" : "text-slate-200"} />
                                 ))}
                              </div>

                              <p className="text-slate-600 leading-relaxed text-[15px] font-medium mb-2 relative z-10">
                                 "{item.quote}"
                              </p>
                           </div>
                        )}
                     </motion.div>
                  ))}
               </AnimatePresence>
            </div>
         </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-24 bg-white border-t border-slate-100">
         <div className="max-w-[1080px] mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
               Be the Next <span className="text-gameTeal">Success Story</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
               Join thousands of students who have transformed their careers with GAME Academy. Your journey to AIR 1 starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="bg-gameTeal text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-gameTeal/20 hover:bg-gameTealDark hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  Explore Courses <ArrowRight size={20} />
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default AchieversPage;
