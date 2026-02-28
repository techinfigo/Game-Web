
import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Sparkles, MessageSquare, Search, 
  User, ArrowRight, Star, Crown, 
  ChevronRight, PlayCircle, CheckCircle2,
  Medal, Quote, ExternalLink
} from 'lucide-react';

// Single source of truth interface based on the Rankers sheet
interface Ranker {
  id: string;
  name: string;          // Mapping: NAME
  designation: string;   // Mapping: Designation
  category: string;      // Mapping: Category (GATE, ESE, etc)
  description?: string;  // Mapping: Student Quote/Feedback
  image: string;         // Mapping: Marketing Image URL
  feedbackUrl?: string;  // Mapping: Feedback URL
  videoUrl?: string;     // Mapping: Podcast/Video URL
}

const RankerSkeleton = () => (
  <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden h-full flex flex-col animate-pulse">
    <div className="aspect-[4/5] bg-slate-200" />
    <div className="p-8 space-y-4">
      <div className="h-7 bg-slate-200 rounded-full w-3/4" />
      <div className="h-4 bg-slate-100 rounded-full w-1/2" />
      <div className="space-y-2 pt-4">
        <div className="h-3 bg-slate-50 rounded-full w-full" />
        <div className="h-3 bg-slate-50 rounded-full w-5/6" />
      </div>
      <div className="mt-auto pt-8 flex gap-3">
        <div className="h-12 bg-slate-100 rounded-2xl flex-1" />
        <div className="h-12 bg-slate-100 rounded-2xl flex-1" />
      </div>
    </div>
  </div>
);

const RankersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [rankers, setRankers] = useState<Ranker[]>([]);
  const [loading, setLoading] = useState(true);

  // DATA FETCH: Fetching directly from the simulated sheet source
  useEffect(() => {
    const fetchRankersFromSheet = async () => {
      setLoading(true);
      try {
        // Simulating the fetch behavior with high-quality mock data representing the sheet
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const data: Ranker[] = [
          {
            id: "1",
            name: "Abhishek Singh",
            designation: "AIR 1 - GATE 2024",
            category: "GATE",
            description: "The conceptual depth and visualization techniques provided by Gaurav Sir are unmatched. It made the toughest subjects feel like a game.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=600&q=80",
            feedbackUrl: "#",
            videoUrl: "https://youtube.com/watch?v=1"
          },
          {
            id: "2",
            name: "Sneha Reddy",
            designation: "AIR 15 - ESE 2023",
            category: "ESE",
            description: "ESE requires a different level of consistency. The structured roadmap at GAME Academy kept me focused through all three stages.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=600&q=80",
            feedbackUrl: "#"
          },
          {
            id: "3",
            name: "Vikram Malhotra",
            designation: "Selected - ONGC",
            category: "PSU",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=600&q=80",
            videoUrl: "https://youtube.com/watch?v=3"
          },
          {
            id: "4",
            name: "Ananya Das",
            designation: "Selected - SSC JE (CPWD)",
            category: "SSC-JE",
            description: "The Excellence Course for SSC JE is a complete package. The non-tech part was handled exceptionally well.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=600&q=80",
            feedbackUrl: "#",
            videoUrl: "https://youtube.com/watch?v=5"
          },
          {
            id: "5",
            name: "Rahul Verma",
            designation: "AIR 8 - GATE 2024",
            category: "GATE",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=600&q=80",
            feedbackUrl: "#"
          },
          {
            id: "6",
            name: "Amit Patel",
            designation: "AIR 22 - ESE 2023",
            category: "ESE",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=600&q=80",
            videoUrl: "https://youtube.com/watch?v=6"
          }
        ];
        
        setRankers(data);
      } catch (error) {
        console.error("Error updating rankers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRankersFromSheet();
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'GATE', 'ESE', 'SSC-JE', 'PSU'];

  const filteredRankers = useMemo(() => {
    return rankers.filter(r => {
      const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            r.designation.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeFilter === 'All' || r.category === activeFilter;
      return matchesSearch && matchesCategory;
    });
  }, [rankers, searchQuery, activeFilter]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-gameTeal selection:text-white -mt-20">
      
      {/* PREMIUM HERO SECTION */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-white">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gameGold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

         <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-10">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-gameGold shadow-sm">
                    <Trophy size={16} className="fill-gameGold" />
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Success Records</span>
               </div>

               <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
                  THE HALL OF <br/>
                  <span className="text-gameTeal underline decoration-gameGold decoration-8 underline-offset-8">EXCELLENCE</span>
               </h1>
               
               <p className="text-xl md:text-2xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed mt-10">
                  Celebrating the brilliance and hard work of students who mastered the engineering GAME.
               </p>

               <div className="flex justify-center items-center gap-4 mt-12">
                  <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-slate-200 rounded-full"></div>
                  <div className="flex -space-x-3">
                     {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-lg">
                           <img src={`https://i.pravatar.cc/150?img=${i + 15}`} alt="Achiever" className="w-full h-full object-cover" />
                        </div>
                     ))}
                  </div>
                  <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-slate-200 rounded-full"></div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* INTERACTIVE GRID HUD */}
      <section className="py-24 bg-white relative scroll-mt-20">
         <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            
            {/* HUD Bar */}
            <div className="sticky top-24 z-40 mb-20 bg-white/80 backdrop-blur-xl border border-slate-100 p-5 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 flex flex-col lg:flex-row items-center justify-between gap-6">
               
               <div className="relative w-full lg:w-96 group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-gameTeal transition-colors" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search Rankers..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border-none rounded-2xl px-12 py-4 text-sm font-bold focus:ring-4 focus:ring-gameTeal/5 focus:bg-white transition-all outline-none"
                  />
               </div>

               <div className="flex items-center gap-2 p-1 bg-slate-50 rounded-2xl border border-slate-100 w-full lg:w-auto overflow-x-auto no-scrollbar">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`
                        px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap
                        ${activeFilter === cat 
                          ? 'bg-white text-gameTeal shadow-md ring-1 ring-black/5' 
                          : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'
                        }
                      `}
                    >
                      {cat}
                    </button>
                  ))}
               </div>

               <div className="hidden lg:flex items-center gap-4 text-[10px] font-black text-slate-300 uppercase tracking-widest border-l border-slate-100 pl-8">
                  {loading ? 'SYNCING...' : `MATCHES: ${filteredRankers.length}`}
               </div>
            </div>

            {/* CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
               <AnimatePresence mode="popLayout">
                  {loading ? (
                    [...Array(6)].map((_, i) => <RankerSkeleton key={i} />)
                  ) : filteredRankers.length > 0 ? (
                    filteredRankers.map((ranker, index) => (
                      <motion.div
                          key={ranker.id}
                          layout
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          className="group flex flex-col bg-white rounded-[3.5rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:border-gameTeal/20 transition-all duration-500 overflow-hidden h-full"
                      >
                          {/* Image Box */}
                          <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 shrink-0">
                            <img 
                                src={ranker.image} 
                                alt={ranker.name} 
                                loading="lazy"
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                            
                            {/* HUD Over Image */}
                            <div className="absolute top-8 left-8 flex flex-col gap-2">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-gameGold shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                                  <Medal size={24} />
                                </div>
                                <span className="px-3 py-1 rounded-lg bg-gameTeal text-white text-[9px] font-black uppercase tracking-widest shadow-lg border border-white/10 w-fit">
                                  {ranker.category}
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-10 text-white">
                                <h3 className="text-4xl font-black mb-1 leading-none tracking-tight group-hover:text-gameGold transition-colors">
                                  {ranker.name}
                                </h3>
                                <p className="text-slate-300 text-xs font-black uppercase tracking-[0.2em]">
                                  {ranker.designation}
                                </p>
                            </div>
                          </div>

                          {/* Content Body */}
                          <div className="p-10 flex flex-col flex-grow relative z-10">
                            
                            {ranker.description && (
                                <div className="mb-12 relative">
                                  <Quote size={40} className="absolute -top-4 -left-4 text-slate-100 opacity-50 pointer-events-none" />
                                  <p className="text-slate-500 text-base font-bold leading-relaxed italic relative z-10 pl-4 border-l-2 border-gameGold">
                                      {ranker.description}
                                  </p>
                                </div>
                            )}

                            {/* Buttons */}
                            <div className="mt-auto flex flex-col gap-4">
                                {ranker.videoUrl && (
                                  <a 
                                      href={ranker.videoUrl} 
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="w-full inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest hover:bg-gameTeal transition-all shadow-xl active:scale-[0.98] group/btn overflow-hidden relative"
                                  >
                                      <PlayCircle size={18} className="fill-current text-gameGold" /> 
                                      Success Story Podcast
                                  </a>
                                )}
                                
                                {ranker.feedbackUrl && (
                                  <a 
                                      href={ranker.feedbackUrl} 
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="w-full inline-flex items-center justify-center gap-3 bg-white text-slate-700 border border-slate-200 px-8 py-5 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest hover:bg-slate-50 hover:text-gameTeal hover:border-gameTeal/30 transition-all shadow-sm active:scale-[0.98] group/btn"
                                  >
                                      <MessageSquare size={18} className="group-hover:scale-110 transition-transform" /> 
                                      Student Feedback
                                  </a>
                                )}

                                {!ranker.videoUrl && !ranker.feedbackUrl && (
                                   <div className="flex items-center gap-3 text-slate-300 justify-center py-4 opacity-50">
                                      <CheckCircle2 size={16} />
                                      <span className="text-[10px] font-black uppercase tracking-widest">Verified Profile</span>
                                   </div>
                                )}
                            </div>
                          </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-40 flex flex-col items-center justify-center text-center px-6">
                       <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }} 
                          animate={{ scale: 1, opacity: 1 }}
                          className="w-32 h-32 rounded-[3rem] bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 mb-10 shadow-inner"
                       >
                          <User size={60} strokeWidth={1.5} />
                       </motion.div>
                       <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
                         Rankers will be updated soon.
                       </h3>
                       <p className="text-slate-500 font-bold max-w-md mx-auto text-lg leading-relaxed">
                         We are currently verifying the latest result sheet from GATE, ESE and other technical examinations.
                       </p>
                       <button 
                          onClick={() => {setSearchQuery(''); setActiveFilter('All');}}
                          className="mt-10 px-8 py-3 rounded-xl bg-gameTeal text-white font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl"
                       >
                          Clear Selection
                       </button>
                    </div>
                  )}
               </AnimatePresence>
            </div>
         </div>
      </section>

      {/* PREMIUM CTA SECTION */}
      <section className="py-32 bg-gameTeal relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#0b8a91,_transparent)] opacity-40"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         
         <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center text-white">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
               <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tight leading-[1.1]">
                  YOUR NAME COULD BE <br/>
                  <span className="text-gameGold">ON THIS WALL</span>
               </h2>
               
               <p className="text-teal-50 text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-16 opacity-90 leading-relaxed">
                  Join India's most trusted mentorship platform. Experience the visualized learning protocol that creates AIR 1s.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-white text-gameTeal px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-gameGold hover:text-black transition-all shadow-2xl hover:-translate-y-2 flex items-center justify-center gap-3 group">
                     START YOUR JOURNEY <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-transparent border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                     EXPLORE COURSES
                  </button>
               </div>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

export default RankersPage;
