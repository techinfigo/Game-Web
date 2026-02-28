import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, Briefcase, Globe, Microscope, 
  Award, BookOpen, TrendingUp, Layers, Star, 
  ArrowRight, CheckCircle2, CheckCircle2 as CheckCircle2Icon, ChevronDown, Sparkles,
  Landmark, Book, Download, Table as TableIcon, FileText, Clock, Zap, Calculator, Calendar, BarChart3, Lightbulb, History, Trophy, AlertCircle, Building2, Rocket,
  Wallet, Gift, Laptop, MessageCircle, PenTool, Users, Plus, Minus, HelpCircle, ArrowUpRight, Menu, ExternalLink, Info, ClipboardCheck, TrendingDown, Sigma, FileCheck, Percent, Gem, Heart, ShieldCheck, Smartphone, Youtube, ExternalLink as ExternalLinkIcon, Train, HardHat, Anchor, Shield, Ticket, UserCheck, Briefcase as JobIcon,
  Play, X, Crown, Target, Layout, Sparkle
} from 'lucide-react';

const GateExamPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeBranch, setActiveBranch] = useState<'ME' | 'CE' | 'XE'>('ME');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 130; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const gateCourses = {
    ME: [
      {
        title: "Foundation Course (ME) 2025/26",
        tag: "2-YEAR PROGRAM",
        price: "₹35,000",
        originalPrice: "₹50,000",
        image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?fit=crop&w=800&q=80",
        features: ["1200+ Hrs Content", "1:1 Mentorship", "Hardcopy Notes"]
      },
      {
        title: "Lakshya GATE (ME) 2025",
        tag: "BEST SELLER",
        price: "₹24,999",
        originalPrice: "₹35,000",
        image: "https://images.unsplash.com/photo-1581092128911-30c25b81a070?fit=crop&w=800&q=80",
        features: ["Targeted Revision", "100+ Mock Tests", "Daily Practice Sets"]
      }
    ],
    CE: [
      {
        title: "Civil Engineering Foundation 2025",
        tag: "COMPREHENSIVE",
        price: "₹35,000",
        originalPrice: "₹50,000",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?fit=crop&w=800&q=80",
        features: ["Structural Analysis", "Geotechnical Depth", "Standard PYQs"]
      },
      {
        title: "Lakshya GATE (CE) 2025",
        tag: "FAST TRACK",
        price: "₹24,999",
        originalPrice: "₹35,000",
        image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?fit=crop&w=800&q=80",
        features: ["Formula Sheets", "Doubt Support", "Rank Improvement"]
      }
    ],
    XE: [
      {
        title: "GATE XE (Engg Sciences) Mastery",
        tag: "INTERDISCIPLINARY",
        price: "₹18,000",
        originalPrice: "₹25,000",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?fit=crop&w=800&q=80",
        features: ["Maths + 2 Sections", "Fluid & Thermo", "Energy Science Add-on"]
      }
    ]
  };

  const rankers = [
    {
      name: "Abhishek Singh",
      rank: "AIR 1 - GATE ME",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=600&h=800&q=80",
      videoId: "D6HOo41x2Ls"
    },
    {
      name: "Ananya Ray",
      rank: "AIR 1 - GATE ME",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=600&h=800&q=80",
      videoId: "gvK9V0trlaw"
    },
    {
      name: "Siddharth S.",
      rank: "AIR 45 - ESE ME",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=600&h=800&q=80",
      videoId: "Ta7gKIxxya0"
    },
    {
      name: "Megha Gupta",
      rank: "AIR 4 - ESE ME",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=600&h=800&q=80",
      videoId: "D6HOo41x2Ls"
    }
  ];

  const courseBenefits = [
    {
      title: "Quality Content & Visualisation",
      desc: "Master complex theories through visualized learning. We simplify high-level engineering concepts into intuitive stories and hacks.",
      icon: Lightbulb,
      color: "text-[#075d63]",
      bg: "bg-[#075d63]/5",
      points: ["Concept from Scratch", "Visualization Hacks", "Exam-Oriented Depth"]
    },
    {
      title: "The Ultimate Practice Shield",
      desc: "Crack any pattern with our exhaustive repository of PYQs, DPPs, and Mock Tests designed to simulate the actual GATE environment.",
      icon: Target,
      color: "text-gameGoldDark",
      bg: "bg-gameGold/10",
      points: ["Full-Length Mock Tests", "Topic-wise DPPs", "Previous Year Analysis"]
    },
    {
      title: "Personalized Support Ecosystem",
      desc: "You are never alone. Get direct access to Gaurav Babu Sir and a dedicated team of experts to clear your doubts within minutes.",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
      points: ["1:1 Mentorship", "24/7 Doubt Support", "Strategy & Mindset Coaching"]
    },
    {
      title: "Modern Learning Analytics",
      desc: "Track your progress with our advanced dashboard. Identify your weak areas and work on them before they become obstacles.",
      icon: BarChart3,
      color: "text-purple-600",
      bg: "bg-purple-50",
      points: ["Real-time Performance", "Weakness Mapping", "Growth Tracking"]
    }
  ];

  const gateAdvantages = [
    {
      title: "Higher Education Opportunities",
      desc: "Admission to IITs, NITs, IIITs, and other top institutes for M.Tech/M.E. programs. Receive a monthly stipend of Rs. 12,400 during postgraduate studies.",
      icon: GraduationCap,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "PSU Recruitment",
      desc: "Direct recruitment into top Public Sector Undertakings (PSUs) like ONGC, BHEL, GAIL, NTPC, etc., with attractive salary packages and job security.",
      icon: Briefcase,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Opportunities Abroad",
      desc: "Admission to international universities such as the National University of Singapore (NUS) and the Technical University of Munich (TUM).",
      icon: Globe,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Research Opportunities",
      desc: "Openings for R&D roles in reputed research organisations like ISRO, DRDO, and BARC etc.",
      icon: Microscope,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      title: "Scholarships and Fellowships",
      desc: "Eligibility for AICTE/UGC scholarships and Junior Research Fellow (JRF) positions.",
      icon: Award,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Teaching Careers",
      desc: "Eligibility for teaching positions in engineering colleges and universities.",
      icon: BookOpen,
      color: "text-cyan-600",
      bg: "bg-cyan-50"
    },
    {
      title: "Career Growth in Industry",
      desc: "Access to better roles and higher salaries in private companies that require advanced technical expertise.",
      icon: TrendingUp,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Flexibility in Career",
      desc: "Strong foundational preparation for other competitive exams like ESE, SSC-JE, RRB-JE, and State-level AE & JE exams.",
      icon: Layers,
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      title: "Prestige and Recognition",
      desc: "A GATE qualification adds significant credibility to your technical and academic profile.",
      icon: Star,
      color: "text-yellow-600",
      bg: "bg-yellow-50"
    }
  ];

  const distributionOfMarks = [
    {
      code: "AE, AG, BM, BT, CE, CH, CS, EC, EE, ES, IN, ME, MN, MT, NM, PE, PI, TF; Subject marks in these papers include questions on Engineering Mathematics (13 marks), which are paper-specific.",
      ga: "15",
      compulsory: "85",
      optional: "—",
      total: "100"
    },
    {
      code: "CY, DA, EY, MA, PH, ST",
      ga: "15",
      compulsory: "85",
      optional: "—",
      total: "100"
    },
    {
      code: "AR: Part A is Common and Compulsory. Part B1/B2 can be selected during the exam. B1 - Architecture, B2 - Planning",
      ga: "15",
      compulsory: "60",
      optional: "25",
      total: "100"
    },
    {
      code: "GE: Part A is Common and Compulsory. Part B1/B2 can be selected during the exam. B1 - Surveying and Mapping, B2 - Image Processing and Analysis",
      ga: "15",
      compulsory: "55",
      optional: "30",
      total: "100"
    },
    {
      code: "GG: Part A is Common and Compulsory. Part B1/B2 must be chosen at the time of application. B1 - Geology, B2 - Geophysics",
      ga: "15",
      compulsory: "25",
      optional: "60",
      total: "100"
    },
    {
      code: "XE: Section A (Engineering Mathematics) is Common and Compulsory. Applicants must select any TWO of the other sections during the exam.",
      ga: "15",
      compulsory: "15",
      optional: "2 x 35",
      total: "100"
    },
    {
      code: "XH: Section B1 (Reasoning and Comprehension) is Common and Compulsory. Applicants must select any ONE of the other sections at the time of application.",
      ga: "15",
      compulsory: "25",
      optional: "60",
      total: "100"
    },
    {
      code: "XL: Section P (Chemistry) is Common and Compulsory. Applicants must select any TWO of the other sections during the exam.",
      ga: "15",
      compulsory: "25",
      optional: "2 x 30",
      total: "100"
    }
  ];

  const paperCombinations = [
    { primary: "AE", secondary: "CE, ME, XE" },
    { primary: "AG", secondary: "CE" },
    { primary: "AR", secondary: "CE, GE" },
    { primary: "BM", secondary: "BT, IN" },
    { primary: "BT", secondary: "BM, XL" },
    { primary: "CE", secondary: "AE, AG, AR, ES, GE, NM, XE" },
    { primary: "CH", secondary: "ES, PE, XE" },
    { primary: "CS", secondary: "DA, EC, GE, MA, PH, ST" },
    { primary: "CY", secondary: "XE, XL" },
    { primary: "DA", secondary: "CS, EC, EE, MA, ME, PH, ST, XE" },
    { primary: "EC", secondary: "CS, DA, EE, IN, PH" },
    { primary: "EE", secondary: "DA, EC, IN, PH" },
    { primary: "ES", secondary: "CE, CH, GE" },
    { primary: "EY", secondary: "XL" },
    { primary: "GE", secondary: "AR, CE, CS, ES, GG" },
    { primary: "GG", secondary: "GE" },
    { primary: "IN", secondary: "BM, EC, EE, ME" },
    { primary: "MA", secondary: "CS, DA, PH, ST" },
    { primary: "ME", secondary: "AE, DA, IN, NM, PI, XE" },
    { primary: "MT", secondary: "XE" },
    { primary: "NM", secondary: "CE, ME" },
    { primary: "PE", secondary: "CH" },
    { primary: "PH", secondary: "CS, DA, EC, EE, MA, XE" },
    { primary: "PI", secondary: "ME, XE" },
    { primary: "ST", secondary: "CS, DA, MA, XH" },
    { primary: "XE", secondary: "AE, CE, CH, CY, DA, ME, MT, PH, PI" },
    { primary: "XH", secondary: "ST" },
    { primary: "XL", secondary: "BT, CY, EY" }
  ];

  const importantDates = [
    {
      event: "GATE Online Application Processing System (GOAPS) opens",
      date: (
        <div className="flex flex-col">
          <span className="line-through text-slate-400">August 25, 2025</span>
          <span className="font-black text-gameTeal">August 28, 2025</span>
        </div>
      )
    },
    {
      event: "Closing date of regular online registration/applications",
      date: (
        <div className="flex flex-col">
          <span className="line-through text-slate-400">September 25, 2025</span>
          <span className="font-black text-gameTeal">September 28, 2025</span>
        </div>
      )
    },
    {
      event: "End of extended period for online registration/ application (with late fee)",
      date: (
        <div className="flex flex-col">
          <span className="line-through text-slate-400">October 06, 2025</span>
          <span className="font-black text-gameTeal">October 09, 2025</span>
        </div>
      )
    },
    {
      event: "Last date for change of Category, Paper and Examination City. Adding a new test paper, and change of personal details (additional fee applicable per change)",
      date: <span className="font-black text-slate-900">November 06, 2025</span>
    },
    {
      event: "Admit Cards available for download",
      date: <span className="font-black text-slate-900">January 02, 2026</span>
    },
    {
      event: (
        <div className="flex flex-col gap-2">
          <div className="font-bold">GATE 2026 Examination Dates</div>
          <div className="text-xs bg-slate-50 p-2 rounded border border-slate-100 text-slate-500">
            Forenoon: 9:30 AM to 12:30 PM<br/>
            Afternoon: 2:30 PM to 5:30 PM
          </div>
        </div>
      ),
      date: (
        <div className="flex flex-col text-slate-700">
          <span>February 07, 2026 (Saturday)</span>
          <span>February 08, 2026 (Sunday)</span>
          <span>February 14, 2026 (Saturday)</span>
          <span>February 15, 2026 (Sunday)</span>
        </div>
      )
    },
    {
      event: "Announcement of results in the GATE Online Application Processing System (GOAPS)",
      date: <span className="font-black text-slate-900">March 19, 2026</span>
    },
    {
      event: "Score Cards available for free download",
      date: <span className="font-black text-slate-900">March 27, 2026 to May 31, 2026</span>
    },
    {
      event: "Score Cards available for download by paying a fee of ₹500 per test paper",
      date: <span className="font-black text-slate-900">June 01, 2026 to December 31, 2026</span>
    }
  ];

  const examSchedule = [
    {
      date: "Saturday, February 07, 2026",
      sessions: [
        { time: "9:30 am to 12:30 pm (Forenoon Session – FN)", papers: "AG, ES, GG, IN, MA, MN, TF, XE, XL" },
        { time: "2:30 pm to 5:30 pm (Afternoon Session – AN)", papers: "AE, BT, CH, CY, GE, PH, XH" }
      ]
    },
    {
      date: "Sunday, February 08, 2026",
      sessions: [
        { time: "9:30 am to 12:30 pm (Forenoon Session – FN)", papers: "CS-1, ST" },
        { time: "2:30 pm to 5:30 pm (Afternoon Session – AN)", papers: "CS-2, EY, NM, PE" }
      ]
    },
    {
      date: "Saturday, February 14, 2026",
      sessions: [
        { time: "9:30 am to 12:30 pm (Forenoon Session – FN)", papers: "CE-1, EE, PI" },
        { time: "2:30 pm to 5:30 pm (Afternoon Session – AN)", papers: "BM, CE-2, ME, MT" }
      ]
    },
    {
      date: "Sunday, February 15, 2026",
      sessions: [
        { time: "9:30 am to 12:30 pm (Forenoon Session – FN)", papers: "EC" },
        { time: "2:30 pm to 5:30 pm (Afternoon Session – AN)", papers: "AR, DA" }
      ]
    }
  ];

  const faqs = [
    { 
      q: "Q.1 Is GAME’s online coaching enough to crack GATE?", 
      a: "Ans. Yes, with expert faculty, live classes, comprehensive study materials, and practice tests, GAME Academy provides all the tools to succeed." 
    },
    { 
      q: "Q.2 What disciplines are covered in GAME’s GATE coaching?", 
      a: "Ans. GAME offers courses for CE, ME, & XE as of now, ensuring syllabus coverage for all major disciplines." 
    },
    { 
      q: "Q.3 Are GAME’s courses affordable?", 
      a: "Ans. Absolutely. GAME offers competitive pricing, making quality education accessible to all students." 
    },
    { 
      q: "Q.4 How do I enroll in GAME’s GATE courses?", 
      a: "Ans. Visit our website, explore the courses, and follow the simple enrollment process to start your GATE journey." 
    },
    { 
      q: "Q.5 Can I access free GATE coaching from GAME?", 
      a: "Ans. Yes, GAME offers free online coaching through its YouTube channel to support students who may not afford paid programs." 
    },
    { 
      q: "Q.6 Various PSUs, AE-JE Exams that are exclusively for Diploma holders only / What other exams can I give after completing my Diploma?", 
      a: (
        <div className="space-y-6">
          <div className="bg-[#fdf9e1] rounded-xl border-2 border-slate-900 shadow-xl overflow-hidden relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#bfdbfe] text-slate-900 text-[10px] uppercase tracking-widest font-black border-b-2 border-slate-900">
                    <th className="p-4 border-r-2 border-slate-900 w-[8%] text-center">Sr. No.</th>
                    <th className="p-4 border-r-2 border-slate-900 w-[25%]">Category</th>
                    <th className="p-4 border-r-2 border-slate-900 w-[37%]">Exams/Organisations</th>
                    <th className="p-4 w-[30%]">Roles/Positions</th>
                  </tr>
                </thead>
                <tbody className="text-[13px] text-slate-700 divide-y divide-slate-900">
                  {[
                    { no: 1, cat: "Public Sector Undertakings (PSUs)", org: "DRDO, SAIL, BHEL, BEL, NTPC, GAIL, IOCL, ISRO, NPCIL, NTPC, PGCIL", roles: "Technician. Diploma Trainee Apprentice, Diploma Trainee" },
                    { no: 2, cat: "Railways", org: "RRB-JE (Railway Recruitment Board)", roles: "Junior Engineer (JE)" },
                    { no: 3, cat: "Staff Selection Commission (SSC)", org: "SSC-JE", roles: "Junior Engineer (Civil, Mechanical, Electrical)" },
                    { no: 4, cat: "State Public Service Commissions (PSC)", org: "UPPSC, MPPSC, TNPSC etc.", roles: "Junior Engineer (JE), Assistant Engineer (AE)" },
                    { no: 5, cat: "Defense Sector", org: "Indian Army (MES), Indian Navy (SSR Artificer Apprentice), Military Engineering Services (MES)", roles: "Technical Roles, Junior Engineer" },
                    { no: 6, cat: "Power Sector", org: "PGCIL, State Electricity Boards (MAHADISCOM, TANGEDCO, UPPCL)", roles: "JE. Technical Assistant" },
                    { no: 7, cat: "Road Transport & Highways", org: "National Highways Authority of India (NHAI)", roles: "Technical Roles" },
                    { no: 8, cat: "Municipal Corporations", org: "Local Bodies (eg, Public Works Departments)", roles: "Junior Engineer, Sub-Engineer" },
                    { no: 9, cat: "Apprenticeship Exams", org: "IOCL, ONGC, HAL, BEL, Tata Steel, L&T", roles: "Apprenticeship Trainee" },
                    { no: 10, cat: "State-Level Recruitment", org: "PWD, Irrigation Dept., Rural Development Dept.", roles: "JE. Technical Posts" },
                    { no: 11, cat: "Border Roads Organisation", org: "BRO", roles: "Junior Engineer. Technical Posts" },
                    { no: 12, cat: "Metro Rail Corporations", org: "DMRC, Chennai Metro, Bangalore Metro", roles: "Junior Engineer, Technician" }
                  ].map((row) => (
                    <tr key={row.no} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 text-center font-bold text-slate-400 border-r-2 border-slate-900">{row.no}.</td>
                      <td className="p-4 font-black text-slate-900 border-r-2 border-slate-900">{row.cat}</td>
                      <td className="p-4 border-r-2 border-slate-900 leading-relaxed font-medium">{row.org}</td>
                      <td className="p-4 font-bold text-gameTeal leading-tight">{row.roles}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-gameGold space-y-3 shadow-inner">
            <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <Info size={18} className="text-gameTeal" /> Note :
            </h4>
            <ol className="list-[lower-alpha] pl-6 space-y-2 text-sm text-slate-600 font-bold leading-relaxed">
              <li>The above-mentioned opportunities are the general ones; to get real-time updates, students can check the <button className="text-gameTeal font-black underline hover:text-gameTealDark decoration-2 underline-offset-4 transition-all">"Job Notification page"</button> so that students can save time without missing important job opportunities.</li>
              <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      q: "Q.7 What are the job opportunities for lateral entry candidates?",
      a: (
        <div className="space-y-12">
          {/* A. State Public Service Commissions (SPSC) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#f2c537] text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">SPSC</div>
              <p className="font-bold text-slate-800 text-lg">Ans. State Public Service Commissions (SPSC):</p>
            </div>
            <p className="text-slate-600 text-base leading-relaxed pl-2 border-l-4 border-slate-100">
              Many state commissions offer lateral entry pathways for advanced roles based on diploma or degree qualifications.
            </p>
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-5 border-r border-white/10 w-[25%] text-center">State PSC</th>
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[45%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">UPPSC, TNPSC, MPPSC</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Junior Engineer, Sub-Engineer</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-[#075d63]">Diploma or equivalent; lateral entry for experienced candidates in technical departments.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">PWD, Irrigation Dept.</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Assistant Engineer, JE</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-[#075d63]">Lateral entry is allowed for diploma holders with significant experience.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* B. Defence Services */}
          <div className="space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                   <Anchor size={20} />
                </div>
                <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">B. Defence Services:</h4>
             </div>
             <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Organization</th>
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[40%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">MES (Military Engineering Services)</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Junior Engineer</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-[#075d63]">Diploma holders with lateral entry eligibility for senior roles.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">Indian Navy, Army</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Technical Roles</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-[#075d63]">Diploma in engineering; lateral opportunities through experience and promotions.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* C. Public Sector Undertakings (PSUs) */}
          <div className="space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm border border-emerald-100">
                   <Building2 size={20} />
                </div>
                <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">C. Public Sector Undertakings (PSUs):</h4>
             </div>
             <p className="text-slate-500 text-base leading-relaxed pl-2 border-l-4 border-slate-100 font-medium">
               Lateral entry candidates with diplomas or advanced degrees can secure positions in PSUs through direct recruitment exams or experience-based roles.
             </p>
             <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-5 border-r border-white/10 w-[25%] text-center">PSU</th>
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[45%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">DRDO</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Technician, Senior Technician</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-[#075d63]">Diploma or lateral entry qualification in engineering.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">NTPC, SAIL, GAIL</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Diploma Trainee, Supervisor</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-[#075d63]">Diploma or equivalent qualification in relevant fields.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">PGCIL, BEL, IOCL</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Supervisor, Junior Engineer</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-[#075d63]">Diploma with relevant work experience.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* D. Railways */}
          <div className="space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 shadow-sm border border-red-100">
                   <Train size={20} />
                </div>
                <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">D. Railways:</h4>
             </div>
             <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Exam/Recruitment</th>
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[40%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">RRB JE (Junior Engineer)</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Junior Engineer</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-[#075d63]">Diploma holders are directly eligible; lateral entry pathways for higher posts via promotions.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">Senior Section Engineer</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Supervisor</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-[#075d63]">Degree holders with experience can enter mid-level posts.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* E. Metro Rail Corporations */}
          <div className="space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 shadow-sm border border-purple-100">
                   <Ticket size={20} />
                </div>
                <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">E. Metro Rail Corporations:</h4>
             </div>
             <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Organization</th>
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[40%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">DMRC, Chennai Metro, Bangalore Metro</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Junior Engineer</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-[#075d63]">Diploma holders are eligible for lateral promotions to higher technical posts.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* Q7 Concluding Note */}
          <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-gameGold space-y-3 shadow-inner">
            <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <Info size={18} className="text-gameTeal" /> Note :
            </h4>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-600 font-bold leading-relaxed">
              <li>The above-mentioned opportunities are the general ones; to get real-time updates, students can check the <button className="text-gameTeal font-black underline hover:text-gameTealDark decoration-2 underline-offset-4 transition-all">"Job Notification page"</button> so that students can save time without missing important job opportunities.</li>
              <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      q: "Q.8 What are the exams/Job opportunities for B.Tech Core Branches?",
      a: (
        <div className="space-y-8">
          <div className="bg-[#fdf9e1] rounded-xl border-2 border-slate-900 shadow-xl overflow-hidden relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-[#bfdbfe] text-slate-900 text-[10px] uppercase tracking-widest font-black border-b-2 border-slate-900">
                    <th className="p-5 border-r-2 border-slate-900 w-[20%] text-center">Category.</th>
                    <th className="p-5 border-r-2 border-slate-900 w-[30%]">Exams/Organisations</th>
                    <th className="p-5 border-r-2 border-slate-900 w-[25%] text-center">Job Role</th>
                    <th className="p-5 w-[25%] text-center">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="text-[13px] text-slate-800 divide-y divide-slate-900">
                  {[
                    { cat: "Public Sector Undertakings (PSUs)", org: "GAIL, IOCL, ONGC, NTPC, SAIL, BHEL, PGCIL", role: "Graduate Trainee. Engineer, Officer", elig: "B.Tech in Mechanical/Civil + GATE Score" },
                    { cat: "Public Sector Undertakings (PSUs)", org: "ISRO (Indian Space Research Organisation)", role: "Scientist/Engineer", elig: "B.Tech with 65% or above marks." },
                    { cat: "Public Sector Undertakings (PSUs)", org: "DRDO (Defense Research and Development Organization)", role: "Scientist 'B'", elig: "B.Tech in relevant branch - GATE/DRDO Exam." },
                    { cat: "Union Public Service Exams", org: "ESE (Engineering Services Examination)", role: "Group A Engineer (Central Govt.)", elig: "B.Tech in Mechanical/Civil" },
                    { cat: "Staff Selection Exams", org: "SSC JE (Junior Engineer)", role: "Junior Engineer in Central Govt.", elig: "B.Tech in Civil/Mechanical Engineering." },
                    { cat: "Railways", org: "RRB SSE (Senior Section Engineer)", role: "Senior Section Engineer", elig: "B.Tech in Mechanical/Civil." },
                    { cat: "Railways", org: "IRSE (Indian Railway Services of Engineers)", role: "Group A Engineer", elig: "Through ESE (B.Tech required)." },
                    { cat: "State PSC Exams", org: "State AE/JE Exams (UPPSC, TNPSC, etc.)", role: "Assistant Engineer, Junior Engineer", elig: "B.Tech in Mechanical/Civil" },
                    { cat: "Defense Services", org: "Indian Army SSC Tech Entry", role: "Technical Officer", elig: "B.Tech in Mechanical/Civil." },
                    { cat: "Defense Services", org: "MES (Military Engineering Services)", role: "Junior Engineer, Assistant Engineer", elig: "B.Tech in a relevant engineering discipline" },
                    { cat: "Metro Rail Corporations", org: "DMRC, BMRC, LMRC, etc.", role: "Junior Engineer, Assistant Manager", elig: "B.Tech in Civil/Mechanical." },
                    { cat: "Power Sector", org: "PGCIL, State Electricity Boards (UPPCL, TANGEDCO, etc.)", role: "Field Engineer, Assistant Engineer", elig: "B.Tech in Electrical/Mechanical/Civil" },
                    { cat: "Construction and Infrastructure", org: "NHAI (National Highways Authority of India)", role: "Site Engineer, Assistant Engineer", elig: "B.Tech in Civil Engineering." },
                    { cat: "Construction and Infrastructure", org: "CPWD (Central Public Works Department)", role: "Assistant Engineer", elig: "B.Tech in Civil/Mechanical." },
                    { cat: "Research & Academia", org: "GATE (Graduate Aptitude Test in Engineering)", role: "M.Tech, Research Fellow, PSU Jobs", elig: "B.Tech in a relevant discipline." },
                    { cat: "Research & Academia", org: "CSIR NET", role: "Research Fellow", elig: "B.Tech followed by post-graduate studies." },
                    { cat: "Private Sector", org: "L&T, Tata Projects, Ashok Leyland, Reliance Industries", role: "Design Engineer, Project Engineer, QA/QC", elig: "B.Tech in Mechanical/Civil." },
                    { cat: "Private Sector", org: "Oil & Gas Companies (Cairn, Schlumberger, etc.)", role: "Field Engineer, Maintenance Engineer", elig: "B.Tech in Mechanical." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-5 border-r-2 border-slate-900 font-black text-slate-900 text-center text-[11px] uppercase leading-tight">{row.cat}</td>
                      <td className="p-5 border-r-2 border-slate-900 font-bold text-gameTeal leading-snug">{row.org}</td>
                      <td className="p-5 border-r-2 border-slate-900 text-center font-medium">{row.role}</td>
                      <td className="p-5 text-center font-bold text-slate-800 leading-snug">{row.elig}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Note section for Q8 */}
          <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-gameGold space-y-3 shadow-inner">
            <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <Info size={18} className="text-gameTeal" /> Note :
            </h4>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-600 font-bold leading-relaxed">
              <li>The above-mentioned opportunities are the general ones; to get real-time updates, students can check the <button className="text-gameTeal font-black underline hover:text-gameTealDark decoration-2 underline-offset-4 transition-all">"Job Notification page"</button> so that students can save time without missing important job opportunities.</li>
              <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      q: "Q.9 Can lateral entry candidates give GATE/ESE/ISRO/BARC exams?",
      a: (
        <div className="space-y-12">
          <div className="bg-white rounded-xl border-2 border-slate-900 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-[#bfdbfe] text-slate-900 text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-slate-900">
                           <th className="p-5 border-r-2 border-slate-900 w-[25%] text-center">Exam</th>
                           <th className="p-5 border-r-2 border-slate-900 w-[30%] text-center">Eligibility for Lateral Entry Candidates</th>
                           <th className="p-5 w-[45%] text-center">Key Criteria</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-900 bg-[#fdf9e1]">
                        <tr className="hover:bg-slate-200/30 transition-colors">
                           <td className="p-5 border-r-2 border-slate-900 font-black text-slate-900 text-center italic">GATE</td>
                           <td className="p-5 border-r-2 border-slate-900 text-center font-medium">Eligible</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-[#075d63]">Must have a B.Tech/B.E. degree from an AICTE/UGC- recognised institution. Final-year students are also eligible.</td>
                        </tr>
                        <tr className="hover:bg-slate-200/30 transition-colors">
                           <td className="p-5 border-r-2 border-slate-900 font-black text-slate-900 text-center italic">ESE (Engineering Services Examination)</td>
                           <td className="p-5 border-r-2 border-slate-900 text-center font-medium">Eligible</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-[#075d63]">Requires a B.Tech/B.E. degree or equivalent from a recognised university.</td>
                        </tr>
                        <tr className="hover:bg-slate-200/30 transition-colors">
                           <td className="p-5 border-r-2 border-slate-900 font-black text-slate-900 text-center italic">ISRO</td>
                           <td className="p-5 border-r-2 border-slate-900 text-center font-medium">Eligible</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-[#075d63]">Needs a B.Tech/B.E. degree in specific disciplines (e.g, Mechanical, Electronics, CS) with 65% minimum marks.</td>
                        </tr>
                        <tr className="hover:bg-slate-200/30 transition-colors">
                           <td className="p-5 border-r-2 border-slate-900 font-black text-slate-900 text-center italic">BARC</td>
                           <td className="p-5 border-r-2 border-slate-900 text-center font-medium">Eligible</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-[#075d63]">Requires a B.Tech/B.E. degree with at least 60% marks in engineering disciplines.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>

          {/* Notes for Lateral Entry Candidates for Q9 */}
          <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-gameGold space-y-3 shadow-inner">
            <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <Info size={18} className="text-gameTeal" /> Notes for Lateral Entry Candidates:
            </h4>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-600 font-bold leading-relaxed">
              <li>The B.Tech/B.E. degree must be AICTE/UGC-recognised, irrespective of whether obtained through regular or lateral entry.</li>
              <li>Ensure you meet the percentage/CGPA requirements for the specific exam.</li>
              <li>Always check the detailed eligibility criteria for the year you are applying, as they may have minor updates.</li>
              <li>The above-mentioned opportunities are the general ones; to get real-time updates, students can check the <button className="text-gameTeal font-black underline hover:text-gameTealDark decoration-2 underline-offset-4 transition-all">"Job Notification page"</button> so that students can save time without missing important job opportunities.</li>
              <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      q: "Q.10 Can a diploma holder only appear for GATE/ESE/ISRO/BARC?",
      a: "Ans. Diploma holders must complete a B.E./B.Tech. Degree to qualify for GATE, ESE, ISRO, or BARC. However, there are job opportunities like SSC JE and RRB JE tailored for diploma-level qualifications."
    },
    {
      q: "Q.11 What are the exams covered under the Lakshya Course?",
      a: "Ans. Lakshya Course is suitable for GATE/ESE/ISRO/BARC & PSUs, where in-depth technical knowledge is required."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-gameTeal selection:text-white -mt-20">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-black text-white">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

         <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                  <Sparkles size={14} className="text-gameGold" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gameGold">The Winners' Choice</span>
               </div>

               <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
                  Your Gateway to <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal via-teal-400 to-gameGold">
                     Big Opportunities
                  </span>
               </h1>

               <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                  Unlock Premium Careers & Prestigious Lifestyles. Whether it’s a PSU or an IIT, GATE is your gateway to excellence.
               </p>

               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gameTeal text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-gameTeal/20 hover:bg-gameTealDark hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                     Start Preparation <ArrowRight size={20} />
                  </button>
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                     View Syllabus
                  </button>
               </div>
            </motion.div>
         </div>
         
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
            <ChevronDown size={24} />
         </div>
      </section>

      {/* FULL WIDTH STICKY SUB-NAVIGATION */}
      <div className="sticky top-[58px] z-40 w-full bg-[#075d63] shadow-md border-b border-[#054a4f]">
         <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex items-center justify-between h-14">
               {/* Links */}
               <div className="flex items-center gap-1 md:gap-6 overflow-x-auto no-scrollbar mask-gradient-right w-full md:w-auto">
                  {[
                     { label: "Overview", id: "overview" },
                     { label: "Courses", id: "gate-courses" },
                     { label: "Rankers", id: "gate-hall-of-fame" },
                     { label: "Excellence", id: "gate-excellence" },
                     { label: "Advantages", id: "advantages" },
                     { label: "Updates", id: "updates" },
                     { label: "Distribution", id: "distribution" },
                     { label: "Combinations", id: "combinations" },
                     { label: "Dates", id: "important-dates" },
                     { label: "Schedule", id: "exam-schedule" },
                     { label: "FAQs", id: "gate-faqs" }
                  ].map((item) => (
                     <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-white/90 text-xs md:text-sm font-bold whitespace-nowrap hover:text-[#f2c537] hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all"
                     >
                        {item.label}
                     </button>
                  ))}
               </div>

               {/* Enroll Button */}
               <div className="hidden md:flex items-center gap-4 pl-4 border-l border-white/10 shrink-0">
                  <button 
                     className="bg-[#f2c537] text-black px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_10px_rgba(242,197,55,0.3)] flex items-center gap-2"
                  >
                     <Sparkles size={12} className="fill-black" /> Enroll Now
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* 2. Overview */}
      <section id="overview" className="py-24 px-6 bg-white relative scroll-mt-32">
         <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                  <span className="text-gameTeal font-bold tracking-widest uppercase text-xs mb-3 block">Overview</span>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                     What is <span className="text-gameGoldDark">GATE?</span>
                  </h2>
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                     <p>
                        The <strong className="text-slate-900">Graduate Aptitude Test in Engineering (GATE)</strong> is an examination that primarily assesses a candidate's comprehensive understanding of various undergraduate subjects in engineering and science.
                     </p>
                     <p>
                        It is used for admission to Master's programs and for recruitment in public sector companies. Most students aim to succeed in the GATE exam because it enhances their career prospects and secures a brighter future.
                     </p>
                     <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-gameTeal text-slate-700 italic">
                        "It is a transformative opportunity for those aspiring to excel in engineering and science. Furthermore, several Public Sector Undertakings (PSUs)—such as GAIL, Hindustan Petroleum, and Indian Oil—use GATE scores to recruit candidates for distinguished positions."
                     </p>
                  </div>
               </motion.div>

               <motion.div 
                  className="lg:w-1/2 relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
               >
                  <div className="absolute inset-0 bg-gameTeal/5 rounded-full blur-3xl transform rotate-12"></div>
                  <div className="relative bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-2xl">
                     <img 
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?fit=crop&w=800&q=80" 
                        alt="GATE Aspirant" 
                        className="rounded-[2rem] w-full h-auto object-cover"
                     />
                     <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                              <CheckCircle2 size={20} />
                           </div>
                           <div className="font-bold text-slate-900">Valid for 3 Years</div>
                        </div>
                        <p className="text-xs text-slate-500">The GATE scorecard remains valid for three years from the date of announcement of results.</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* GATE COURSE SECTION */}
      <section id="gate-courses" className="py-24 bg-slate-50 relative scroll-mt-32 border-t border-slate-200">
         <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="text-gameTeal font-black tracking-[0.2em] uppercase text-xs mb-4 block">Our Offerings</span>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
                     Premium <span className="text-gameTeal">GATE Courses</span>
                  </h2>
                  <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto mb-10">
                    Select your engineering branch to explore courses tailored for your success.
                  </p>
                  
                  {/* Branch Select Tabs */}
                  <div className="flex justify-center gap-4 mb-16">
                     {['ME', 'CE', 'XE'].map((branch) => (
                        <button
                           key={branch}
                           onClick={() => setActiveBranch(branch as any)}
                           className={`px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-sm border ${
                              activeBranch === branch 
                              ? 'bg-gameTeal text-white border-gameTeal scale-105 shadow-gameTeal/20' 
                              : 'bg-white text-slate-500 border-slate-200 hover:border-gameTeal/30 hover:text-gameTeal'
                           }`}
                        >
                           {branch === 'ME' ? 'Mechanical' : branch === 'CE' ? 'Civil' : 'Engg Sciences (XE)'}
                        </button>
                     ))}
                  </div>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <AnimatePresence mode="wait">
                  {gateCourses[activeBranch].map((course, i) => (
                     <motion.div
                        key={`${activeBranch}-${course.title}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="group bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl hover:border-gameTeal/20 transition-all flex flex-col h-full"
                     >
                        <div className="relative h-56 overflow-hidden">
                           <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                           <div className="absolute top-4 left-4">
                              <span className="bg-[#f2c537] text-black text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-lg">
                                 {course.tag}
                              </span>
                           </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                           <h3 className="text-xl font-black text-slate-900 mb-6 group-hover:text-gameTeal transition-colors">{course.title}</h3>
                           <div className="space-y-3 mb-8 flex-grow">
                              {course.features.map((feat, idx) => (
                                 <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 size={16} className="text-gameTeal" />
                                    <span className="text-sm font-bold text-slate-500">{feat}</span>
                                 </div>
                              ))}
                           </div>
                           <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                              <div>
                                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Course Fee</p>
                                 <div className="flex items-center gap-2">
                                    <span className="text-2xl font-black text-slate-900">{course.price}</span>
                                    <span className="text-xs text-slate-400 line-through">{course.originalPrice}</span>
                                 </div>
                              </div>
                              <button className="bg-gameTeal text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gameTealDark transition-all shadow-lg shadow-gameTeal/20">
                                 Enroll <ArrowRight size={14} className="inline ml-1" />
                              </button>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </AnimatePresence>
            </div>
         </div>
      </section>

      {/* HALL OF FAME / VIDEO TESTIMONIALS SECTION - UPDATED SPACING */}
      <section id="gate-hall-of-fame" className="py-24 bg-[#0a0a0a] text-white relative scroll-mt-32 overflow-hidden border-t border-white/5">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gameTeal/10 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            {/* Header with improved spacing */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
               <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="flex items-center gap-3 mb-4">
                     <Crown size={18} className="text-[#f2c537] fill-[#f2c537]" />
                     <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#f2c537]">Hall of Fame</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
                     Spotlight on our <span className="text-[#075d63]">Results</span>
                  </h2>
               </motion.div>
               <motion.button 
                  initial={{ opacity: 0, x: 20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }}
                  className="bg-[#f2c537] text-black px-10 py-3.5 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-[#f2c537]/10 hover:bg-white transition-all group shrink-0"
               >
                  View All Rankers <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </motion.button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {rankers.map((ranker, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     onClick={() => setSelectedVideo(ranker.videoId)}
                     className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer"
                  >
                     <img 
                        src={ranker.image} 
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-110 transition-all duration-700" 
                        alt={ranker.name} 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/30 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                           <Play size={28} className="fill-current ml-1" />
                        </div>
                     </div>
                     <div className="absolute bottom-0 left-0 w-full p-8">
                        <h3 className="text-xl font-black text-white mb-1 drop-shadow-md group-hover:text-[#f2c537] transition-colors">{ranker.name}</h3>
                        <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">{ranker.rank}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* HOW THESE COURSE HELPS YOU SECTION */}
      <section id="gate-excellence" className="py-24 bg-white relative scroll-mt-32 overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#075d63]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gameGold/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
         
         <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#075d63]/5 border border-[#075d63]/10 text-[#075d63] text-xs font-black uppercase tracking-widest mb-4">
                     <CheckCircle2Icon size={14} /> Course Excellence
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                     How these courses <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#075d63] to-teal-600">help you?</span>
                  </h2>
                  <div className="w-24 h-1.5 bg-[#f2c537] mx-auto rounded-full mb-10"></div>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed">
                     Our courses are meticulously crafted to bridge the gap between basic engineering education and the high standards of competitive exams. Here’s the GAME strategy for your success:
                  </p>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
               {courseBenefits.map((feature, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className={`bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-gameTeal/10 transition-all group overflow-hidden relative`}
                  >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -mr-8 -mt-8 opacity-40 transition-transform duration-500 group-hover:scale-150"></div>
                     
                     <div className="relative z-10 flex flex-col h-full">
                        <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center ${feature.color} mb-8 shadow-sm transform group-hover:scale-110 transition-transform duration-300`}>
                           <feature.icon size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-gameTeal transition-colors">{feature.title}</h3>
                        <p className="text-slate-500 font-bold text-base leading-relaxed mb-8 flex-grow">
                           {feature.desc}
                        </p>
                        
                        <div className="grid grid-cols-1 gap-3 pt-6 border-t border-slate-100">
                           {feature.points.map((point, i) => (
                              <div key={i} className="flex items-center gap-3">
                                 <div className={`w-1.5 h-1.5 rounded-full ${feature.color.replace('text', 'bg')}`}></div>
                                 <span className="text-sm font-black text-slate-800 uppercase tracking-wide">{point}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
            
            <div className="mt-16 text-center">
               <button className="bg-gameBlack text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-gameTeal transition-all flex items-center justify-center gap-3 mx-auto group">
                  <Sparkles size={18} className="text-gameGold animate-pulse" /> Unlock Your Full Potential Now
               </button>
            </div>
         </div>
      </section>

      {/* 3. Advantages REDESIGNED - THE ENGINEERING BLUEPRINT PATH */}
      <section id="advantages" className="py-24 bg-white relative overflow-hidden scroll-mt-32 border-t border-slate-100">
         {/* Background Blueprint Aesthetics */}
         <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40"></div>
         <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5"
              style={{ backgroundImage: `linear-gradient(to right, #075d63 1px, transparent 1px), linear-gradient(to bottom, #075d63 1px, transparent 1px)`, backgroundSize: '100px 100px' }}>
         </div>

         <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="text-center mb-24 max-w-4xl mx-auto">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#075d63]/5 border border-[#075d63]/10 text-[#075d63] text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm">
                    <Rocket size={14} className="fill-[#075d63]" /> Engineering Career Blueprint
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
                     The <span className="text-[#075d63]">GATE</span> Advantage
                  </h2>
                  <p className="text-slate-500 text-lg md:text-xl font-bold leading-relaxed">
                     GATE opens the door to a future full of immense possibilities. Here is your technical roadmap to achieving greatness in the world of engineering.
                  </p>
               </motion.div>
            </div>

            {/* TECHNICAL PATHWAY UI */}
            <div className="relative">
               
               {/* THE VERTICAL PATHWAY LINE */}
               <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden lg:block">
                  <div className="sticky top-1/2 h-40 w-px bg-gradient-to-b from-transparent via-[#075d63] to-transparent"></div>
               </div>

               <div className="space-y-16 lg:space-y-0">
                  {gateAdvantages.map((item, i) => {
                     const isEven = i % 2 === 0;
                     return (
                        <div key={i} className="relative lg:min-h-[220px]">
                           
                           {/* BRANCHING NODE - DESKTOP */}
                           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center z-20">
                              <div className="w-4 h-4 rounded-full bg-white border-2 border-[#075d63] flex items-center justify-center">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#f2c537] animate-pulse"></div>
                              </div>
                              <div className={`absolute ${isEven ? 'left-8' : 'right-8'} w-24 h-px bg-gradient-to-r ${isEven ? 'from-[#075d63] to-transparent' : 'from-transparent to-[#075d63]'} opacity-20`}></div>
                           </div>

                           <motion.div 
                              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} 
                              whileInView={{ opacity: 1, x: 0 }} 
                              viewport={{ once: true }} 
                              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                              className={`flex flex-col ${i % 2 === 0 ? 'lg:items-end lg:pr-[55%]' : 'lg:items-start lg:pl-[55%]'}`}
                           >
                              <div className={`relative group w-full ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                 
                                 {/* BLUEPRINT NUMBERING */}
                                 <div className={`absolute ${i % 2 === 0 ? '-top-12 -left-4 lg:left-auto lg:-right-8' : '-top-12 -right-4 lg:right-auto lg:-left-8'} text-9xl font-black text-slate-100/50 group-hover:text-[#075d63]/5 transition-colors pointer-events-none select-none italic`}>
                                    0{i+1}
                                 </div>

                                 {/* ICON & CONTENT BLADE */}
                                 <div className={`relative z-10 flex flex-col ${i % 2 === 0 ? 'lg:items-end' : 'lg:items-start'} gap-6`}>
                                    
                                    {/* TECHNICAL ICON */}
                                    <div className={`w-20 h-20 rounded-[2rem] ${item.bg} flex items-center justify-center ${item.color} shadow-lg shadow-slate-100 border border-white group-hover:scale-110 transition-all duration-500`}>
                                       <item.icon size={40} strokeWidth={1.5} />
                                       
                                       {/* Blueprint Coordinates Decoration */}
                                       <div className="absolute -top-2 -left-2 text-[8px] font-mono text-slate-300 uppercase tracking-widest hidden lg:block">x:0{i+1}</div>
                                       <div className="absolute -bottom-2 -right-2 text-[8px] font-mono text-slate-300 uppercase tracking-widest hidden lg:block">y:2026</div>
                                    </div>

                                    {/* TEXT BLADE */}
                                    <div className={`bg-white/40 backdrop-blur-md p-8 rounded-[2.5rem] border border-slate-100 shadow-xl max-w-lg transition-all duration-500 group-hover:shadow-2xl group-hover:border-[#075d63]/10`}>
                                       <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#075d63] transition-colors leading-none">
                                          {item.title}
                                       </h3>
                                       <p className="text-slate-500 text-sm md:text-base font-bold leading-relaxed">
                                          {item.desc}
                                       </p>
                                       
                                       {/* Interaction Link */}
                                       <div className={`mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#075d63]/40 group-hover:text-[#075d63] transition-all ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                          Analyze Opportunity <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </motion.div>
                        </div>
                     );
                  })}
               </div>
            </div>

            {/* BOTTOM BLUEPRINT HIGHLIGHT */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="mt-32 p-1 bg-gradient-to-r from-transparent via-[#075d63]/20 to-transparent rounded-[4rem]"
            >
               <div className="bg-[#052b2f] p-10 md:p-16 rounded-[3.8rem] flex flex-col md:flex-row items-center justify-between gap-12 border border-white/10 shadow-3xl">
                  <div className="text-center md:text-left">
                     <h4 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">Your GATE roadmap is clear.</h4>
                     <p className="text-teal-50/50 font-bold text-lg">Join 100,000+ engineers building their future with GAME.</p>
                  </div>
                  <button className="bg-[#f2c537] text-black px-12 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-white hover:-translate-y-1 transition-all shrink-0">
                     Initialize Prep Phase
                  </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 4. Updates */}
      <section id="updates" className="py-24 bg-white relative overflow-hidden border-t border-slate-100 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="mb-16">
               <span className="text-gameTeal font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Official Updates</span>
               <h2 className="text-4xl md:text-5xl font-black text-slate-900">What's New in <span className="text-gameTealDark">GATE 2026?</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Landmark size={24} /></div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">a. Organising Institute</h4>
                  <p className="text-xl font-black text-slate-900">IIT GUWAHATI.</p>
               </div>
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><BookOpen size={24} /></div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">b. Subjects</h4>
                  <p className="text-base font-bold text-slate-700 leading-snug">30 disciplines are covered, with detailed syllabi available online.</p>
               </div>
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Layers size={24} /></div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">c. Two-Paper Combinations</h4>
                  <p className="text-base font-bold text-slate-700 leading-snug">New options for interdisciplinary combinations introduced.</p>
               </div>
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-all group lg:col-span-2">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Zap size={24} /></div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">d. XE Paper Update</h4>
                  <p className="text-lg font-black text-slate-900">GATE 2026 will have a new sectional test paper on Energy Science in Engineering Sciences (XE) paper.</p>
               </div>
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Laptop size={24} /></div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">e. Mode of Exam</h4>
                  <p className="text-lg font-black text-slate-900">Computer-Based Test (CBT).</p>
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
               <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-xl relative overflow-hidden">
                  <h4 className="text-sm font-black text-gameTeal uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                     <Info size={16} /> F. THE COMPUTER-BASED TEST (CBT) WILL INCLUDE:
                  </h4>
                  <div className="space-y-6">
                     <div className="flex gap-5">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-400 shrink-0">i</div>
                        <div><h5 className="font-black text-slate-900">Multiple Choice Questions (MCQs):</h5><p className="text-slate-500 text-sm">One correct option out of four.</p></div>
                     </div>
                     <div className="flex gap-5">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-400 shrink-0">ii</div>
                        <div><h5 className="font-black text-slate-900">Multiple Select Questions (MSQs):</h5><p className="text-slate-500 text-sm">One or more correct options out of four.</p></div>
                     </div>
                     <div className="flex gap-5">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-400 shrink-0">iii</div>
                        <div><h5 className="font-black text-slate-900">Numerical Answer Type (NATs):</h5><p className="text-slate-500 text-sm">Candidates must enter answers using a virtual keypad.</p></div>
                     </div>
                     <div className="flex gap-5 pt-4 border-t border-slate-50 items-start">
                        <div className="flex items-center gap-3 shrink-0">
                           <Calendar size={20} className="text-gameTeal" />
                           <div className="font-black text-slate-400 w-6 flex items-center justify-center">H</div>
                        </div>
                        <div>
                           <h5 className="font-black text-slate-900">GATE 2026 Exam Schedule:</h5>
                           <p className="text-slate-500 text-sm">Dates of examination are February 7, 8, 14, and 15, 2026. The exam will be held in two sessions on these dates – forenoon and afternoon.</p>
                        </div>
                     </div>
                     <div className="flex gap-5 items-start">
                        <div className="flex items-center gap-3 shrink-0">
                           <Layers size={20} className="text-gameTeal" />
                           <div className="font-black text-slate-400 w-6 flex items-center justify-center">I</div>
                        </div>
                        <div>
                           <h5 className="font-black text-slate-900">Multiple Sessions:</h5>
                           <p className="text-slate-500 text-sm">Some test papers may have multiple sessions, but candidates will appear in ONLY ONE session per paper.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="bg-[#0f1115] rounded-[2.5rem] p-10 shadow-2xl text-white relative overflow-hidden">
                  <h4 className="text-sm font-black text-gameGold uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                     <Trophy size={16} /> G. MARKING SCHEME/PATTERN/DURATION:
                  </h4>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8">
                     <p className="text-xl font-black text-white">I. Total Questions 65/ Maximum Marks 100 / Duration 3 Hours</p>
                  </div>
                  <div className="space-y-8">
                     <div>
                        <div className="text-xs font-black text-gameGold uppercase tracking-widest mb-3">ii. Multiple-Choice Questions (MCQs):</div>
                        <ul className="space-y-4">
                           <li className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                              <span className="text-sm font-medium">1 Mark Question</span><span className="font-black text-white">(+1 Correct) / (-1/3 Wrong)</span>
                           </li>
                           <li className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                              <span className="text-sm font-medium">2 Mark Question</span><span className="font-black text-white">(+2 Correct) / (-2/3 Wrong)</span>
                           </li>
                        </ul>
                     </div>
                     <div className="pt-6 border-t border-white/10">
                        <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">iii. MSQs & NATs Questions:</div>
                        <div className="flex gap-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                           <CheckCircle2Icon size={24} className="text-emerald-400 shrink-0" /><p className="text-sm font-bold text-emerald-50">No negative marking; candidates receive full marks for correct answers.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Distribution of Marks */}
      <section id="distribution" className="py-24 bg-white border-t border-slate-100 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4">
                  Distribution of marks in various test papers of GATE
               </h2>
               <div className="w-20 h-1 bg-[#f2c537] mx-auto rounded-full"></div>
            </div>
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden mb-10">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[1000px]">
                     <thead>
                        <tr className="bg-[#075d63] text-white">
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 w-[40%]">Paper Code</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 text-center w-[15%]">General Aptitude (GA) Marks</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 text-center w-[15%]">Subject: Compulsory Section</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 text-center w-[15%]">Subject: Optional Section(s)</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest text-center w-[15%]">Total Marks</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                        {distributionOfMarks.map((row, i) => (
                           <tr key={i} className={`hover:bg-slate-50 transition-colors ${i % 2 === 1 ? 'bg-slate-50/50' : ''}`}>
                              <td className="p-6 border-r border-slate-100 font-bold leading-relaxed">{row.code}</td>
                              <td className="p-6 border-r border-slate-100 text-center font-black text-lg">{row.ga}</td>
                              <td className="p-6 border-r border-slate-100 text-center font-black text-lg">{row.compulsory}</td>
                              <td className="p-6 border-r border-slate-100 text-center font-black text-lg">{row.optional}</td>
                              <td className="p-6 text-center font-black text-2xl text-[#075d63]">{row.total}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#fef3c7] border border-amber-200 rounded-2xl p-6 shadow-sm flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-700 shadow-sm shrink-0"><Calculator size={20} /></div>
               <p className="text-blue-700 font-bold text-lg md:text-xl"><span className="font-black">Note -</span> Only the on-screen virtual calculator will be allowed during the exam.</p>
            </motion.div>
         </div>
      </section>

      {/* RESTORED: Allowed Two Test Paper Combinations */}
      <section id="combinations" className="py-24 bg-white border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-6">
            <div className="mb-12">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <p className="text-slate-600 text-lg md:text-xl font-medium max-w-4xl leading-relaxed">
                     The combination of TWO papers must be chosen from the predefined list (shown below). Only ONE application form is required, even for two papers.
                  </p>
               </motion.div>
            </div>

            <div className="text-center mb-10">
               <div className="w-20 h-1 bg-gameGold mx-auto mt-2 rounded-full"></div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden mb-12">
               <div className="grid md:grid-cols-2 divide-x divide-slate-100">
                  {/* Left Column of Table */}
                  <div className="overflow-x-auto">
                     <table className="w-full text-left border-collapse">
                        <thead>
                           <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest">
                              <th className="p-4 border-r border-white/10 w-[30%]">Code of Primary Paper</th>
                              <th className="p-4 w-[70%]">Codes of Papers Allowed as Secondary</th>
                           </tr>
                        </thead>
                        <tbody className="text-[13px] text-slate-700 divide-y divide-slate-100">
                           {paperCombinations.slice(0, 14).map((row, i) => (
                              <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                 <td className="p-4 border-r border-slate-100 font-black text-gameTeal bg-slate-50/50">{row.primary}</td>
                                 <td className="p-4 font-bold group-hover:text-gameTeal transition-colors">{row.secondary}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
                  {/* Right Column of Table */}
                  <div className="overflow-x-auto">
                     <table className="w-full text-left border-collapse">
                        <thead>
                           <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest">
                              <th className="p-4 border-r border-white/10 w-[30%]">Code of Primary Paper</th>
                              <th className="p-4 w-[70%]">Codes of Papers Allowed as Secondary</th>
                           </tr>
                        </thead>
                        <tbody className="text-[13px] text-slate-700 divide-y divide-slate-100">
                           {paperCombinations.slice(14).map((row, i) => (
                              <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                 <td className="p-4 border-r border-slate-100 font-black text-gameTeal bg-slate-50/50">{row.primary}</td>
                                 <td className="p-4 font-bold group-hover:text-gameTeal transition-colors">{row.secondary}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>

            {/* Note */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-white p-8 rounded-[2rem] border border-slate-200 relative shadow-sm"
            >
               <div className="flex gap-4">
                  <AlertCircle className="text-gameTeal shrink-0" size={24} />
                  <p className="text-slate-700 text-sm md:text-base font-bold leading-relaxed">
                     <strong className="text-slate-900">Note -</strong> Candidates appearing for TWO GATE papers must select a primary and a secondary paper from the allowed combinations (shown above). Changes to combinations may occur due to scheduling constraints, with refunds provided if the second paper is canceled. New combinations, if announced, can be added with an additional fee. The exam centers for the two papers may differ but will remain in the same city. No legal liability is assumed for such arrangements.
                  </p>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 5. GATE 2026 IMPORTANT DATES (TABLE - 3) */}
      <section id="important-dates" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                  GATE 2026 Important Dates
               </h2>
               <div className="w-20 h-1 bg-[#f2c537] mx-auto rounded-full mb-4"></div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border-4 border-gameGold/20 overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <tbody className="text-sm md:text-base divide-y divide-slate-100">
                        {importantDates.map((row, i) => (
                           <tr key={i} className={`hover:bg-slate-50 transition-colors ${i % 2 === 1 ? 'bg-slate-50/30' : ''}`}>
                              <td className="p-6 md:p-8 w-[60%] font-bold text-slate-700 leading-relaxed border-r border-slate-100">
                                 {row.event}
                              </td>
                              <td className="p-6 md:p-8 w-[40%] font-medium leading-relaxed">
                                 {row.date}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>

      {/* 6. GATE 2026 SCHEDULE (TABLE - 4) */}
      <section id="exam-schedule" className="py-24 bg-white border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                  GATE 2026 Schedule
               </h2>
               <div className="w-20 h-1 bg-[#075d63] mx-auto rounded-full mb-4"></div>
               <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">(Table - 4)</p>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[900px]">
                     <thead>
                        <tr className="bg-[#6b4fa3] text-white">
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 w-[25%] text-center">Day, Date</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 w-[35%] text-center">Time (IST)</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest w-[40%] text-center">Test Papers</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm text-slate-700">
                        {examSchedule.map((day, i) => (
                           <React.Fragment key={i}>
                              {day.sessions.map((session, sIdx) => (
                                 <tr key={`${i}-${sIdx}`} className={`hover:bg-slate-50 transition-colors border-b border-slate-100`}>
                                    {sIdx === 0 && (
                                       <td rowSpan={2} className="p-6 border-r border-slate-100 font-black text-slate-900 bg-slate-50/50 align-middle text-center w-[25%]">
                                          {day.date}
                                       </td>
                                    )}
                                    <td className="p-6 border-r border-slate-100 font-bold text-slate-600 text-center w-[35%]">
                                       {session.time}
                                    </td>
                                    <td className="p-6 font-black text-[#075d63] leading-relaxed w-[40%] text-center">
                                       {session.papers}
                                    </td>
                                 </tr>
                              ))}
                           </React.Fragment>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white border-t border-slate-100" id="gate-faqs">
         <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                  <div key={i} className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'border-gameTeal shadow-md' : 'border-slate-200 shadow-sm hover:border-gameTeal/30'}`}>
                     <button onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} className="w-full flex justify-between items-center p-5 text-left">
                        <span className={`font-bold text-base md:text-lg pr-4 ${openFaqIndex === i ? 'text-gameTeal' : 'text-slate-800'}`}>{faq.q}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaqIndex === i ? 'bg-gameTeal text-white' : 'bg-slate-100 text-slate-500'}`}>
                           {openFaqIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                     </button>
                     <AnimatePresence>
                        {openFaqIndex === i && (
                           <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                              <div className="px-5 pb-5 pt-0 border-t border-dashed border-slate-100 mt-2">
                                 <div className="pt-4 text-slate-600 leading-relaxed font-medium">{faq.a}</div>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
          {selectedVideo && (
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                onClick={() => setSelectedVideo(null)}
             >
                <div className="absolute top-6 right-6 z-10">
                   <button className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                      <X size={24} />
                   </button>
                </div>
                <motion.div 
                   initial={{ scale: 0.9, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                   onClick={(e) => e.stopPropagation()}
                >
                   <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                   ></iframe>
                </motion.div>
             </motion.div>
          )}
       </AnimatePresence>

    </div>
  );
};

export default GateExamPage;