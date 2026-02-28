
import React, { useState } from 'react';
import { 
  ArrowRight, Clock, CheckCircle2, Star, Filter, Users, BookOpen, 
  GraduationCap, Building2, Search, LayoutGrid, X, Globe, Sparkles, 
  Zap, Crown, Microscope, Briefcase, Train, MapPin, Atom, Backpack, Lock, Calendar, ChevronRight, BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CourseGridProps {
  selectedExam: string;
  setSelectedExam: (exam: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const CourseGrid: React.FC<CourseGridProps> = ({ selectedExam, setSelectedExam, searchTerm, setSearchTerm }) => {
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);
  
  // Updated Category Order: SSC JE moved next to GATE / ESE
  const categories = [
    { id: 'GATE / ESE', label: 'GATE / ESE', icon: GraduationCap },
    { id: 'SSC JE', label: 'SSC JE', icon: Building2 }, 
    { id: 'Govt R&D', label: 'Govt R&D', icon: Microscope },
    { id: 'PSUs', label: 'PSUs', icon: Briefcase },
    { id: 'RRB JE', label: 'RRB JE', icon: Train },
    { id: 'State AE / JE', label: 'State AE / JE', icon: MapPin },
    { id: 'IIT-JEE / NEET', label: 'IIT-JEE / NEET', icon: Atom },
    { id: 'Non-Tech', label: 'Non-Tech', icon: BookOpen },
    { id: 'Class 9th - 12th', label: 'Class 9th - 12th', icon: Backpack },
  ];

  const allCourses = [
    // GATE / ESE Category
    {
      title: "Foundation Course (ME) 2025/2026",
      tagline: "Start Early, Finish Strong",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?fit=crop&w=800&q=80",
      duration: "26 Months",
      eligibility: "2nd/3rd Year",
      features: ["1200+ Hrs Content", "Weekly Tests", "1:1 Mentorship"],
      tag: "TWO-YEAR SUBSCRIPTION",
      tagColor: "bg-[#075d63] text-white",
      price: "₹35,000",
      originalPrice: "₹50,000",
      discount: "30% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "15.2k",
      liveCount: "420",
      rating: 4.9
    },
    {
      title: "Lakshya Course (ME) GATE 2025",
      tagline: "Focused & Time Bound",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?fit=crop&w=800&q=80",
      duration: "14 Months",
      eligibility: "Final Year / Droppers",
      features: ["Targeted Syllabus", "100+ Mock Exams", "Doubt Solving"],
      tag: "BEST SELLER",
      tagColor: "bg-[#f2c537] text-black",
      price: "₹24,999",
      originalPrice: "₹35,000",
      discount: "30% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#f2c537] hover:bg-[#d8b32f] text-black",
      enrolledCount: "8.5k",
      liveCount: "1,150",
      rating: 4.8
    },
    {
      title: "ESE (CE) Comprehensive 2025",
      tagline: "Engineering Services Mastery",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?fit=crop&w=800&q=80",
      duration: "18 Months",
      eligibility: "Civil Aspirants",
      features: ["Tech + Non-Tech", "Mains Answer Writing", "Interview Guide"],
      tag: "PREMIUM BATCH",
      tagColor: "bg-slate-800 text-white",
      price: "₹42,000",
      originalPrice: "₹60,000",
      discount: "30% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "4.8k",
      liveCount: "210",
      rating: 5.0
    },

    // Govt R&D
    {
      title: "ISRO Scientist/Engineer (ME)",
      tagline: "Reach for the Stars",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?fit=crop&w=800&q=80",
      duration: "6 Months",
      eligibility: "BE/B.Tech",
      features: ["ISRO Syllabus", "Previous Papers", "Interview Guidance"],
      tag: "TARGET BATCH",
      tagColor: "bg-blue-900 text-white",
      price: "₹8,999",
      originalPrice: "₹15,000",
      discount: "40% OFF",
      category: "Govt R&D",
      btnColor: "bg-blue-900 hover:bg-blue-800",
      enrolledCount: "3.2k",
      liveCount: "150",
      rating: 4.7
    },
    {
      title: "BARC OCES/DGFS Prep",
      tagline: "Nuclear Science Career",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?fit=crop&w=800&q=80",
      duration: "8 Months",
      eligibility: "GATE Qualified",
      features: ["Scientific Concepts", "Research Methodology", "Interview Focus"],
      tag: "SCIENTIFIC OFFICER",
      tagColor: "bg-teal-700 text-white",
      price: "₹10,500",
      originalPrice: "₹18,000",
      discount: "42% OFF",
      category: "Govt R&D",
      btnColor: "bg-teal-700 hover:bg-teal-800",
      enrolledCount: "1.8k",
      liveCount: "95",
      rating: 4.9
    },

    // PSUs
    {
      title: "PSU Excellence Batch (ME)",
      tagline: "HPCL, ONGC, NTPC & More",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fit=crop&w=800&q=80",
      duration: "12 Months",
      eligibility: "Graduates",
      features: ["Technical + HR", "Group Discussions", "Aptitude"],
      tag: "JOB ORIENTED",
      tagColor: "bg-orange-600 text-white",
      price: "₹14,999",
      originalPrice: "₹25,000",
      discount: "40% OFF",
      category: "PSUs",
      btnColor: "bg-orange-600 hover:bg-orange-700",
      enrolledCount: "5.5k",
      liveCount: "300",
      rating: 4.6
    },

    // SSC JE
    {
      title: "SSC-JE (EE) Selection Batch",
      tagline: "Crack Junior Engineer Exam",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbec40b?fit=crop&w=800&q=80",
      duration: "12 Months",
      eligibility: "Diploma & Degree",
      features: ["Tech + Non-Tech", "5000+ Questions", "Bilingual Classes"],
      tag: "NEW BATCH",
      tagColor: "bg-[#f2c537] text-black",
      price: "₹12,999",
      originalPrice: "₹20,000",
      discount: "35% OFF",
      category: "SSC JE",
      btnColor: "bg-[#f2c537] hover:bg-[#d8b32f] text-black",
      enrolledCount: "12.1k",
      liveCount: "850",
      rating: 4.8
    },
    {
      title: "SSC-JE (Civil) Ranker's Batch",
      tagline: "Build Your Govt Career",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?fit=crop&w=800&q=80",
      duration: "12 Months",
      eligibility: "Civil Engineers",
      features: ["RCC, Steel, Surveying", "Short Notes", "Doubt Sessions"],
      tag: "LIVE NOW",
      tagColor: "bg-emerald-600 text-white",
      price: "₹12,999",
      originalPrice: "₹20,000",
      discount: "35% OFF",
      category: "SSC JE",
      btnColor: "bg-emerald-600 hover:bg-emerald-700",
      enrolledCount: "10.5k",
      liveCount: "720",
      rating: 4.7
    },

    // RRB JE
    {
      title: "RRB-JE (ME) Express Batch",
      tagline: "Railway Recruitment Board",
      image: "https://images.unsplash.com/photo-1470137430626-983a37b8ea46?fit=crop&w=800&q=80",
      duration: "6 Months",
      eligibility: "Fast Track Prep",
      features: ["CBT-1 & CBT-2", "General Science", "100+ Mock Tests"],
      tag: "EXPRESS",
      tagColor: "bg-[#075d63] text-white",
      price: "₹8,999",
      originalPrice: "₹15,000",
      discount: "40% OFF",
      category: "RRB JE",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "9.3k",
      liveCount: "620",
      rating: 4.5
    },

    // State AE / JE
    {
      title: "UPPSC-AE Civil Batch",
      tagline: "State Engineering Services",
      image: "https://images.unsplash.com/photo-1591955506264-3f7a27e631e9?fit=crop&w=800&q=80",
      duration: "10 Months",
      eligibility: "B.Tech Civil",
      features: ["State Specific GK", "Hindi Language", "Technical Core"],
      tag: "STATE GOVT",
      tagColor: "bg-purple-600 text-white",
      price: "₹11,999",
      originalPrice: "₹18,000",
      discount: "33% OFF",
      category: "State AE / JE",
      btnColor: "bg-purple-600 hover:bg-purple-700",
      enrolledCount: "4.1k",
      liveCount: "250",
      rating: 4.6
    },

    // Non-Tech
    {
      title: "General Studies (GS) Master",
      tagline: "For ESE & State Exams",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?fit=crop&w=800&q=80",
      duration: "6 Months",
      eligibility: "All Branches",
      features: ["Hist, Pol, Geo, Eco", "Current Affairs", "ESE Ethics & ICT"],
      tag: "NON-TECH SPECIAL",
      tagColor: "bg-slate-200 text-slate-800",
      price: "₹5,999",
      originalPrice: "₹10,000",
      discount: "40% OFF",
      category: "Non-Tech",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "22k",
      liveCount: "1.5k",
      rating: 4.9
    },

    // No IIT-JEE courses - inactive
  ];

  const filteredCourses = allCourses.filter(c => {
    const matchesCategory = c.category === selectedExam;
    
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = searchTerm === "" || 
                          c.title.toLowerCase().includes(searchLower) || 
                          c.tagline.toLowerCase().includes(searchLower);

    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (catId: string) => allCourses.filter(c => c.category === catId).length;

  return (
    <section id="course-grid" className="pt-12 pb-24 relative min-h-[600px] bg-[#f8fafc]">
       
       <style>{`
          .thin-scrollbar::-webkit-scrollbar {
            height: 6px;
          }
          .thin-scrollbar::-webkit-scrollbar-track {
            background: transparent; 
          }
          .thin-scrollbar::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 20px;
            border: 2px solid transparent;
            background-clip: content-box;
          }
          .thin-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #94a3b8;
            border: 0px solid transparent;
          }
       `}</style>

       {/* Custom Institute Pattern Background (Graduation Caps) */}
       <div 
         className="absolute inset-0 opacity-[0.05] pointer-events-none"
         style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 10 L35 16 L20 22 L5 16 Z M8 17 V23 L20 28 L32 23 V17' stroke='%23075d63' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
         }}
       ></div>
       
       <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>

       <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
          
          {/* CONTROL BAR */}
          <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-2.5 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-20">
             
             {/* Tabs */}
             <div className="flex overflow-x-auto thin-scrollbar w-full lg:w-auto gap-4 pb-6 lg:pb-0 items-center">
                {categories.map((cat) => {
                   const count = getCategoryCount(cat.id);
                   const isActive = selectedExam === cat.id;
                   const isDisabled = count === 0;

                   return (
                      <button
                        key={cat.id}
                        onClick={() => !isDisabled && setSelectedExam(cat.id)}
                        disabled={isDisabled}
                        className={`
                           relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-colors duration-200 select-none border
                           ${isActive 
                              ? 'bg-[#075d63] text-white border-[#075d63]' 
                              : isDisabled
                                 ? 'bg-slate-50 text-slate-400 cursor-not-allowed border-slate-200 opacity-60'
                                 : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-[#075d63] border-slate-200'
                           }
                        `}
                      >
                         <cat.icon size={15} className={isActive ? 'text-[#f2c537]' : isDisabled ? 'opacity-50' : 'text-slate-400'} />
                         {cat.label}
                         
                         {!isDisabled && (
                            <span className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-md font-extrabold ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500 border border-slate-200'}`}>
                               {count}
                            </span>
                         )}

                         {isDisabled && (
                            <span className="ml-1 text-[9px] uppercase tracking-wider bg-slate-200/50 text-slate-400 px-1.5 py-0.5 rounded border border-slate-200/50 font-bold">
                               Soon
                            </span>
                         )}
                      </button>
                   );
                })}
             </div>

             {/* Search */}
             <div className="relative w-full lg:w-72 group shrink-0">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#075d63] transition-colors" size={18} />
                <input 
                   type="text" 
                   placeholder="Search courses..." 
                   className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 pl-10 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#075d63] focus:ring-4 focus:ring-[#075d63]/5 transition-all"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
          </div>

          {/* Heading */}
          <div className="flex items-center justify-between mb-8 ml-2">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#075d63]/10 flex items-center justify-center text-[#075d63]">
                   <LayoutGrid size={20} />
                </div>
                <div>
                   <h3 className="text-2xl font-extrabold text-slate-900 leading-none">
                      {selectedExam} Batches
                   </h3>
                   <p className="text-xs font-bold text-slate-500 mt-1">
                      {filteredCourses.length} Premium Courses Available
                   </p>
                </div>
             </div>
          </div>
          
          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             <AnimatePresence mode="popLayout">
               {filteredCourses.length > 0 ? (
                 filteredCourses.map((course) => (
                    <motion.div
                      key={course.title}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="h-full"
                    >
                      <div className="group relative bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-gameTeal/10 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                        
                        {/* Pattern Background for content area */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
                             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23075d63' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` }}>
                        </div>

                        {/* Image Header */}
                        <div className="relative h-56 overflow-hidden">
                            <img 
                               src={course.image} 
                               alt={course.title} 
                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                            
                            {/* Floating Badge */}
                            <div className="absolute top-4 left-4">
                               <span className={`text-[10px] font-black px-3 py-1.5 rounded-lg shadow-lg uppercase tracking-widest ${course.tagColor} backdrop-blur-md border border-white/10`}>
                                  {course.tag}
                               </span>
                            </div>

                            {/* Stats on Image */}
                            <div className="absolute bottom-0 left-0 w-full p-5">
                                <div className="flex items-center gap-4 text-white/90 text-[10px] font-bold uppercase tracking-wider mb-2">
                                   <div className="flex items-center gap-1.5"><Clock size={12} className="text-[#f2c537]" /> {course.duration}</div>
                                   <div className="flex items-center gap-1.5"><BarChart3 size={12} className="text-[#f2c537]" /> {course.liveCount} Live</div>
                                </div>
                                <h3 className="text-xl font-black text-white leading-tight drop-shadow-md line-clamp-2">
                                   {course.title}
                                </h3>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 flex flex-col flex-grow relative z-10">
                            
                            <div className="flex justify-between items-start mb-5">
                                 <div className="inline-block px-2 py-1 rounded bg-[#075d63]/5 border border-[#075d63]/10">
                                    <p className="text-[10px] font-bold text-[#075d63] uppercase tracking-wider flex items-center gap-1">
                                       <Sparkles size={10} /> {course.tagline}
                                    </p>
                                 </div>
                                 <div className="flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                    <Star size={12} className="text-[#f2c537] fill-[#f2c537]" /> {course.rating}
                                 </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
                               {course.features.slice(0, 4).map((feature: string, i: number) => (
                                  <div key={i} className="flex items-start gap-2">
                                     <CheckCircle2 size={14} className="text-[#075d63] shrink-0 mt-0.5" />
                                     <span className="text-xs font-bold text-slate-600 leading-tight">{feature}</span>
                                  </div>
                               ))}
                            </div>

                            <div className="mt-auto pt-5 border-t border-dashed border-slate-200">
                               <div className="flex items-end justify-between mb-4">
                                   <div>
                                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Total Price</div>
                                       <div className="flex items-baseline gap-2">
                                           <span className="text-2xl font-black text-slate-900">{course.price}</span>
                                           <span className="text-xs font-bold text-slate-400 line-through decoration-red-400">{course.originalPrice}</span>
                                       </div>
                                   </div>
                                   <div className="text-right">
                                        <span className="text-[10px] font-black text-green-700 bg-green-100 px-2 py-1 rounded uppercase tracking-wide">
                                           {course.discount} Save
                                        </span>
                                   </div>
                               </div>
                               
                               <div className="flex gap-3">
                                  <button 
                                     onClick={() => setSelectedCourse(course)}
                                     className="flex-1 py-3.5 rounded-xl bg-slate-50 text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors border border-slate-200"
                                  >
                                     Details
                                  </button>
                                  <button className="flex-[2] py-3.5 rounded-xl bg-[#075d63] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#043f42] transition-all shadow-lg shadow-[#075d63]/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                                     Enroll Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                  </button>
                               </div>
                            </div>
                        </div>
                      </div>
                    </motion.div>
                 ))
               ) : (
                 <div className="col-span-full py-32 text-center bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                    <div className="relative z-10">
                       <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-100">
                          <Filter size={32} className="text-slate-300" />
                       </div>
                       <h3 className="text-xl font-bold text-slate-900 mb-2">No batches found</h3>
                       <p className="text-slate-500 max-w-md mx-auto mb-6 text-sm">
                          We couldn't find any courses in <strong>{selectedExam}</strong> matching your search.
                       </p>
                       <button 
                          onClick={() => {
                              setSearchTerm('');
                              setSelectedExam('GATE / ESE');
                          }}
                          className="text-[#075d63] font-bold hover:underline flex items-center justify-center gap-1 mx-auto"
                       >
                          Clear Filters <X size={14} />
                       </button>
                    </div>
                 </div>
               )}
             </AnimatePresence>
          </div>
       </div>

       {/* Details Modal */}
       <AnimatePresence>
          {selectedCourse && (
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
                onClick={() => setSelectedCourse(null)}
             >
                <motion.div 
                   initial={{ opacity: 0, scale: 0.95, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.95, y: 20 }}
                   className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[550px]"
                   onClick={e => e.stopPropagation()}
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
                    
                    {/* LEFT: Visual Side */}
                    <div className="md:w-[45%] relative h-64 md:h-full group overflow-hidden">
                       <img 
                          src={selectedCourse.image} 
                          alt={selectedCourse.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-90"></div>

                       <div className="absolute top-6 left-6">
                          <span className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl bg-white/90 backdrop-blur-md text-slate-900 border border-white/50`}>
                             {selectedCourse.tag}
                          </span>
                       </div>

                       <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                          <div className="flex items-center gap-3 mb-4">
                             <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg">
                                <Crown size={20} className="text-[#f2c537] fill-[#f2c537]" />
                             </div>
                             <div>
                                <div className="text-[10px] font-bold uppercase tracking-wider opacity-80 text-slate-300">Certified By</div>
                                <div className="text-base font-bold">Game Academy</div>
                             </div>
                          </div>
                          
                          <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
                             <div className="flex items-center gap-1.5">
                                <Users size={14} className="text-[#f2c537]" />
                                <span className="text-xs font-bold">{selectedCourse.enrolledCount} Students</span>
                             </div>
                             <div className="w-1 h-1 rounded-full bg-white/30"></div>
                             <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                                <span className="text-xs font-bold text-red-300">{selectedCourse.liveCount} Live Now</span>
                             </div>
                          </div>

                          <p className="text-sm text-slate-300 leading-relaxed font-medium line-clamp-3 border-l-2 border-[#f2c537] pl-4">
                             "This course is designed to take you from basics to advanced level with a focus on problem solving."
                          </p>
                       </div>
                    </div>

                    {/* RIGHT: Details Side */}
                    <div className="md:w-[55%] p-8 md:p-10 flex flex-col relative z-10 bg-white">
                       <button 
                          onClick={() => setSelectedCourse(null)} 
                          className="absolute top-6 right-6 p-2 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-red-500 rounded-full transition-colors"
                       >
                          <X size={24} />
                       </button>

                       <div className="mb-6">
                          <div className="flex items-center gap-3 mb-3">
                             <span className="text-[10px] font-black uppercase tracking-widest text-[#075d63] bg-[#075d63]/5 px-3 py-1 rounded-full border border-[#075d63]/10">
                                {selectedCourse.category}
                             </span>
                             <div className="flex gap-0.5">
                                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-[#f2c537] text-[#f2c537]" />)}
                             </div>
                             <span className="text-xs font-bold text-slate-400">({selectedCourse.rating}/5)</span>
                          </div>
                          <h2 className="text-3xl font-black text-slate-900 leading-tight mb-2">
                             {selectedCourse.title}
                          </h2>
                       </div>

                       <div className="grid grid-cols-3 gap-4 mb-8">
                          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 text-center hover:border-gameTeal/30 transition-colors">
                             <Clock size={20} className="text-[#075d63] mx-auto mb-2" />
                             <div className="text-xs font-bold text-slate-900">{selectedCourse.duration}</div>
                             <div className="text-[10px] font-bold text-slate-400 uppercase">Duration</div>
                          </div>
                          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 text-center hover:border-gameTeal/30 transition-colors">
                             <Globe size={20} className="text-[#075d63] mx-auto mb-2" />
                             <div className="text-xs font-bold text-slate-900">Hinglish</div>
                             <div className="text-[10px] font-bold text-slate-400 uppercase">Language</div>
                          </div>
                          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 text-center hover:border-gameTeal/30 transition-colors">
                             <Users size={20} className="text-[#075d63] mx-auto mb-2" />
                             <div className="text-xs font-bold text-slate-900 truncate px-1">{selectedCourse.eligibility.split(' ')[0]}</div>
                             <div className="text-[10px] font-bold text-slate-400 uppercase">Target</div>
                          </div>
                       </div>

                       <div className="flex-grow">
                          <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                             <Sparkles size={14} className="text-[#f2c537]" /> What's Included
                          </h4>
                          <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                             {selectedCourse.features.map((feature: string, i: number) => (
                                <div key={i} className="flex items-start gap-2.5">
                                   <div className="w-5 h-5 rounded-full bg-[#075d63]/10 flex items-center justify-center shrink-0 mt-0.5">
                                      <CheckCircle2 size={12} className="text-[#075d63]" strokeWidth={3} />
                                   </div>
                                   <span className="text-sm font-bold text-slate-600 leading-tight">{feature}</span>
                                </div>
                             ))}
                          </div>
                       </div>

                       <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between gap-6">
                          <div>
                             <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-3xl font-black text-slate-900 tracking-tight">{selectedCourse.price}</span>
                                <span className="text-sm font-bold text-slate-400 line-through">{selectedCourse.originalPrice}</span>
                             </div>
                             <p className="text-xs font-bold text-green-600 flex items-center gap-1">
                                <Zap size={12} fill="currentColor" /> {selectedCourse.discount} Limited Offer
                             </p>
                          </div>
                          <button className="flex-1 bg-[#075d63] hover:bg-[#043f42] text-white py-4 rounded-xl font-bold text-base shadow-xl shadow-[#075d63]/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group">
                             Enroll Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                       </div>
                    </div>
                </motion.div>
             </motion.div>
          )}
       </AnimatePresence>

    </section>
  );
};

export default CourseGrid;
