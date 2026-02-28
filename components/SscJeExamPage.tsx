
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
/* Added ExternalLink as ExternalLinkIcon to the import list to fix the missing reference on line 1427 */
import { 
  Building2, HardHat, Trophy, Shield, Wallet, TrendingUp, Clock, 
  ArrowRight, CheckCircle2, ChevronDown, Sparkles, GraduationCap,
  AlertCircle, Download, Calculator, Table as TableIcon, 
  BookOpen, PenTool, Users, Plus, Minus, Landmark, Target,
  Star, Briefcase, Zap, MousePointer2, FileText, Activity,
  Award, ShieldCheck, Banknote, Scale, Flag, Globe, Coins,
  Medal, Heart, GraduationCap as TrainingIcon, Construction,
  Info, ListChecks, CalendarRange, UserMinus, FileSearch,
  CheckCircle, HelpCircle, LayoutGrid, FileType, Anchor, Ticket, Train,
  Laptop, ClipboardCheck, MessageCircle, Newspaper, ExternalLink as ExternalLinkIcon
} from 'lucide-react';

const SscJeExamPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

  const keyHighlights = [
    {
      label: "Prestige & Security",
      title: "1. A Golden Ticket to a Respected & Secure Government Career.",
      desc: "Secure a Group B (Non-Gazetted) position that commands respect in society and provides lifelong stability.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=800&q=80", 
      icon: Shield,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      label: "Salary & Perks",
      title: "2. Attractive & Progressive Salary with Fantastic Perks",
      desc: "Enjoy Level-6 pay scale with HRA, DA, medical benefits, and a lifestyle that ensures prosperity for you and your family.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?fit=crop&w=800&q=80", 
      icon: Wallet,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      label: "Core Sectors",
      title: "3. Direct Entry into India's Core Infrastructure Sectors",
      desc: "Work on massive national projects like bridges, dams, and modern railways. See your engineering impact in real-time.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?fit=crop&w=800&q=80", 
      icon: HardHat,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      label: "Career Growth",
      title: "4. Clear & Time-Bound Career Progression to Executive Ranks",
      desc: "Climb the ladder from Junior Engineer to Assistant Engineer, Executive Engineer, and up to Engineer-in-Chief.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=800&q=80", 
      icon: TrendingUp,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      label: "Achievable Goal",
      title: "5. Achievable Goal with a Well-Defined Exam Pattern",
      desc: "With a structured syllabus and clarity in pattern, SSC-JE is an achievable dream for dedicated Diploma and Degree holders.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?fit=crop&w=800&q=80", 
      icon: Target,
      color: "text-amber-600",
      bg: "bg-amber-50"
    }
  ];

  const choiceReasons = [
    {
      title: "1. Prestigious Government Job",
      desc: "SSC-JE offers a Group B (Non-Gazetted) position, providing job satisfaction, recognition, and the opportunity to contribute to the nation’s infrastructure development.",
      icon: Award,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "2. Job Security and Stability",
      desc: "As a government job, SSC-JE ensures unmatched job security, timely salary increments, and retirement benefits, including a pension plan.",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "3. Attractive Salary and Perks",
      desc: "Enjoy a lucrative salary as per the 7th Pay Commission (Pay Level-6) along with allowances like DA (Dearness Allowance), HRA (House Rent Allowance), medical facilities, and travel benefits.",
      icon: Banknote,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "4. Career Growth Opportunities",
      desc: "SSC-JE provides clear promotion pathways, allowing candidates to advance to higher posts such as Assistant Engineer (AE) and Executive Engineer (EE) through departmental exams and experience.",
      icon: TrendingUp,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "5. Work-Life Balance",
      desc: "With fixed working hours, leave benefits, and structured workloads, SSC-JE ensures an excellent work-life balance for its employees.",
      icon: Scale,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      title: "6. Exposure to Major Projects",
      desc: "Work on prestigious government projects in departments like CPWD, MES, Railways, and Central Water Commission, gaining hands-on experience in Civil, Mechanical, and Electrical Engineering domains.",
      icon: HardHat,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "7. Nation-Building Contribution",
      desc: "Play a key role in critical public infrastructure projects and contribute to the country’s development in sectors like roads, bridges, water supply, and energy.",
      icon: Flag,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "8. Affordable Preparation",
      desc: "SSC-JE preparation is more accessible compared to other competitive exams, making it a cost-effective path to a stable and rewarding career.",
      icon: Coins,
      color: "text-cyan-600",
      bg: "bg-cyan-50"
    }
  ];

  const opportunitiesAdvantages = [
    {
      title: "1. Prestigious Government Positions",
      desc: "Qualifying SSC-JE opens the door to Group B (Non-Gazetted) positions in reputed government organisations like CPWD, MES, Railways, and Central Water Commission.",
      icon: Medal,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "2. Attractive Salary & Perks",
      desc: "Enjoy a handsome salary as per the 7th Pay Commission, along with benefits such as HRA, DA, medical facilities, and pension plans.",
      icon: Banknote,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "3. Job Security and Stability",
      desc: "As a government employee, you get unmatched job security, with regular pay increments and pension benefits after retirement.",
      icon: ShieldCheck,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "4. Career Growth and Promotions",
      desc: "Clear promotion pathways, including opportunities to rise to Assistant Engineer (AE) or Executive Engineer (EE) positions with experience and departmental exams.",
      icon: TrendingUp,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "5. Work-Life Balance",
      desc: "Government jobs like SSC-JE offer a structured work schedule, fixed working hours, paid holidays, and annual leave, promoting a healthy work-life balance.",
      icon: Scale,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      title: "6. Exposure to Major Projects",
      desc: "Work on large-scale infrastructure projects and national-level development initiatives in various engineering fields such as civil, mechanical, and electrical.",
      icon: Construction,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "7. Diverse Career Opportunities",
      desc: "After qualifying, you can work in multiple sectors, including infrastructure development, urban planning, transportation, and water resources.",
      icon: Briefcase,
      color: "text-cyan-600",
      bg: "bg-cyan-50"
    },
    {
      title: "8. Respect and Recognition",
      desc: "As an SSC-JE, you gain prestige and recognition for contributing to the country’s growth and working in essential government departments.",
      icon: Heart,
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      title: "9. Training and Skill Development",
      desc: "Government organisations offer continuous training and skill development programs to keep you updated with the latest industry trends.",
      icon: TrainingIcon,
      color: "text-amber-600",
      bg: "bg-amber-50"
    }
  ];

  const detailedPostData = [
    {
      no: 1,
      org: "Border Roads Organization (BRO)",
      posts: [
        {
          name: "JE (C)",
          qual: "Degree in Civil Engineering from a recognized University/Institute; or (a) Three years Diploma in Civil Engineering from a recognized University/ Institute/ Board and (b) Two years' of working experience in Planning/ Execution/ Maintenance of Civil Engineering works."
        },
        {
          name: "JE (E & M)",
          qual: "Degree in Electrical or Mechanical Engineering from a recognized University/Institute; or (a) Three years Diploma in Electrical/ Automobile/ Mechanical Engineering from a recognized University/ Institute/ Board and (b) Two years' experience in Planning/ Execution/ Maintenance of Electrical or Mechanical Engineering works."
        }
      ],
      age: "Up to 30 years"
    },
    {
      no: 2,
      org: "Brahmaputra Board, Ministry of Jal Shakti",
      posts: [
        { name: "JE (C)", qual: "Three years Diploma in Civil Engineering from a recognized University or Institute." }
      ],
      age: "Up to 30 years"
    },
    {
      no: 3,
      org: "Central Water Commission",
      posts: [
        { name: "JE (M)", qual: "Bachelor’s Degree or Diploma in Mechanical Engineering from a recognized University or Institute." },
        { name: "JE (C)", qual: "Bachelor’s Degree or Diploma in Civil Engineering from a recognized University or Institute." }
      ],
      age: "Up to 30 years"
    },
    {
      no: 4,
      org: "Central Public Works Department (CPWD)",
      posts: [
        { name: "JE (E)", qual: "Diploma in Electrical or Mechanical Engineering from a recognized University or Institute." },
        { name: "JE (C)", qual: "Diploma in Civil Engineering from a recognized University or Institute." }
      ],
      age: "Up to 32 years"
    },
    {
      no: 5,
      org: "Central Water and Power Research Station",
      posts: [
        { name: "JE (E)", qual: "Diploma in Electrical Engineering from a recognized Institute." },
        { name: "JE (C)", qual: "Diploma in Civil Engineering from a recognized Institute." }
      ],
      age: "Up to 30 years"
    },
    {
      no: 6,
      org: "DGQA-NAVAL, Ministry of Defence",
      posts: [
        {
          name: "JE (M)",
          qual: "Degree in Mechanical Engineering from a recognized Institute; or (a) Three years Diploma in Mechanical Engineering from a recognized University or Institution plus (b) One year experience in the respective field."
        },
        {
          name: "JE (E)",
          qual: "Degree in Electrical Engineering from a recognized University; or (a) Three years Diploma in Electrical Engineering from a recognized University or Institution plus (b) One year experience in the respective field."
        }
      ],
      age: "Up to 30 years"
    },
    {
      no: 7,
      org: "Farakka Barrage Project, Ministry of Jal Shakti",
      posts: [
        { name: "JE (E)", qual: "Diploma in Electrical Engineering from a recognized University or Institute or Board." },
        { name: "JE (C)", qual: "Diploma in Civil Engineering from a recognized University or Institute or Board." }
      ],
      age: "Up to 30 years"
    },
    {
      no: 8,
      org: "Military Engineer Services (MES)",
      posts: [
        {
          name: "JE (C)",
          qual: "Degree in Civil Engineering from a recognized University; or (a) Three years Diploma in Civil Engineering from a recognized Institute or University or Board and (b) Two years' experience in Planning Execution and Maintenance of Civil Engineering works."
        },
        {
          name: "JE (E & M)",
          qual: "Degree in Electrical or Mechanical Engineering from a recognized University; or (a) Three years Diploma in Electrical or Mechanical Engineering from a recognized Institute or University or Board and (b) Two years' experience in Planning Execution and Maintenance of Electrical or Mechanical Engineering Works."
        }
      ],
      age: "Up to 30 years"
    },
    {
      no: 9,
      org: "National Technical Research Organization (NTRO)",
      posts: [
        { name: "JE (C)", qual: "Diploma in Civil Engineering from a recognized University/Institute." }
      ],
      age: "Up to 30 years"
    }
  ];

  const ageRelaxationData = [
    { code: 1, category: "SC/ ST", relaxation: "5 years" },
    { code: 2, category: "OBC", relaxation: "3 years" },
    { code: 3, category: "PwD (Unreserved/EWS)", relaxation: "10 years" },
    { code: 4, category: "PWD (OBC)", relaxation: "13 years" },
    { code: 5, category: "PwD (SC/ ST)", relaxation: "15 years" },
    { code: 6, category: "Ex-Servicemen (ESM)", relaxation: "3 years after deduction of the military service rendered from the actual age." },
    { code: 7, category: "Defence Personnel is disabled in operation during hostilities with any foreign country or in a disturbed area and released as a consequence thereof. (Unreserved/EWS/OBC)", relaxation: "3 years" },
    { code: 8, category: "Defence Personnel is disabled in operation during hostilities with any foreign country or in a disturbed area and released as a consequence thereof (SC/ ST).", relaxation: "8 years" }
  ];

  const examPatternDetailed = [
    {
      paper: "Paper-I",
      mode: "Computer Based Examination",
      subjects: [
        { name: "(i) General Intelligence and Reasoning", qs: "50 / 50" },
        { name: "(ii) General Awareness", qs: "50 / 50" },
        { name: "(iii) Part-A: General Engineering (Civil & Structural) OR Part-B: General Engineering (Electrical) OR Part-C: General Engineering (Mechanical)", qs: "100 / 100" }
      ],
      duration: "2 Hours (2 hours and 40 minutes for the candidates who are eligible for scribe as per Para-9.1, 9.2 and 9.3 mentioned in official document (Link))"
    },
    {
      paper: "Paper-II",
      mode: "Computer Based Examination",
      subjects: [
        { name: "Part-A: General Engineering (Civil & Structural) OR Part-B: General Engineering (Electrical) OR Part-C: General Engineering (Mechanical)", qs: "100 / 300" }
      ],
      duration: "2 Hours (2 hours and 40 minutes for the candidates who are eligible for scribe as per Para-9.1, 9.2 and 9.3 mentioned in official document (Link))"
    }
  ];

  const examInstructions = [
    { id: 1, title: "General Engineering Selection", desc: "Candidates must attempt Part A (Civil), Part B (Electrical), or Part C (Mechanical) in both Paper I and Paper II based on their educational stream. Failure to do so will result in rejection." },
    { id: 2, title: "Question Format", desc: "Both Paper-I and Paper-II consist of Objective Type, Multiple-choice questions in Hindi & English." },
    { id: 3, title: "Negative Marking", items: ["Paper-I: 0.25 marks deducted per wrong answer.", "Paper II: 1 mark deducted per wrong answer."] },
    { id: 4, title: "Aids Allowed", items: ["Paper-I: No aids allowed.", "Paper-II: Slide Rule, Logarithm Table, and Steam Table permitted. A Scientific Calculator will be provided in the CBE software."] },
    { id: 5, title: "Answer Keys", desc: "Tentative Answer Keys will be available on the Commission's website. Candidates can submit objections online within the given time limit by paying Rs. 100/- per question (non-refundable)." },
    { id: 6, title: "Normalisation", desc: "Marks will be normalised for exams conducted in multiple shifts. Normalised scores will be used for final merit and cut-offs." },
    { id: 7, title: "Mechanical & Electrical Papers", desc: "For common posts, scores for the Mechanical and Electrical branches in Paper-II will be normalised due to differing question papers and difficulty levels." },
    { id: 8, title: "Exam Schedule", desc: "Dates are tentative. Any changes will be updated on the Commission's website." },
    { id: 9, title: "No Re-evaluation", desc: "Requests for re-evaluation/re-checking of scores will not be entertained." }
  ];

  const diplomaExamsData = [
    { no: 1, category: "Public Sector Undertakings (PSUs)", exams: "DRDO, SAIL, BHEL, BEL, NTPC, GAIL, IOCL, ISRO, NPCIL, etc. NTPC, PGCIL, etc.", roles: "Technician, Diploma Trainee Apprentice, Diploma Trainee" },
    { no: 2, category: "Railways", exams: "RRB-JE (Railway Recruitment Board)", roles: "Junior Engineer (JE)" },
    { no: 3, category: "Staff Selection Commission (SSC)", exams: "SSC-JE", roles: "Junior Engineer (Civil, Mechanical, Electrical)" },
    { no: 4, category: "State Public Service Commissions (PSC)", exams: "UPPSC, MPPSC, TNPSC, etc.", roles: "Junior Engineer (JE), Assistant Engineer (AE)" },
    { no: 5, category: "Defense Sector", exams: "Indian Army (MES), Indian Navy (SSR Artificer Apprentice), Military Engineering Services (MES)", roles: "Technical Roles, Junior Engineer" },
    { no: 6, category: "Power Sector", exams: "PGCIL, State Electricity Boards (MAHADISCOM, TANGEDCO, UPPCL)", roles: "JE, Technical Assistant" },
    { no: 7, category: "Road Transport & Highways", exams: "National Highways Authority of India (NHAI)", roles: "Technical Roles" },
    { no: 8, category: "Municipal Corporations", exams: "Local Bodies (eg, Public Works Departments)", roles: "Junior Engineer, Sub-Engineer" },
    { no: 9, category: "Apprenticeship Exams", exams: "IOCL ONGC HAL BOL, Tata Steel, L&T", roles: "Apprenticeship Trainee" },
    { no: 10, category: "State-Level Recruitment", exams: "PWD, Irrigation Dept., Rural Development Dept.", roles: "JE, Technical Posts" },
    { no: 11, category: "Border Roads Organisation", exams: "BRO", roles: "Junior Engineer, Technical Posts" },
    { no: 12, category: "Metro Rail Corporations", exams: "DMRC, Chennai Metro, Bangalore Metro", roles: "Junior Engineer, Technician" }
  ];

  const faqs = [
    { q: "Q.1 Can I prepare for the SSC-JE Exams with GAME Academy’s Online Coaching?", a: "Absolutely! GAME Academy’s SSC-JE coaching (Excellence Course) is specifically designed to help candidates prepare effectively for the SSC-JE exam." },
    { q: "Q.2 What are the branches GAME Academy deals with?", a: "As of now, GAME Academy provides coaching for Civil Engineering and Mechanical Engineering." },
    { q: "Q.3 Does GAME Academy cover non-technical parts as well?", a: "Yes, we are covering the entire syllabus of the non-technical part (Reasoning, General Awareness) as well." },
    { q: "Q 4. Why should I choose GAME for Online Coaching?", a: "GAME delivers high-quality education and top-notch content for Mechanical & Civil Engineering aspirants preparing for the SSC-JE exam. Under the leadership of Gaurav Babu Sir, a distinguished educator with 13+ years of experience, our teaching philosophy focuses on building a strong academic foundation by teaching subjects from scratch with conceptual clarity and practical problem-solving techniques. With GAME, students can confidently excel in competitive exams and achieve their career aspirations." },
    { q: "Q 5. Does GAME provide a test series along with the course?", a: "Yes, GAME provides a test series along with the course" },
    { q: "Q 6. Can I Prepare for the SSC-JE Exam While Working a Full-Time Job?", a: "You can prepare for the SSC-JE exam while managing a full-time job with the right strategy and dedication. GAME offers flexible SSC-JE online coaching with recorded lectures, structured study plans, and expert mentorship. By utilising focused study hours during evenings and weekends, and accessing comprehensive SSC-JE resources, success is achievable even with a busy work schedule." },
    {
      q: "Q 7. How Much Time is Needed for SSC-JE Exam Preparation for Full-Timers?",
      a: (
        <div className="space-y-4">
          <p>Full-time aspirants preparing for the SSC-JE exam typically require 6-8 months of focused study. Here’s an ideal timeline:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>4-5 months:</strong> Complete the syllabus with conceptual clarity and regular practice of standard questions.</li>
            <li><strong>1-2 months:</strong> Focus on solving previous year's question papers (PYQs), taking mock tests, and revising key topics.</li>
            <li><strong>Last 1 month:</strong> Fine-tune weak areas, improve problem-solving speed, and focus on accuracy.</li>
          </ul>
          <p>With proper planning and structured coaching support from GAME, full-time aspirants can effectively crack the SSC-JE exam within this time frame.</p>
        </div>
      )
    },
    {
      q: "Q 8. How Much Time is Needed for SSC-JE Exam Preparation for Working Individuals?",
      a: (
        <div className="space-y-4">
          <p>Working professionals can prepare for the SSC-JE exam effectively in 8-12 months with smart time management, as the SSC-JE syllabus is broader but more direct than ESE and GATE. Here’s a realistic plan:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Daily Study Hours:</strong> Dedicate 2-3 hours on weekdays and 4-6 hours on weekends.</li>
            <li><strong>Syllabus Completion:</strong> Spend the first 5-6 months covering core subjects, building conceptual clarity, and practising key questions.</li>
            <li><strong>Revision and Practice:</strong> Use the next 2-3 months to solve PYQs, take mock tests, and revise key areas.</li>
          </ul>
          <p>GAME offers flexible online coaching, structured study schedules, and concise study materials, enabling working professionals to balance their jobs and SSC-JE preparation effectively.</p>
        </div>
      )
    },
    {
      q: "Q 9. Is Coaching Necessary for Clearing the SSC-JE Exam?",
      a: (
        <div className="space-y-6">
          <p>Coaching is not mandatory for clearing the SSC-JE exam, but it can be extremely beneficial, especially for candidates who require structured guidance.</p>
          <ul className="list-disc pl-5 space-y-6">
            <li>
              <strong className="text-slate-900">Self-Study vs. Coaching:</strong>
              <ul className="list-circle pl-6 mt-2 space-y-2 text-slate-600">
                <li>If you have strong concepts, discipline, and access to quality study materials, self-study can be sufficient.</li>
                <li>Coaching institutes, however, provide expert mentorship, systematic syllabus coverage, and doubt-solving sessions.</li>
              </ul>
            </li>
            <li>
              <strong className="text-slate-900">Time Management:</strong>
              <ul className="list-circle pl-6 mt-2 space-y-2 text-slate-600">
                <li>Working professionals or students with limited time can benefit from platforms like <strong className="text-gameTeal">GAME</strong>, which offer flexible online coaching, recorded lectures, and focused content.</li>
              </ul>
            </li>
            <li>
              <strong className="text-slate-900">Competitive Edge:</strong>
              <ul className="list-circle pl-6 mt-2 space-y-2 text-slate-600">
                <li>Coaching institutes provide mock tests, previous year paper analysis, and exam-specific strategies to improve speed, accuracy, and problem-solving abilities.</li>
              </ul>
            </li>
          </ul>
          <p className="font-medium text-slate-700 italic border-l-4 border-gameGold pl-4 bg-slate-50 py-3 rounded-r-xl">
            In summary, while coaching is not a necessity, it can be <strong className="text-gameTeal">catalysed</strong> by providing structure, expert guidance, and consistency, ultimately enhancing your chances of success in the SSC-JE exam.
          </p>
        </div>
      )
    },
    {
      q: "Q 10. Various PSUs, AE-JE Exams that are exclusively for Diploma holders only / What other exams can I take after completing my Diploma?",
      a: (
        <div className="space-y-8">
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
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

          <div className="bg-slate-50 p-8 rounded-[2rem] border-l-4 border-gameGold space-y-4 shadow-inner">
            <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <Info size={18} className="text-gameTeal" /> Note :
            </h4>
            <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-600 font-bold leading-relaxed">
              <li>The above-mentioned opportunities are the general ones; to get real-time updates, students can check the <button className="text-gameTeal font-black underline hover:text-gameTealDark decoration-2 underline-offset-4 transition-all">"link of the Job Notification page"</button> so that students can save time without missing important job opportunities.</li>
              <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      q: "Q 11. What are the job opportunities for lateral entry candidates?",
      a: (
        <div className="space-y-12">
          {/* A. State PSC */}
          <div className="space-y-6">
            <p className="font-bold text-slate-800">Ans. A. State Public Service Commissions (PSC):</p>
            <p className="text-slate-600 text-base leading-relaxed">
              Many state commissions offer lateral entry pathways for advanced roles based on diploma or degree qualifications.
            </p>
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-[#bfdbfe] text-slate-900 text-[11px] font-black uppercase tracking-widest">
                           <th className="p-5 border-r border-slate-300 w-[30%] text-center">State PSC</th>
                           <th className="p-5 border-r border-slate-300 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[40%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="bg-[#fef9c3]/30 hover:bg-[#fef9c3]/50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-bold text-slate-900 text-center">UPPSC, TNPSC MPPSC</td>
                           <td className="p-5 border-r border-slate-200 text-center">Junior Engineer, Sub-Engineer</td>
                           <td className="p-5 leading-relaxed text-center">Diploma or equivalent; lateral entry for experienced candidates in technical departments.</td>
                        </tr>
                        <tr className="bg-[#fef9c3]/30 hover:bg-[#fef9c3]/50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-bold text-slate-900 text-center">PWD, Irrigation Dept.</td>
                           <td className="p-5 border-r border-slate-200 text-center">Assistant Engineer, JE</td>
                           <td className="p-5 leading-relaxed text-center">Lateral entry is allowed for diploma holders with significant experience.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* B. Defence Services */}
          <div className="space-y-6">
             <h4 className="font-bold text-slate-900 flex items-center gap-2"><Anchor className="text-blue-600" size={20} /> B. Defence Services:</h4>
             <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-[#bfdbfe] text-slate-900 text-[11px] font-black uppercase tracking-widest">
                           <th className="p-5 border-r border-slate-300 w-[30%] text-center">Organization</th>
                           <th className="p-5 border-r border-slate-300 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[40%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-bold text-slate-900 text-center">MES (Military Engineering Services)</td>
                           <td className="p-5 border-r border-slate-200 text-center">Junior Engineer</td>
                           <td className="p-5 leading-relaxed text-center">Diploma holders with lateral entry eligibility for senior roles.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-bold text-slate-900 text-center">Indian Navy, Army</td>
                           <td className="p-5 border-r border-slate-200 text-center">Technical Roles</td>
                           <td className="p-5 leading-relaxed text-center">Diploma in engineering; lateral opportunities through experience and promotions.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* C. Public Sector Undertakings (PSUs) */}
          <div className="space-y-6">
             <h4 className="font-bold text-slate-900 flex items-center gap-2"><Building2 className="text-emerald-600" size={20} /> C. Public Sector Undertakings (PSUs):</h4>
             <p className="text-slate-600 text-sm leading-relaxed">
               Lateral entry candidates with diplomas or advanced degrees can secure positions in PSUs through direct recruitment exams or experience-based roles.
             </p>
             <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-[#bfdbfe] text-slate-900 text-[11px] font-black uppercase tracking-widest">
                           <th className="p-5 border-r border-slate-300 w-[30%] text-center">PSU</th>
                           <th className="p-5 border-r border-slate-300 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[40%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-bold text-slate-900 text-center">DRDO</td>
                           <td className="p-5 border-r border-slate-200 text-center">Technician, Senior Technician</td>
                           <td className="p-5 leading-relaxed text-center">Diploma or lateral entry qualification in engineering.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-bold text-slate-900 text-center">NTPC, SAIL, GAIL</td>
                           <td className="p-5 border-r border-slate-200 text-center">Diploma Trainee, Supervisor</td>
                           <td className="p-5 leading-relaxed text-center">Diploma or equivalent qualification in relevant fields.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-bold text-slate-900 text-center">PGCIL, BEL, IOCL</td>
                           <td className="p-5 border-r border-slate-200 text-center">Supervisor, Junior Engineer</td>
                           <td className="p-5 leading-relaxed text-center">Diploma with relevant work experience.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* D. Railways */}
          <div className="space-y-6">
             <h4 className="font-bold text-slate-900 flex items-center gap-2"><Train className="text-red-600" size={20} /> D. Railways:</h4>
             <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-[#bfdbfe] text-slate-900 text-[11px] font-black uppercase tracking-widest">
                           <th className="p-5 border-r border-slate-300 w-[30%] text-center">Exam/Recruitment</th>
                           <th className="p-5 border-r border-slate-300 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[40%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-bold text-slate-900 text-center">RRB JE (Junior Engineer)</td>
                           <td className="p-5 border-r border-slate-200 text-center">Junior Engineer</td>
                           <td className="p-5 leading-relaxed text-center">Diploma holders are directly eligible; lateral entry pathways for higher posts via promotions.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-bold text-slate-900 text-center">Senior Section Engineer</td>
                           <td className="p-5 border-r border-slate-200 text-center">Supervisor</td>
                           <td className="p-5 leading-relaxed text-center">Degree holders with experience can enter mid-level posts.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* E. Metro Rail Corporations */}
          <div className="space-y-6">
             <h4 className="font-bold text-slate-900 flex items-center gap-2"><Ticket className="text-purple-600" size={20} /> E. Metro Rail Corporations:</h4>
             <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-[#bfdbfe] text-slate-900 text-[11px] font-black uppercase tracking-widest">
                           <th className="p-5 border-r border-slate-300 w-[30%] text-center">Organization</th>
                           <th className="p-5 border-r border-slate-300 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[40%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-bold text-slate-900 text-center">DMRC, Chennai Metro, Bangalore Metro</td>
                           <td className="p-5 border-r border-slate-200 text-center">Junior Engineer</td>
                           <td className="p-5 leading-relaxed text-center">Diploma holders are eligible for lateral promotions to higher technical posts.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-[2rem] border-l-4 border-gameGold space-y-4 shadow-inner">
            <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <Info size={18} className="text-gameTeal" /> Note :
            </h4>
            <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-600 font-bold leading-relaxed">
              <li>The above-mentioned opportunities are the general ones; to get real-time updates, students can check the <button className="text-gameTeal font-black underline hover:text-gameTealDark decoration-2 underline-offset-4 transition-all">"link of the Job Notification page"</button> so that students can save time without missing important job opportunities.</li>
              <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
            </ol>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-gameTeal selection:text-white -mt-20">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-black text-white">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

         <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
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
                  Your Shortcut to a <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal via-teal-400 to-gameGold">
                     Stellar JE Career
                  </span>
               </h1>

               <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                  Dominate SSC-JE with Gaurav Babu Sir. Better salaries, premium lifestyles, and prestigious government roles await.
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
               <div className="flex items-center gap-1 md:gap-6 overflow-x-auto no-scrollbar mask-gradient-right w-full md:w-auto">
                  {[
                     { label: "Overview", id: "overview" },
                     { label: "Highlights", id: "highlights" },
                     { label: "Why Choice", id: "why-right-choice" },
                     { label: "Advantages", id: "opportunities-advantages" },
                     { label: "Post Details", id: "detailed-posts" },
                     { label: "Age Relaxation", id: "age-relaxation" },
                     { label: "Pattern", id: "detailed-pattern" },
                     { label: "Syllabus", id: "ssc-syllabus" },
                     { label: "Coaching", id: "ssc-coaching-info" },
                     { label: "Courses", id: "ssc-online-courses" },
                     { label: "Materials", id: "ssc-study-materials" },
                     { label: "Vacancy", id: "ssc-vacancy-dates" },
                     { label: "FAQs", id: "ssc-faqs" }
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
               <div className="hidden md:flex items-center gap-4 pl-4 border-l border-white/10 shrink-0">
                  <button 
                     onClick={() => scrollToSection('ssc-coaching-info')} 
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
                  <span className="text-gameTeal font-bold tracking-widest uppercase text-xs mb-3 block">Examination Profile</span>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                     What is <span className="text-gameGoldDark">SSC-JE?</span>
                  </h2>
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                     <p>
                        The Staff Selection Commission (SSC) will conduct an open competitive examination to recruit Junior Engineers (Civil, Mechanical, Electrical, and Quantity Surveying & Contracts) for various Ministries, Departments, and Organisations under the Government of India.
                     </p>
                     <p>
                        These positions fall under Group B (Non-Gazetted) posts.
                     </p>
                     <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-gameTeal text-slate-700 italic">
                        "Majority of engineering aspirants choose SSC-JE for the perfect balance of career growth, job security, and the chance to lead national infrastructure projects."
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
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?fit=crop&w=800&q=80" 
                        alt="SSC JE Engineer" 
                        className="rounded-[2rem] w-full h-auto object-cover"
                     />
                     <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                              <CheckCircle2 size={20} />
                           </div>
                           <div className="font-bold text-slate-900">Level-6 Pay Matrix</div>
                        </div>
                        <p className="text-xs text-slate-500">Starting basic pay of ₹35,400 with additional government perks.</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 3. KEY HIGHLIGHTS SECTION */}
      <section id="highlights" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-32 border-t border-slate-200">
         <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
         <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                     Why is <span className="text-[#075d63]">SSC-JE</span> the Right Choice?
                  </h2>
                  <p className="text-slate-600 max-w-3xl mx-auto text-xl font-bold mb-4">
                     Unlock better salaries, premium lifestyles, and big opportunities.
                  </p>
                  <div className="inline-block bg-[#f2c537] text-black px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm shadow-md">
                     Your Gateway to Better Salaries, Better Lifestyles, and Big Opportunities!
                  </div>
               </motion.div>
            </div>

            <div className="space-y-20">
               {keyHighlights.map((item, i) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 50 }} 
                     whileInView={{ opacity: 1, y: 0 }} 
                     viewport={{ once: true }} 
                     transition={{ duration: 0.6 }}
                     className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                  >
                     <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-gameTeal/5 rounded-full blur-3xl transform rotate-12"></div>
                        <div className="relative rounded-[2.5rem] p-3 border border-white bg-white shadow-2xl overflow-hidden group">
                           <img 
                              src={item.image} 
                              alt={item.label} 
                              className="w-full aspect-video lg:aspect-square object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                              <p className="text-lg font-black italic">Building India's Future</p>
                           </div>
                        </div>
                     </div>

                     <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white border border-slate-200 text-gameTeal font-black text-xs uppercase tracking-widest mb-6 shadow-sm">
                           {item.label}
                        </div>
                        <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 leading-tight group-hover:text-gameTeal transition-colors">
                           {item.title}
                        </h3>
                        <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-8">
                           {item.desc}
                        </p>
                        <button className="bg-gameTeal text-white px-8 py-3 rounded-xl font-bold hover:bg-gameTealDark transition-all shadow-lg flex items-center gap-2 group">
                           Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. WHY SSC-JE THE RIGHT CHOICE - DETAILED SECTION */}
      <section id="why-right-choice" className="py-24 bg-white border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gameTeal/5 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="mb-16">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                     2. Why is <span className="text-gameTeal">SSC-JE the Right Choice?</span>
                  </h2>
                  <p className="text-slate-600 text-lg md:text-xl font-medium max-w-4xl leading-relaxed mb-10">
                     Choosing SSC-JE opens the door to a rewarding and stable career in government engineering. With numerous opportunities for career growth, job security, and a competitive salary, SSC-JE is an excellent choice for engineering graduates. Here's why SSC-JE stands out as the right choice for your future:
                  </p>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {choiceReasons.map((reason, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.05 }}
                     className="bg-slate-50 rounded-[2rem] p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:bg-white hover:border-gameTeal/20 transition-all duration-300 group flex flex-col h-full"
                  >
                     <div className={`w-14 h-14 rounded-2xl ${reason.bg} flex items-center justify-center ${reason.color} mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <reason.icon size={28} strokeWidth={2} />
                     </div>
                     <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-gameTeal transition-colors">
                        {reason.title}
                     </h3>
                     <p className="text-slate-500 text-sm font-bold leading-relaxed flex-grow">
                        {reason.desc}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. OPPORTUNITIES AND ADVANTAGES */}
      <section id="opportunities-advantages" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gameGold/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
         <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="mb-16">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                     3. Opportunities and <span className="text-gameTeal">Advantages After Qualifying SSC-JE</span>
                  </h2>
                  <p className="text-slate-600 text-lg md:text-xl font-medium max-w-4xl leading-relaxed mb-10">
                    Embarking on a career with <strong className="text-slate-900">SSC-JE</strong> brings a multitude of opportunities for growth, stability, and advancement. It provides a chance to work in prestigious government organisations and contribute to national development. Here’s why SSC-JE is the right choice for building a successful future:
                  </p>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
               {opportunitiesAdvantages.map((item, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:border-gameTeal/30 transition-all duration-300 group flex flex-col h-full"
                  >
                     <div className={`w-16 h-16 rounded-3xl ${item.bg} flex items-center justify-center ${item.color} mb-6 shadow-inner group-hover:rotate-6 transition-transform duration-300`}>
                        <item.icon size={32} strokeWidth={2} />
                     </div>
                     <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-gameTeal transition-colors">
                        {item.title}
                     </h3>
                     <p className="text-slate-500 text-sm font-bold leading-relaxed flex-grow">
                        {item.desc}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. DETAILS OF POSTS & QUALIFICATIONS */}
      <section id="detailed-posts" className="py-24 bg-white border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-6">
            <div className="mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                     4. Details of Posts, Essential <br className="hidden md:block" />
                     <span className="text-gameTeal">Educational Qualifications</span>
                  </h2>
                  <p className="text-slate-600 text-lg md:text-xl font-medium max-w-4xl leading-relaxed">
                     The recruitment is conducted by the Staff Selection Commission (SSC) for the post of Junior Engineers (JE) Group ‘B’ Non-Gazetted posts. The various eligibility parameters are discussed below:
                  </p>
               </motion.div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden mb-12">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[1000px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-6 border-r border-white/10 w-[5%] text-center">S. No.</th>
                           <th className="p-6 border-r border-white/10 w-[20%]">Organisation</th>
                           <th className="p-6 border-r border-white/10 w-[10%] text-center">Post</th>
                           <th className="p-6 border-r border-white/10 w-[50%]">Essential Educational Qualifications</th>
                           <th className="p-6 w-[15%] text-center">Age Limit</th>
                        </tr>
                     </thead>
                     <tbody className="text-[13px] text-slate-700 divide-y divide-slate-100">
                        {detailedPostData.map((row, i) => (
                           <React.Fragment key={i}>
                              {row.posts.map((post, postIdx) => (
                                 <tr key={`${i}-${postIdx}`} className="hover:bg-slate-50 transition-colors">
                                    {postIdx === 0 && (
                                       <td rowSpan={row.posts.length} className="p-6 text-center font-black text-slate-400 border-r border-slate-100 align-middle bg-slate-50/30">
                                          {row.no}.
                                       </td>
                                    )}
                                    {postIdx === 0 && (
                                       <td rowSpan={row.posts.length} className="p-6 font-black text-slate-900 border-r border-slate-100 align-middle">
                                          {row.org}
                                       </td>
                                    )}
                                    <td className="p-6 text-center font-bold text-gameTeal border-r border-slate-100">
                                       {post.name}
                                    </td>
                                    <td className="p-6 leading-relaxed border-r border-slate-100 font-medium">
                                       {post.qual}
                                    </td>
                                    {postIdx === 0 && (
                                       <td rowSpan={row.posts.length} className="p-6 text-center font-black text-slate-900 align-middle bg-slate-50/30">
                                          {row.age}
                                       </td>
                                    )}
                                 </tr>
                              ))}
                           </React.Fragment>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-gameGold flex items-center gap-4">
               <Info className="text-gameTeal shrink-0" size={24} />
               <p className="text-sm font-bold text-slate-600">
                  <span className="text-slate-900 font-black uppercase tracking-wider">Note:</span> JE(E&M) - Junior Engineer (Electrical & Mechanical). For latest updates and specific details, please refer to the official SSC notification.
               </p>
            </div>
         </div>
      </section>

      {/* 5. PERMISSIBLE AGE RELAXATION */}
      <section id="age-relaxation" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-6">
            <div className="mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                     5. Permissible <span className="text-gameTeal">Age Relaxation:</span>
                  </h2>
                  <p className="text-slate-600 text-lg md:text-xl font-medium max-w-4xl leading-relaxed">
                     Upper age limit relaxation as per Government of India guidelines for various categories are discussed below:
                  </p>
               </motion.div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden relative">
               <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>
               
               <div className="overflow-x-auto relative z-10">
                  <table className="w-full text-left border-collapse min-w-[900px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-6 border-r border-white/10 w-[10%] text-center">Code</th>
                           <th className="p-6 border-r border-white/10 w-[45%]">Category</th>
                           <th className="p-6 w-[45%]">Age relaxation permissible beyond the upper age limit</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        {ageRelaxationData.map((row, i) => (
                           <tr key={i} className="hover:bg-[#f8fafc] transition-colors group">
                              <td className="p-6 text-center font-black text-[#075d63] border-r border-slate-100 bg-slate-50/50">
                                 {row.code}
                              </td>
                              <td className="p-6 font-bold text-slate-900 border-r border-slate-100 group-hover:text-[#075d63] transition-colors">
                                 {row.category}
                              </td>
                              <td className="p-6 leading-relaxed font-black text-slate-600">
                                 {row.relaxation}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#075d63]/10 flex items-center justify-center text-[#075d63] shrink-0">
                     <CalendarRange size={24} />
                  </div>
                  <div>
                     <h4 className="font-black text-slate-900 text-sm uppercase">Date of Birth</h4>
                     <p className="text-xs text-slate-500 font-bold">Must match Matriculation/Secondary Examination Certificate.</p>
                  </div>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                     <UserMinus size={24} />
                  </div>
                  <div>
                     <h4 className="font-black text-slate-900 text-sm uppercase">ESM Definition</h4>
                     <p className="text-xs text-slate-500 font-bold">As per GoI OM No. 36034/1/2006-Estt (Res) dated 04.10.2012.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. SSC-JE EXAMINATION PATTERN & INSTRUCTIONS */}
      <section id="detailed-pattern" className="py-24 bg-white border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-6">
            <div className="mb-12">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                     6. SSC-JE Examination <span className="text-[#075d63]">Pattern & Instructions</span>
                  </h2>
               </motion.div>
            </div>

            {/* Pattern Table */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl border-4 border-[#075d63]/10 overflow-hidden mb-16">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[1000px]">
                     <thead>
                        <tr className="bg-[#075d63] text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-6 border-r border-white/10 w-[10%] text-center">Papers</th>
                           <th className="p-6 border-r border-white/10 w-[15%] text-center">Mode of Examination</th>
                           <th className="p-6 border-r border-white/10 w-[35%]">Subject</th>
                           <th className="p-6 border-r border-white/10 w-[15%] text-center">Number of Questions / Maximum Marks</th>
                           <th className="p-6 w-[25%] text-center">Duration</th>
                        </tr>
                     </thead>
                     <tbody className="text-[13px] text-slate-700 divide-y divide-slate-100">
                        {examPatternDetailed.map((row, i) => (
                           <React.Fragment key={i}>
                              {row.subjects.map((sub, sIdx) => (
                                 <tr key={`${i}-${sIdx}`} className="hover:bg-slate-50 transition-colors">
                                    {sIdx === 0 && (
                                       <td rowSpan={row.subjects.length} className="p-6 text-center font-black text-[#075d63] border-r border-slate-100 align-middle bg-slate-50/50">
                                          {row.paper}
                                       </td>
                                    )}
                                    {sIdx === 0 && (
                                       <td rowSpan={row.subjects.length} className="p-6 text-center font-bold text-slate-800 border-r border-slate-100 align-middle bg-slate-50/20 leading-snug">
                                          {row.mode}
                                       </td>
                                    )}
                                    <td className="p-6 font-medium border-r border-slate-100 leading-relaxed">
                                       {sub.name}
                                    </td>
                                    <td className="p-6 text-center font-black text-slate-900 border-r border-slate-100 text-lg">
                                       {sub.qs}
                                    </td>
                                    {sIdx === 0 && (
                                       <td rowSpan={row.subjects.length} className="p-6 text-center font-bold text-slate-500 align-middle leading-relaxed bg-slate-50/30 text-xs">
                                          {row.duration}
                                       </td>
                                    )}
                                 </tr>
                              ))}
                           </React.Fragment>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Detailed Instructions List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {examInstructions.map((inst, i) => (
                  <motion.div
                     key={inst.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.05 }}
                     className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 hover:shadow-xl hover:bg-white hover:border-gameTeal/20 transition-all duration-300 group"
                  >
                     <div className="flex items-center gap-4 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#075d63] font-black shadow-sm group-hover:bg-[#075d63] group-hover:text-white transition-colors">
                           {inst.id}
                        </div>
                        <h4 className="text-base font-black text-slate-900 group-hover:text-[#075d63] transition-colors">{inst.title}</h4>
                     </div>
                     
                     {inst.desc && (
                        <p className="text-slate-600 text-sm font-medium leading-relaxed">
                           {inst.desc}
                        </p>
                     )}

                     {inst.items && (
                        <ul className="space-y-3">
                           {inst.items.map((item, idx) => (
                              <li key={idx} className="flex gap-3 items-start text-sm text-slate-600 font-medium">
                                 <div className="w-1.5 h-1.5 rounded-full bg-[#f2c537] shrink-0 mt-2"></div>
                                 {item}
                              </li>
                           ))}
                        </ul>
                     )}
                  </motion.div>
               ))}
            </div>

            <div className="mt-12 bg-[#075d63]/5 p-6 rounded-2xl border-l-4 border-[#075d63] flex items-start gap-4">
               <Info className="text-[#075d63] shrink-0" size={24} />
               <p className="text-sm font-bold text-slate-700">
                  <span className="font-black uppercase tracking-wider">Crucial Note:</span> Candidates are advised to read the official SSC notification thoroughly. The Virtual Calculator is only available in Paper-II within the software interface.
               </p>
            </div>
         </div>
      </section>

      {/* 7. SSC-JE SYLLABUS SECTION */}
      <section id="ssc-syllabus" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="mb-12">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                     7. SSC-JE <span className="text-gameTeal">Syllabus</span>
                  </h2>
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-10 group hover:border-gameTeal/30 transition-all duration-500">
                     <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                           <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600">
                              <FileType size={28} />
                           </div>
                           <h3 className="text-2xl font-black text-slate-900">Official Curriculum</h3>
                        </div>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xl">
                           For Mechanical & Civil Engineering, click on the link below to get the official syllabus. Stay aligned with the latest UPSC requirements.
                        </p>
                        <p className="mt-4 text-[#f2c537] font-black text-sm uppercase tracking-widest bg-black/5 inline-block px-3 py-1 rounded">
                           Link 1- ssc je official syllabus mechanical & civil.pdf
                        </p>
                     </div>
                     <div className="shrink-0 w-full md:w-auto">
                        <a 
                          href="#" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-red-700 transition-all shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:-translate-y-1 group"
                        >
                           <Download size={22} className="group-hover:animate-bounce" />
                           Download Syllabus (Link-1)
                        </a>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 8. SSC-JE COACHING & BEST ONLINE COACHING */}
      <section id="ssc-coaching-info" className="py-24 bg-white border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
               {/* Coaching at GAME */}
               <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                     8. SSC-JE Coaching <span className="text-gameTeal">at GAME</span>
                  </h2>
                  <div className="prose prose-lg text-slate-600 space-y-6 max-w-none">
                     <p className="font-medium leading-relaxed">
                        Choosing the <strong className="text-slate-900">best SSC-JE coaching</strong> can be a game-changer for your exam preparation, and GAME is here to ensure you ace the SSC-JE exam. Our courses are designed with affordability and quality in mind, providing students with a strong foundation and strategic approach to mastering the SSC-JE syllabus.
                     </p>
                     <p className="bg-[#075d63]/5 border-l-4 border-[#075d63] p-6 rounded-r-2xl italic font-bold">
                        "GAME's user-friendly language and simplified concepts make learning accessible and enjoyable for everyone."
                     </p>
                  </div>
               </motion.div>

               {/* Best Online Coaching for Civil & Mech */}
               <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                     9. Best Online Coaching for <br/><span className="text-gameTeal">SSC-JE Civil & Mechanical</span>
                  </h3>
                  <div className="space-y-6 text-slate-600 font-medium">
                     <p>
                        At GAME, we offer the <strong className="text-slate-900">best online coaching for SSC-JE Civil & Mechanical</strong>, ensuring that SSC-JE aspirants have access to comprehensive study materials and the best faculty. We understand the critical role that quality education plays in exam success.
                     </p>
                     <div className="grid grid-cols-2 gap-4 mt-8">
                        {[
                           { label: "Civil Engineering", icon: Building2 },
                           { label: "Mechanical Engineering", icon: HardHat },
                           { label: "Reasoning", icon: Target },
                           { label: "General Awareness", icon: Newspaper }
                        ].map((sub, i) => (
                           <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-3 shadow-sm group hover:border-gameTeal transition-all">
                              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-gameTeal group-hover:bg-gameTeal group-hover:text-white transition-colors">
                                 <sub.icon size={18} />
                              </div>
                              <span className="text-xs font-black uppercase tracking-tight">{sub.label}</span>
                           </div>
                        ))}
                     </div>
                     <p className="mt-8">
                        Our focus is on helping students build the expertise necessary to excel. With <strong className="text-[#075d63]">live sessions</strong>, <strong className="text-[#075d63]">recorded lectures</strong>, and <strong className="text-[#075d63]">personalised support</strong>, GAME equips you with the knowledge and skills to confidently tackle the exam.
                     </p>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 10. SSC-JE ONLINE COURSES */}
      <section id="ssc-online-courses" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32 overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-6 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gameGold/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                     10. SSC-JE Online <span className="text-gameTeal">Courses by GAME</span>
                  </h2>
                  <p className="text-slate-600 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                     GAME offers a wide range of programs tailored to meet the specific requirements of SSC-JE exam aspirants.
                  </p>
               </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                 className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col gap-6 group hover:border-gameTeal/30 transition-all"
               >
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                     <GraduationCap size={32} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">Expert Guidance</h4>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed">
                     Our expert teachers, armed with extensive knowledge and experience, guide students throughout their journey.
                  </p>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                 className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col gap-6 group hover:border-gameTeal/30 transition-all"
               >
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                     <ClipboardCheck size={32} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">Regular Assessments</h4>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed">
                     With regular assessments, mock tests, and doubt-clearing sessions, students can track their progress effectively.
                  </p>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                 className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col gap-6 group hover:border-gameTeal/30 transition-all"
               >
                  <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                     <Target size={32} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">Refined Mastery</h4>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed">
                     Our emphasis on mock tests is designed to help students refine their understanding and application of core concepts.
                  </p>
               </motion.div>
            </div>

            <div className="mt-16 bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
               <div className="absolute top-0 right-0 w-64 h-64 bg-gameTeal/20 rounded-full blur-3xl"></div>
               <div className="flex-1">
                  <h4 className="text-2xl font-black mb-4 flex items-center gap-3"><Sparkles className="text-gameGold" /> Dynamic Learning</h4>
                  <p className="text-slate-300 font-medium text-lg leading-relaxed">
                     "GAME's SSC-JE best online coaching creates a dynamic learning environment that encourages growth and mastery of the subjects necessary for SSC-JE success."
                  </p>
               </div>
               <button className="bg-gameTeal text-white px-10 py-4 rounded-xl font-black uppercase tracking-wider hover:bg-gameTealDark transition-all shadow-xl shrink-0">
                  Explore Programs
               </button>
            </div>
         </div>
      </section>

      {/* 11. SSC-JE STUDY MATERIALS */}
      <section id="ssc-study-materials" className="py-24 bg-white border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1080px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                     11. SSC-JE Study Materials <span className="text-gameTeal">at GAME</span>
                  </h2>
                  <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
                     <p>
                        Our <strong className="text-slate-900">SSC-JE online coaching</strong> platform prioritises high-quality study materials, meticulously curated to align with the latest exam patterns.
                     </p>
                     <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-gameGold text-slate-800 font-bold">
                        Covering critical concepts of reasoning, quantitative aptitude, and civil engineering and mechanical engineering concepts, our well-structured materials ensure comprehensive coverage.
                     </p>
                     <p>
                        The study modules allow for easy navigation, enabling students to focus on specific areas of study and expand their knowledge systematically.
                     </p>
                  </div>
               </motion.div>

               <motion.div 
                 className="lg:w-1/2 relative"
                 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
               >
                  <div className="bg-slate-100 rounded-[3rem] p-12 flex items-center justify-center border-2 border-dashed border-slate-300">
                     <div className="relative group">
                        <div className="w-56 h-72 bg-white rounded-xl shadow-2xl border-l-[12px] border-gameTeal p-6 transform -rotate-6 transition-transform group-hover:rotate-0 group-hover:scale-105 duration-500">
                           <div className="h-4 w-12 bg-slate-100 rounded mb-4"></div>
                           <div className="h-2 w-full bg-slate-50 rounded mb-2"></div>
                           <div className="h-2 w-full bg-slate-50 rounded mb-2"></div>
                           <div className="h-2 w-3/4 bg-slate-50 rounded mb-8"></div>
                           <div className="mt-auto flex justify-end"><FileText className="text-gameTeal opacity-20" size={48} /></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-[#f2c537] p-5 rounded-3xl shadow-xl font-black text-slate-900 text-center uppercase tracking-widest leading-none">
                           Meticulously <br/> Curated
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 12. SSC-JE EXAM VACANCY & EXAM DATES */}
      <section id="ssc-vacancy-dates" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32 overflow-hidden">
         <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-black uppercase tracking-[0.2em] mb-8">
                  <AlertCircle size={14} /> Official Notifications
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">
                  12. SSC-JE Exam Vacancy & <span className="text-rose-600">Exam Dates</span>
               </h2>
               <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100 max-w-4xl mx-auto relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]"></div>
                  <div className="relative z-10">
                     <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-bold mb-10">
                        The vacancy details & exam dates are officially announced through the SSC JE Notification released on the SSC website.
                     </p>
                     <a 
                        href="https://ssc.nic.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-gameTeal transition-all shadow-xl hover:-translate-y-1"
                     >
                        Check SSC Website <ExternalLinkIcon size={20} className="text-gameGold" />
                     </a>
                     <p className="mt-8 text-sm font-bold text-slate-400 uppercase tracking-widest">(ssc.nic.in)</p>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 13. FAQs - ALWAYS LAST */}
      <section className="py-24 bg-white border-t border-slate-200 scroll-mt-32" id="ssc-faqs">
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

    </div>
  );
};

export default SscJeExamPage;
