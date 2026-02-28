
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Target, Laptop, Users, CheckCircle2, 
  PlayCircle, FileText, BarChart, Layers, Video, Sparkles
} from 'lucide-react';

const CourseHelpSection: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Mastery Toolkit",
      items: [
        "Quality Content",
        "Class Notes & Study Material",
        "PYQs Analysis",
        "Structured Course Planner"
      ],
      icon: BookOpen,
      color: "bg-[#075d63]/10 text-[#075d63]",
      borderColor: "border-[#075d63]/20",
      dotColor: "bg-[#075d63]",
      graphic: (
        <div className="relative w-full h-full bg-[#075d63]/5 rounded-2xl p-4 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500 border border-[#075d63]/10 overflow-hidden">
           {/* Abstract Book/Notes Graphic */}
           <div className="relative z-10 w-32 h-40 bg-white rounded-r-xl rounded-l-sm shadow-xl border-l-4 border-[#075d63] flex flex-col p-3 transform -rotate-6">
              <div className="h-2 w-12 bg-[#075d63]/20 rounded mb-2"></div>
              <div className="h-1 w-full bg-slate-100 rounded mb-1"></div>
              <div className="h-1 w-full bg-slate-100 rounded mb-1"></div>
              <div className="h-1 w-2/3 bg-slate-100 rounded mb-3"></div>
              <div className="mt-auto flex justify-end">
                 <div className="w-6 h-6 rounded-full bg-[#075d63]/10 flex items-center justify-center text-[#075d63]">
                    <FileText size={12} />
                 </div>
              </div>
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#075d63]/5 rounded-full blur-2xl -z-0"></div>
           
           <div className="absolute bottom-3 right-3 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-[#075d63]/20 flex items-center gap-2">
              <CheckCircle2 size={12} className="text-[#075d63]" />
              <span className="text-[10px] font-bold text-slate-600">Updated Notes</span>
           </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Exam-Edge",
      items: [
        "Topic-wise Tests & Assignments",
        "Full-length Mock Exams",
        "Comprehensive Test Series",
        "Inclusive pre-exam practice series"
      ],
      icon: Target,
      color: "bg-[#f2c537]/10 text-[#9e7b0e]",
      borderColor: "border-[#f2c537]/30",
      dotColor: "bg-[#f2c537]",
      graphic: (
        <div className="relative w-full h-full bg-[#f2c537]/5 rounded-2xl p-4 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500 border border-[#f2c537]/20 overflow-hidden">
           <div className="relative z-10 bg-white p-4 rounded-xl shadow-lg border border-[#f2c537]/20 w-40">
              <div className="flex justify-between items-center mb-3">
                 <span className="text-[10px] font-bold text-slate-400 uppercase">Test Score</span>
                 <span className="text-xs font-black text-[#075d63]">92/100</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full mb-3 overflow-hidden">
                 <div className="h-full w-[92%] bg-gradient-to-r from-[#f2c537] to-amber-500 rounded-full"></div>
              </div>
              <div className="flex gap-1 justify-center">
                 {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#f2c537]/40"></div>)}
              </div>
           </div>
           
           {/* Floating Badge */}
           <div className="absolute -top-2 -right-2 bg-[#f2c537] text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-md z-20">
              Mock Series
           </div>
           
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#f2c537]/10 rounded-full blur-2xl -z-0"></div>
        </div>
      )
    },
    {
      id: 3,
      title: "Flexi-learn",
      items: [
        "Self-paced learning",
        "Live & Pre-recorded sessions",
        "Interactive Classes + Practice",
        "24/7 Dedicated Doubt support"
      ],
      icon: Laptop,
      color: "bg-slate-100 text-slate-700",
      borderColor: "border-slate-200",
      dotColor: "bg-slate-400",
      graphic: (
        <div className="relative w-full h-full bg-slate-50 rounded-2xl p-4 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500 border border-slate-200 overflow-hidden">
           <div className="relative z-10 w-44 aspect-video bg-white rounded-lg shadow-xl border border-slate-200 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[#0f1115] flex items-center justify-center">
                 <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <PlayCircle className="text-[#f2c537] fill-[#f2c537]" size={24} />
                 </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-[#075d63] text-white text-[8px] font-bold px-1.5 py-0.5 rounded">LIVE</div>
           </div>
           
           <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 z-20">
              <div className="flex -space-x-2">
                 <div className="w-6 h-6 rounded-full bg-[#f2c537] border-2 border-white"></div>
                 <div className="w-6 h-6 rounded-full bg-[#075d63] border-2 border-white"></div>
              </div>
              <span className="text-[10px] font-bold text-slate-600">Doubt Solved</span>
           </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Success Support",
      items: [
        "Personal Guidance from Gaurav Babu Sir",
        "Individual focus & exam updates",
        "Tailored course progress training",
        "Adaptive Learning Strategies"
      ],
      icon: Users,
      color: "bg-[#043f42]/5 text-[#043f42]",
      borderColor: "border-[#043f42]/10",
      dotColor: "bg-[#043f42]",
      graphic: (
        <div className="relative w-full h-full bg-[#043f42]/5 rounded-2xl p-4 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500 border border-[#043f42]/10 overflow-hidden">
           <div className="relative z-10 flex flex-col gap-2 w-full max-w-[180px]">
              {/* Chat Bubble 1 */}
              <div className="self-end bg-[#075d63] text-white p-2.5 rounded-2xl rounded-tr-none text-[10px] shadow-md max-w-[85%]">
                 How to improve my rank in Test 5?
              </div>
              {/* Chat Bubble 2 */}
              <div className="self-start bg-white text-slate-700 p-2.5 rounded-2xl rounded-tl-none text-[10px] shadow-md border border-slate-100 max-w-[90%] flex gap-2 items-center">
                 <div className="w-5 h-5 rounded-full bg-[#f2c537]/20 flex items-center justify-center shrink-0">
                    <Sparkles size={10} className="text-[#075d63]" />
                 </div>
                 Focus on weak topics. Here's your custom plan.
              </div>
           </div>
           
           <div className="mt-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-black text-[#075d63] tracking-wider shadow-sm border border-[#075d63]/20">
              1:1 MENTORSHIP
           </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#075d63]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f2c537]/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#075d63]/5 border border-[#075d63]/10 text-[#075d63] text-xs font-bold uppercase tracking-widest mb-4">
                 <CheckCircle2 size={14} /> Features
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                 How do these courses <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#075d63] to-teal-600">help you?</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#f2c537] mx-auto rounded-full"></div>
           </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
           {features.map((feature, idx) => (
              <motion.div
                 key={feature.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className={`bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border hover:shadow-[#075d63]/5 transition-all group overflow-hidden ${feature.borderColor}`}
              >
                 <div className="flex flex-col sm:flex-row gap-8 h-full items-stretch">
                    
                    {/* Content Side */}
                    <div className="flex-1 w-full order-2 sm:order-1 flex flex-col justify-center">
                       <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-sm transform group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon size={28} />
                       </div>
                       <h3 className="text-2xl font-extrabold text-slate-900 mb-5">{feature.title}</h3>
                       <ul className="space-y-3.5">
                          {feature.items.map((item, i) => (
                             <li key={i} className="flex items-start gap-3">
                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${feature.dotColor}`}></div>
                                <span className="text-slate-600 font-bold text-sm leading-relaxed">{item}</span>
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Graphic Side */}
                    <div className="w-full sm:w-48 h-48 sm:h-auto shrink-0 order-1 sm:order-2">
                       {feature.graphic}
                    </div>
                 </div>
              </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default CourseHelpSection;
