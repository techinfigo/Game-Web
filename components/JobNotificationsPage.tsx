import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Bell, Sparkles, Send, Briefcase, 
  Clock, ClipboardList, BellRing, Settings2, Headphones,
  Info, Search, Filter, Lock, ExternalLink as ExternalLinkIcon, Calendar,
  Building2, ChevronRight, GraduationCap, Trophy,
  Zap, CheckCircle2, Plus, Minus, HelpCircle, FileText
} from 'lucide-react';
import FeaturedExams from './FeaturedExams';

interface Job {
  id: number;
  notification: string;
  eligibility: string;
  branches: string[];
  startDate: string;
  endDate: string;
  status: 'Open' | 'Closed' | 'Yet to start';
  pdfLink?: string;
  usefulLinks?: string;
  recommendedCourse?: string;
}

interface JobNotificationsPageProps {
  isLoggedIn: boolean;
  openLogin: () => void;
  onNavigate: (page: string) => void;
}

const JobNotificationsPage: React.FC<JobNotificationsPageProps> = ({ isLoggedIn, openLogin, onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const findItems = [
    { title: "Timely Notifications", icon: Clock, color: "text-gameTeal", glow: "shadow-gameTeal/20", bg: "bg-teal-50" },
    { title: "Detailed Information", icon: ClipboardList, color: "text-gameGoldDark", glow: "shadow-gameGold/20", bg: "bg-amber-50" },
    { title: "Exam Alerts", icon: BellRing, color: "text-gameTeal", glow: "shadow-gameTeal/20", bg: "bg-teal-50" },
    { title: "Customized Listings", icon: Settings2, color: "text-gameGoldDark", glow: "shadow-gameGold/20", bg: "bg-amber-50" },
    { title: "Comprehensive Support", icon: Headphones, color: "text-gameTeal", glow: "shadow-gameTeal/20", bg: "bg-teal-50" }
  ];

  const jobs: Job[] = [
    {
      id: 1,
      notification: "Maharashtra State Electricity Distribution",
      eligibility: "BCA,",
      branches: [],
      startDate: "January 31, 2025",
      endDate: "February 28, 2025",
      status: "Closed",
      pdfLink: "#"
    },
    {
      id: 2,
      notification: "National Thermal Power Corporation (NTPC)",
      eligibility: "B.Tech,",
      branches: [],
      startDate: "December 1, 2024",
      endDate: "January 31, 2025",
      status: "Yet to start",
      pdfLink: "#"
    },
    {
      id: 3,
      notification: "State Bank of India (SBI)",
      eligibility: "B.Tech,BCA,BBA,",
      branches: [],
      startDate: "January 10, 2025",
      endDate: "February 7, 2025",
      status: "Open",
      pdfLink: "#"
    },
    {
      id: 4,
      notification: "Gas Authority Of India Ltd",
      eligibility: "BBA,",
      branches: [],
      startDate: "January 1, 2025",
      endDate: "January 31, 2025",
      status: "Open",
      pdfLink: "#"
    }
  ];

  const categories = [
    { name: "GATE", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50", desc: "Graduate Aptitude Test in Engineering" },
    { name: "SSC-JE", icon: Building2, color: "text-amber-600", bg: "bg-amber-50", desc: "Staff Selection Commission Junior Engineer" },
    { name: "ESE", icon: Trophy, color: "text-emerald-600", bg: "bg-emerald-50", desc: "Engineering Services Examination" }
  ];

  const faqs = [
    {
      q: "How to Stay Updated About latest govt jobs exams Notifications with GAME Academy?",
      a: (
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Subscribe:</strong> Sign up for free alerts to catch mechanical engineering latest govt jobs and more.</li>
          <li><strong>Bookmark:</strong> Keep our page handy to check regular updates.</li>
          <li><strong>Preparation Support:</strong> Join GAME Academy expert training programs to ace competitive exams.</li>
        </ul>
      )
    },
    {
      q: "What job categories are listed on GAME Academy’s job notification?",
      a: "We list government and private sector opportunities, including roles for civil and mechanical engineers, along with exam schedules and preparation materials."
    },
    {
      q: "How frequently does GAME Academy update job notifications?",
      a: "We update job listings daily to ensure you never miss the latest openings."
    },
    {
      q: "How can GAME Academy help with exam preparation?",
      a: "We offer targeted courses that prepare you for competitive exams like GATE, ESE, SSC-JE, PSU, with live sessions and practice tests."
    },
    {
      q: "How can I get personalized support for mechanical and civil engineering latest govt jobs?",
      a: "Our team offers one-on-one assistance, from job applications to interview prep, ensuring you’re ready for every opportunity."
    }
  ];



  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-gameTeal selection:text-white -mt-20">
      
      {/* SECTION 1: Banner Section */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-br from-[#075d63] to-[#043f42] text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-7/12 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#f2c537] text-xs font-black uppercase tracking-widest mb-6 shadow-sm backdrop-blur-sm">
                <Bell size={14} className="animate-bounce" /> Real-Time Alerts Activated
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                Get all Job Notifications and <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2c537] to-amber-200">
                  Make Sure to Apply
                </span> <br/>
                Before the Last Date
              </h1>
              <p className="text-teal-50 text-lg md:text-xl font-medium mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 opacity-90">
                Never miss a career-defining opportunity. We track every PSU, SSC, and State AE/JE notification so you can focus on winning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#f2c537] text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-yellow-500/20 hover:bg-white transition-all flex items-center justify-center gap-3 group">
                   Sign Up for Alerts <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#075d63] bg-slate-200 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" />
                        </div>
                      ))}
                   </div>
                   <span className="text-xs font-bold text-teal-100">25k+ Engineers Subscribed</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-5/12 hidden lg:flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-80 h-80 bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/20 shadow-2xl flex flex-col items-center justify-center p-8 overflow-hidden">
                 <div className="w-20 h-20 bg-[#f2c537] rounded-3xl flex items-center justify-center text-black mb-6 shadow-xl">
                    <Briefcase size={40} strokeWidth={2.5} />
                 </div>
                 <h3 className="text-2xl font-black text-white text-center mb-2">Live Updates</h3>
                 <div className="w-12 h-1 bg-gameGold rounded-full mb-6"></div>
                 <div className="w-full space-y-3">
                    <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-teal-100">ONGC Recruitment 2025 Out</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-[#f2c537]"></div>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-teal-100">SSC-JE 2026 Expected Soon</span>
                    </div>
                 </div>
                 <Sparkles className="absolute bottom-6 right-6 text-[#f2c537] opacity-40 animate-pulse" size={32} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What You Will Find on This Page? */}
      <section className="py-32 bg-white relative overflow-hidden">
         <svg className="absolute top-1/2 left-0 w-full h-24 text-slate-100 hidden lg:block -translate-y-full pointer-events-none" viewBox="0 0 1200 100" fill="none">
            <path d="M-50,50 Q300,0 600,50 T1250,50" stroke="currentColor" strokeWidth="3" strokeDasharray="12 12" />
         </svg>

         <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-none">
                    What You Will <span className="text-gameTeal">Find Here?</span>
                  </h2>
                  <div className="w-32 h-2 bg-gameGold mx-auto rounded-full mt-4"></div>
               </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 items-start">
               {findItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center gap-5 group w-32 md:w-40"
                  >
                     <div className="w-16 h-16 md:w-20 md:h-20 bg-[#075d63] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-teal-900/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-teal-900/20">
                        <item.icon size={28} strokeWidth={1.5} className="md:w-8 md:h-8" />
                     </div>
                     <h3 className="text-sm md:text-base font-bold text-[#075d63] text-center leading-tight">
                        {item.title}
                     </h3>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 3: Introduction Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
         <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#075d63]/10 text-[#075d63] text-xs font-black uppercase tracking-widest rounded-full mb-8">
                  <Info size={14} /> Career Information Hub
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                  Get All the Latest <span className="text-[#075d63]">Job Notifications</span>
               </h2>
               <p className="text-slate-600 text-lg md:text-2xl leading-relaxed font-medium">
                  GAME Academy brings you all latest government job notifications & examination updates to keep you informed about career opportunities on time. Whether you’re an engineering graduate or an experienced professional, we ensure you are informed of every opportunity in the government and private sectors.
               </p>
               <div className="mt-12 flex justify-center">
                  <div className="w-24 h-1.5 bg-[#f2c537] rounded-full"></div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* SECTION 4: Job Notification Table - UPDATED WITH GATED ACCESS AND 10-ROW VISIBILITY */}
      <section id="live-alerts" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
         <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
               <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
                     Live Job Alerts & <span className="text-[#075d63]">Notifications</span>
                  </h2>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Stay ahead in the race with real-time career updates</p>
               </div>
               <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-200 w-full md:w-auto">
                  <div className="relative flex-1 md:w-64">
                     <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                     <input type="text" placeholder="Search Org or Post..." className="w-full bg-white border border-slate-200 rounded-xl px-10 py-2.5 text-sm focus:outline-none focus:border-[#075d63] transition-all" />
                  </div>
                  <button className="bg-white border border-slate-200 p-2.5 rounded-xl text-slate-600 hover:bg-[#075d63] hover:text-white transition-all shadow-sm">
                     <Filter size={20} />
                  </button>
               </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden relative">
               {/* Container with fixed height roughly for 10 rows + header */}
               <div className="overflow-x-auto h-[800px] no-scrollbar">
                  <table className="w-full text-left border-collapse min-w-[1200px]">
                     <thead className="sticky top-0 z-30">
                        <tr className="bg-[#fdfbf6] text-slate-900 text-[13px] font-bold border-b-2 border-gameGold">
                           <th className="p-4 border-r border-slate-200 w-[5%] text-center">Sr. No</th>
                           <th className="p-4 border-r border-slate-200 w-[20%]">Job Notification</th>
                           <th className="p-4 border-r border-slate-200 w-[10%]">Eligbility</th>
                           <th className="p-4 border-r border-slate-200 w-[10%]">Branches</th>
                           <th className="p-4 border-r border-slate-200 w-[10%]">Start Date</th>
                           <th className="p-4 border-r border-slate-200 w-[10%]">End Date</th>
                           <th className="p-4 border-r border-slate-200 w-[10%]">Status</th>
                           <th className="p-4 border-r border-slate-200 w-[8%] text-center">Detailed Pdf</th>
                           <th className="p-4 border-r border-slate-200 w-[8%] text-center">Usefull links</th>
                           <th className="p-4 w-[9%] text-center">Recommended Course</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100 relative bg-white">
                        {jobs.map((job, idx) => (
                           <tr 
                             key={job.id} 
                             className={`transition-all duration-300 border-b border-slate-100 ${!isLoggedIn && idx > 2 ? 'blur-[4px] opacity-30 select-none pointer-events-none' : 'hover:bg-slate-50/80'}`}
                           >
                              <td className="p-4 border-r border-slate-100 text-center font-medium text-slate-500">{job.id}</td>
                              <td className="p-4 border-r border-slate-100 font-medium text-slate-700">{job.notification}</td>
                              <td className="p-4 border-r border-slate-100 font-medium text-slate-600">{job.eligibility}</td>
                              <td className="p-4 border-r border-slate-100 text-center">
                                 {job.branches.length > 0 ? job.branches.join(", ") : ""}
                              </td>
                              <td className="p-4 border-r border-slate-100 text-slate-600 font-medium">{job.startDate}</td>
                              <td className="p-4 border-r border-slate-100 text-slate-600 font-medium">{job.endDate}</td>
                              <td className="p-4 border-r border-slate-100">
                                 <div className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${job.status === 'Closed' ? 'bg-red-500' : job.status === 'Yet to start' ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
                                    <span className="text-[13px] font-medium text-slate-700">{job.status}</span>
                                 </div>
                              </td>
                              <td className="p-4 border-r border-slate-100 text-center">
                                 <button className="text-red-500 hover:scale-110 transition-transform inline-flex justify-center">
                                    <FileText size={18} />
                                 </button>
                              </td>
                              <td className="p-4 border-r border-slate-100 text-center"></td>
                              <td className="p-4 text-center"></td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>

               {/* LOGIN GRADIENT OVERLAY - Adjusted to start after row 3 and cover full scroll area */}
               {!isLoggedIn && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
                     {/* Gradient Mask that fades exactly after the 3rd row */}
                     <div className="absolute inset-x-0 bottom-0 top-[280px] bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-[1px]"></div>
                     
                     {/* Login CTA Card - Prominently Centered */}
                     <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-30 p-1 rounded-[2.5rem] bg-gradient-to-br from-gameGold via-gameTeal to-gameGold shadow-2xl pointer-events-auto scale-110"
                     >
                        <div className="bg-white rounded-[2.3rem] p-8 md:p-10 flex flex-col items-center text-center max-w-sm border border-slate-100">
                           <div className="w-16 h-16 rounded-2xl bg-gameGold flex items-center justify-center text-black mb-6 shadow-xl shadow-yellow-500/20 transform -rotate-3">
                              <Lock size={32} strokeWidth={2.5} />
                           </div>
                           <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
                              Login to Unlock All <span className="text-gameTeal">250+ Job Alerts</span>
                           </h3>
                           <p className="text-sm text-slate-500 font-bold mb-8 leading-relaxed">
                              Get instant access to salary details, eligibility checks, and official application links.
                           </p>
                           <button 
                              onClick={openLogin}
                              className="w-full bg-gameTeal text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-gameTealDark hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
                           >
                              Login Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                           </button>
                           <p className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Free for all GAME Aspirants</p>
                        </div>
                     </motion.div>
                  </div>
               )}
            </div>
         </div>
      </section>

      {/* SECTION 5: Featured Exams Section */}
      <FeaturedExams onNavigate={onNavigate} />

      {/* SECTION 8: FAQ Section - UPDATED BACKGROUND TO THEME COLOR */}
      <section className="py-24 bg-gameTeal text-white relative overflow-hidden border-t border-white/10">
         {/* Background pattern matching other dark sections */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         
         <div className="max-w-[1000px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-gameGold text-xs font-black uppercase tracking-widest rounded-full mb-6 backdrop-blur-sm border border-white/10">
                     <HelpCircle size={14} /> Knowledge Hub
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                    Frequently Asked <span className="text-gameGold">Questions</span>
                  </h2>
                  <div className="w-24 h-1.5 bg-gameGold mx-auto rounded-full"></div>
               </motion.div>
            </div>
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                  <div key={i} className={`bg-white/5 border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md ${openFaqIndex === i ? 'border-gameGold bg-white/10 shadow-lg' : 'border-white/10 shadow-sm hover:border-white/30'}`}>
                     <button onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} className="w-full flex justify-between items-center p-5 text-left">
                        <span className={`font-bold text-base md:text-lg pr-4 ${openFaqIndex === i ? 'text-gameGold' : 'text-teal-50'}`}>{faq.q}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                           openFaqIndex === i ? 'bg-gameGold text-black rotate-180' : 'bg-white/10 text-white'
                        }`}>
                           {openFaqIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                     </button>
                     <AnimatePresence>
                        {openFaqIndex === i && (
                           <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                           >
                              <div className="px-6 pb-6 pt-0">
                                 <div className="h-px w-full bg-white/10 mb-4"></div>
                                 <div className="text-teal-50/80 leading-relaxed font-medium">
                                    {faq.a}
                                 </div>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>



      {/* FINAL CTA Section */}
      <section className="py-24 bg-gameTeal text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="max-w-[1080px] mx-auto px-6 text-center relative z-10">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f2c537] text-black text-[10px] font-black uppercase tracking-widest rounded-full mb-8 shadow-lg">
                  <Zap size={12} fill="currentColor" /> Ready to Crack the Code?
               </div>
               <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Don't Just Track Jobs. <br/> <span className="text-gameGold">Master the Exam.</span></h2>
               <p className="text-teal-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed font-medium">
                  Join India's most trusted Excellence Course with Gaurav Babu Sir and secure your position in the next recruitment cycle.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-[#f2c537] text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3">
                     Enroll in Excellence Course <ChevronRight size={18} />
                  </button>
                  <button className="bg-transparent border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                     <Bell size={18} /> Join Telegram Alerts
                  </button>
               </div>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

export default JobNotificationsPage;