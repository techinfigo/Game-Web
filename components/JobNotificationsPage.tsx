import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Bell, Sparkles, Send, Briefcase, 
  Clock, ClipboardList, BellRing, Settings2, Headphones,
  Info, Search, Filter, Lock, ExternalLink as ExternalLinkIcon, Calendar,
  Building2, ChevronRight, GraduationCap, Trophy,
  Zap, CheckCircle2, Plus, Minus, HelpCircle, FileText
} from 'lucide-react';

interface Job {
  id: number;
  title: string;
  org: string;
  branch: string[];
  eligibility: string;
  lastDate: string;
  status: 'Open' | 'Ending Soon' | 'Closed';
}

interface JobNotificationsPageProps {
  isLoggedIn: boolean;
  openLogin: () => void;
}

const JobNotificationsPage: React.FC<JobNotificationsPageProps> = ({ isLoggedIn, openLogin }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const findItems = [
    { title: "Timely Notifications", icon: Clock, color: "text-gameTeal", glow: "shadow-gameTeal/20", bg: "bg-teal-50" },
    { title: "Detailed Information", icon: ClipboardList, color: "text-gameGoldDark", glow: "shadow-gameGold/20", bg: "bg-amber-50" },
    { title: "Exam Alerts", icon: BellRing, color: "text-gameTeal", glow: "shadow-gameTeal/20", bg: "bg-teal-50" },
    { title: "Customized Updates", icon: Settings2, color: "text-gameGoldDark", glow: "shadow-gameGold/20", bg: "bg-amber-50" },
    { title: "Comprehensive Support", icon: Headphones, color: "text-gameTeal", glow: "shadow-gameTeal/20", bg: "bg-teal-50" }
  ];

  const jobs: Job[] = [
    { id: 1, title: "Assistant Engineer (Trainee)", org: "UPRVUNL", branch: ["Mechanical", "Electrical"], eligibility: "B.Tech", lastDate: "Oct 25, 2025", status: "Open" },
    { id: 2, title: "Junior Engineer (Civil)", org: "CPWD", branch: ["Civil"], eligibility: "Diploma / B.Tech", lastDate: "Oct 12, 2025", status: "Ending Soon" },
    { id: 3, title: "Management Trainee", org: "Coal India Limited", branch: ["Mechanical", "Civil", "Mining"], eligibility: "B.Tech + GATE Score", lastDate: "Nov 05, 2025", status: "Open" },
    { id: 4, title: "Scientific Assistant", org: "BARC", branch: ["Mechanical", "Civil"], eligibility: "Diploma", lastDate: "Oct 30, 2025", status: "Open" },
    { id: 5, title: "Graduate Apprentice", org: "ISRO - ISTRAC", branch: ["Mechanical", "Electronics"], eligibility: "B.Tech", lastDate: "Oct 20, 2025", status: "Ending Soon" },
    { id: 6, title: "Assistant Manager (Tech)", org: "NHAI", branch: ["Civil"], eligibility: "B.Tech + GATE", lastDate: "Dec 15, 2025", status: "Open" },
    { id: 7, title: "Junior Manager", org: "HAL", branch: ["Mechanical", "Production"], eligibility: "B.Tech", lastDate: "Oct 05, 2025", status: "Closed" },
    { id: 8, title: "Engineer Trainee", org: "BHEL", branch: ["Mechanical", "Electrical"], eligibility: "B.Tech + GATE", lastDate: "Nov 12, 2025", status: "Open" },
    { id: 9, title: "Section Engineer", org: "Indian Railways", branch: ["Civil", "Mechanical"], eligibility: "B.Tech / Diploma", lastDate: "Dec 01, 2025", status: "Open" },
    { id: 10, title: "Scientist 'B'", org: "DRDO", branch: ["Mechanical", "Electronics"], eligibility: "B.Tech + GATE", lastDate: "Nov 20, 2025", status: "Open" },
    { id: 11, title: "Graduate Engineer", org: "BEL", branch: ["Electronics", "Computer Science"], eligibility: "B.Tech", lastDate: "Nov 30, 2025", status: "Open" },
    { id: 12, title: "Technical Officer", org: "NPCIL", branch: ["Mechanical", "Electrical"], eligibility: "B.Tech + GATE", lastDate: "Dec 20, 2025", status: "Open" }
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

  const diplomaExamsData = [
    { no: 1, category: "Public Sector Undertakings (PSUs)", exams: "DRDO, SAIL, BHEL, BEL, NTPC, GAIL, IOCL, ISRO, NPCIL, etc.", roles: "Technician, Diploma Trainee Apprentice" },
    { no: 2, category: "Railways", exams: "RRB-JE (Railway Recruitment Board)", roles: "Junior Engineer (JE)" },
    { no: 3, category: "Staff Selection Commission (SSC)", exams: "SSC-JE", roles: "Junior Engineer (Civil, Mechanical, Electrical)" },
    { no: 4, category: "State Public Service Commissions (PSC)", exams: "UPPSC, MPPSC, TNPSC, etc.", roles: "Junior Engineer (JE), Assistant Engineer (AE)" },
    { no: 5, category: "Defense Sector", exams: "Indian Army (MES), Indian Navy, Military Engineering Services (MES)", roles: "Technical Roles, Junior Engineer" },
    { no: 6, category: "Power Sector", exams: "PGCIL, State Electricity Boards (UPPCL, MAHADISCOM)", roles: "JE, Technical Assistant" },
    { no: 7, category: "Road Transport & Highways", exams: "National Highways Authority of India (NHAI)", roles: "Technical Roles" },
    { no: 8, category: "Municipal Corporations", exams: "Local Bodies (eg, Public Works Departments)", roles: "Junior Engineer, Sub-Engineer" },
    { no: 9, category: "Apprenticeship Exams", exams: "IOCL, ONGC, HAL, Tata Steel, L&T", roles: "Apprenticeship Trainee" },
    { no: 10, category: "State-Level Recruitment", exams: "PWD, Irrigation Dept.", roles: "JE, Technical Posts" },
    { no: 11, category: "Border Roads Organisation", exams: "BRO", roles: "Junior Engineer, Technical Posts" },
    { no: 12, category: "Metro Rail Corporations", exams: "DMRC, Chennai Metro, Bangalore Metro", roles: "Junior Engineer, Technician" }
  ];

  const btechExamsData = [
    { category: "Maharatna PSUs", exams: "ONGC, IOCL, NTPC, GAIL, BHEL", role: "Graduate Executive Trainee", eligibility: "B.Tech + GATE Score" },
    { category: "Navratna PSUs", exams: "BEL, HAL, OIL, RVNL", role: "Engineer / Assistant Manager", eligibility: "B.Tech + GATE/Written" },
    { category: "Research Orgs", exams: "ISRO, DRDO, BARC", role: "Scientist / Engineer 'SC'", eligibility: "B.Tech with First Class" },
    { category: "Central Govt", exams: "IES (UPSC), SSC JE", role: "Assistant Engineer / JE", eligibility: "B.Tech in core branch" },
    { category: "State Govt", exams: "State PSC AE/JE", role: "Assistant Engineer", eligibility: "B.Tech in relevant branch" }
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
              <div className="relative w-80 h-80 bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/20 shadow-2xl flex flex-col items-center justify-center p-8 overflow-hidden group">
                 <div className="w-20 h-20 bg-[#f2c537] rounded-3xl flex items-center justify-center text-black mb-6 shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
               {findItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`flex flex-col items-center group ${i % 2 === 0 ? 'lg:translate-y-0' : 'lg:translate-y-12'}`}
                  >
                     <div className="relative mb-8">
                        <div className={`absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-current ${item.color}`}></div>
                        <div className={`relative w-24 h-24 rounded-[2.5rem] ${item.bg} flex items-center justify-center ${item.color} shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 border-2 border-white group-hover:border-current`}>
                           <item.icon size={40} strokeWidth={1.5} className="drop-shadow-sm" />
                           <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white border-4 border-current shadow-sm"></div>
                        </div>
                        <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full border border-slate-100 shadow-md text-xs font-black transition-all ${item.color} group-hover:border-current`}>
                           {i + 1}
                        </div>
                     </div>
                     <div className="text-center px-2">
                        <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight mb-2 group-hover:text-gameTeal transition-colors">
                           {item.title}
                        </h3>
                        <div className={`h-1 w-0 bg-current ${item.color} mx-auto rounded-full group-hover:w-12 transition-all duration-500`}></div>
                     </div>
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
                  <table className="w-full text-left border-collapse min-w-[900px]">
                     <thead className="sticky top-0 z-30">
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest">
                           <th className="p-6 border-r border-white/10 w-[25%]">Job Name / Post</th>
                           <th className="p-6 border-r border-white/10 w-[20%]">Department</th>
                           <th className="p-6 border-r border-white/10 w-[15%] text-center">Category</th>
                           <th className="p-6 border-r border-white/10 w-[15%] text-center">Eligibility</th>
                           <th className="p-6 border-r border-white/10 w-[12%] text-center">Last Date</th>
                           <th className="p-6 w-[13%] text-center">Action</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100 relative">
                        {jobs.map((job, idx) => (
                           <tr 
                             key={job.id} 
                             className={`transition-all duration-300 border-b border-slate-100 ${!isLoggedIn && idx > 2 ? 'blur-[4px] opacity-30 select-none pointer-events-none' : 'hover:bg-slate-50/80'}`}
                           >
                              <td className="p-6 border-r border-slate-100">
                                 <div className="flex flex-col">
                                    <span className="font-black text-slate-900 mb-1">{job.title}</span>
                                    <div className="flex items-center gap-2">
                                       <span className={`w-2 h-2 rounded-full ${job.status === 'Ending Soon' ? 'bg-orange-500' : job.status === 'Open' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                       <span className="text-[10px] font-bold uppercase text-slate-400">{job.status}</span>
                                    </div>
                                 </div>
                              </td>
                              <td className="p-6 border-r border-slate-100">
                                 <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                                       <Building2 size={20} />
                                    </div>
                                    <span className="font-bold text-slate-700">{job.org}</span>
                                 </div>
                              </td>
                              <td className="p-6 border-r border-slate-100 text-center">
                                 <div className="flex flex-wrap justify-center gap-1">
                                    {job.branch.map(b => (
                                       <span key={b} className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-gameTeal/5 text-[#075d63] border border-gameTeal/10">{b}</span>
                                    ))}
                                 </div>
                              </td>
                              <td className="p-6 border-r border-slate-100 text-center font-bold text-slate-600">{job.eligibility}</td>
                              <td className="p-6 border-r border-slate-100 text-center">
                                 <div className="flex flex-col items-center">
                                    <Calendar size={14} className="text-slate-400 mb-1" />
                                    <span className="font-black text-slate-900 whitespace-nowrap">{job.lastDate}</span>
                                 </div>
                              </td>
                              <td className="p-6 text-center">
                                 <button 
                                    onClick={isLoggedIn ? undefined : openLogin}
                                    className={`inline-flex items-center gap-2 bg-[#075d63] text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase hover:bg-slate-900 transition-all shadow-lg active:scale-95`}
                                 >
                                    Apply <ExternalLinkIcon size={12} />
                                 </button>
                              </td>
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

      {/* SECTION 5: Examination Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  Top Categories <span className="text-[#075d63]">We Cover</span>
               </h2>
               <div className="w-24 h-1.5 bg-[#f2c537] mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {categories.map((cat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col items-center text-center h-full min-h-[320px] relative overflow-hidden"
                  >
                     <div className={`w-20 h-20 rounded-[2rem] ${cat.bg} flex items-center justify-center ${cat.color} mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                        <cat.icon size={40} strokeWidth={1.5} />
                     </div>
                     <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-gameTeal transition-colors">
                        {cat.name}
                     </h3>
                     <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-8">
                        {cat.desc}
                     </p>
                     <button className="mt-auto inline-flex items-center gap-2 text-[#075d63] font-black text-xs uppercase tracking-[0.2em] group/btn hover:text-slate-900 transition-colors">
                        Explore Notifications <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

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

      {/* SECTION 9: Diploma Holder Job Opportunities */}
      <section className="py-24 bg-white border-t border-slate-200">
         <div className="max-w-[1280px] mx-auto px-6">
            <div className="mb-12">
               <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  Various PSUs, AE-JE Exams that are exclusively for Diploma holders only
               </h2>
               <div className="w-20 h-1 bg-gameGold mt-4 rounded-full"></div>
            </div>
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[10px] uppercase tracking-widest font-black">
                           <th className="p-4 border-r border-white/10 w-[8%] text-center">Sr. No.</th>
                           <th className="p-4 border-r border-white/10 w-[25%]">Category</th>
                           <th className="p-4 border-r border-white/10 w-[37%]">Exams/Organisations</th>
                           <th className="p-4 w-[30%]">Roles/Positions</th>
                        </tr>
                     </thead>
                     <tbody className="text-[13px] text-slate-700 divide-y divide-slate-100">
                        {diplomaExamsData.map((row, i) => (
                           <tr key={i} className="hover:bg-slate-50 transition-colors">
                              <td className="p-4 text-center font-bold text-slate-400 border-r border-slate-100">{row.no}.</td>
                              <td className="p-4 font-black text-slate-900 border-r border-slate-100 bg-slate-50/20">{row.category}</td>
                              <td className="p-4 border-r border-slate-100 leading-relaxed font-medium">{row.exams}</td>
                              <td className="p-4 font-bold text-gameTeal leading-tight">{row.roles}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
            <div className="mt-8 bg-slate-50 p-6 rounded-2xl border-l-4 border-[#075d63] space-y-4">
               <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                  <Info size={18} className="text-gameTeal" /> Note :
               </h4>
               <ul className="list-disc pl-6 space-y-3 text-sm text-slate-600 font-bold leading-relaxed">
                  <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
               </ul>
            </div>
         </div>
      </section>

      {/* SECTION 10: B.Tech Core Branch Job Opportunities */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
         <div className="max-w-[1280px] mx-auto px-6">
            <div className="mb-12">
               <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  B.Tech Core Branch Job Opportunities
               </h2>
               <div className="w-20 h-1 bg-gameGold mt-4 rounded-full"></div>
            </div>
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[900px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest">
                           <th className="p-5 border-r border-white/10 w-[20%] text-center">Category</th>
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Exams/Organisations</th>
                           <th className="p-5 border-r border-white/10 w-[25%] text-center">Job Role</th>
                           <th className="p-5 w-[25%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[13px] text-slate-700 divide-y divide-slate-100">
                        {btechExamsData.map((row, i) => (
                           <tr key={i} className="hover:bg-teal-50/30 transition-colors">
                              <td className="p-5 border-r border-slate-100 font-black text-slate-900 bg-slate-50/30 text-center uppercase tracking-tight">
                                 {row.category}
                              </td>
                              <td className="p-5 border-r border-slate-100 font-bold text-gameTeal leading-relaxed text-center">
                                 {row.exams}
                              </td>
                              <td className="p-5 border-r border-slate-100 font-medium text-slate-600 text-center">
                                 {row.role}
                              </td>
                              <td className="p-5 leading-relaxed font-bold text-slate-500 text-center">
                                 {row.eligibility}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
            <div className="mt-8 bg-[#f8fafc] p-8 rounded-[2rem] border-l-4 border-[#075d63] space-y-4 shadow-sm">
               <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                  <Info size={18} className="text-gameTeal" /> Note :
               </h4>
               <ul className="list-[lower-alpha] pl-8 space-y-3 text-sm text-slate-600 font-bold leading-relaxed">
                  <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
               </ul>
            </div>
         </div>
      </section>

      {/* SECTION 11: Notes */}
      <section className="py-16 bg-white border-t border-slate-200">
         <div className="max-w-[1280px] mx-auto px-6">
            <div className="bg-slate-50 p-8 rounded-[2rem] border-l-4 border-gameGold space-y-4 shadow-sm">
               <h3 className="font-black text-slate-900 text-lg uppercase tracking-wider flex items-center gap-2 mb-4">
                  <Info size={20} className="text-[#075d63]" /> 11. Notes
               </h3>
               <ol className="list-decimal pl-6 space-y-4 text-base text-slate-700 font-medium leading-relaxed">
                  <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
               </ol>
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