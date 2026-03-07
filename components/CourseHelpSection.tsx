
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Target, Laptop, Users, CheckCircle2, 
  PlayCircle, FileText, Sparkles, ArrowRight
} from 'lucide-react';

const CourseHelpSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const features = [
    {
      id: 1,
      title: "Mastery Toolkit",
      subtitle: "Comprehensive Resources",
      description: "Access high-quality content, structured course planners, and detailed PYQ analysis to build a strong foundation.",
      tags: ["Notes", "Planner", "PYQs"],
      icon: BookOpen,
      bgGradient: "from-[#075d63] to-[#0a4d52]",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center">
           {/* Abstract Book/Notes Graphic */}
           <div className="relative z-10 w-48 h-60 bg-white rounded-r-xl rounded-l-sm shadow-2xl border-l-4 border-[#075d63] flex flex-col p-4 transform rotate-[-6deg] group-hover:rotate-0 transition-all duration-500">
              <div className="h-3 w-16 bg-[#075d63]/20 rounded mb-3"></div>
              <div className="h-1.5 w-full bg-slate-100 rounded mb-1.5"></div>
              <div className="h-1.5 w-full bg-slate-100 rounded mb-1.5"></div>
              <div className="h-1.5 w-full bg-slate-100 rounded mb-1.5"></div>
              <div className="h-1.5 w-2/3 bg-slate-100 rounded mb-4"></div>
              
              <div className="h-1.5 w-full bg-slate-100 rounded mb-1.5"></div>
              <div className="h-1.5 w-full bg-slate-100 rounded mb-1.5"></div>
              <div className="h-1.5 w-1/2 bg-slate-100 rounded mb-1.5"></div>

              <div className="mt-auto flex justify-between items-center border-t border-slate-100 pt-3">
                 <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-[#075d63]/10 flex items-center justify-center text-[#075d63]">
                    <FileText size={14} />
                 </div>
              </div>
           </div>
           
           {/* Floating Elements */}
           <div className="absolute top-10 right-10 bg-white px-3 py-2 rounded-lg shadow-lg border border-[#075d63]/10 flex items-center gap-2 animate-bounce duration-[3000ms]">
              <CheckCircle2 size={14} className="text-[#075d63]" />
              <span className="text-[10px] font-bold text-slate-700">Updated Content</span>
           </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Exam-Edge",
      subtitle: "Test Series & Mocks",
      description: "Sharpen your skills with topic-wise tests, full-length mock exams, and comprehensive performance analysis.",
      tags: ["Mock Tests", "Analysis", "Ranking"],
      icon: Target,
      bgGradient: "from-[#b48e0b] to-[#8c6d09]",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center">
           <div className="relative z-10 bg-white p-5 rounded-2xl shadow-2xl border border-amber-100 w-56 transform group-hover:scale-105 transition-all duration-500">
              <div className="flex justify-between items-center mb-4">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Performance</span>
                 <span className="text-sm font-black text-[#b48e0b]">92%</span>
              </div>
              
              {/* Graph Bars */}
              <div className="flex items-end justify-between h-24 gap-2 mb-4">
                 <div className="w-full bg-amber-50 rounded-t-md h-[40%] relative group-hover:h-[50%] transition-all duration-700"></div>
                 <div className="w-full bg-amber-100 rounded-t-md h-[60%] relative group-hover:h-[70%] transition-all duration-700 delay-75"></div>
                 <div className="w-full bg-amber-200 rounded-t-md h-[50%] relative group-hover:h-[40%] transition-all duration-700 delay-100"></div>
                 <div className="w-full bg-gradient-to-t from-[#f2c537] to-[#b48e0b] rounded-t-md h-[85%] relative shadow-lg group-hover:h-[95%] transition-all duration-700 delay-150">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded">You</div>
                 </div>
                 <div className="w-full bg-amber-50 rounded-t-md h-[45%] relative"></div>
              </div>

              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                 <div className="h-full w-[92%] bg-[#b48e0b] rounded-full"></div>
              </div>
           </div>
           
           {/* Floating Badge */}
           <div className="absolute bottom-20 -left-4 bg-[#000] text-[#f2c537] text-[10px] font-bold px-4 py-2 rounded-r-full shadow-xl z-20 flex items-center gap-2">
              <Target size={12} /> Top 5% Rank
           </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Flexi-learn",
      subtitle: "Live & Recorded",
      description: "Learn at your own pace with a blend of live interactive sessions and high-quality recorded modules available 24/7.",
      tags: ["Live Classes", "Recorded", "24/7 Access"],
      icon: Laptop,
      bgGradient: "from-[#053d41] to-[#075d63]",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center">
           <div className="relative z-10 w-64 aspect-video bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transform group-hover:scale-105 transition-all duration-500">
              <div className="flex-1 bg-slate-900 relative flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                 <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 transition-transform">
                    <PlayCircle className="text-white fill-white/20" size={24} />
                 </div>
                 <div className="absolute top-3 right-3 bg-red-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full animate-pulse">LIVE</div>
              </div>
              <div className="h-10 bg-white flex items-center px-3 justify-between">
                 <div className="flex gap-2 items-center">
                    <div className="w-6 h-1 bg-slate-200 rounded-full"></div>
                    <div className="w-12 h-1 bg-slate-200 rounded-full"></div>
                 </div>
                 <div className="flex -space-x-1">
                    <div className="w-4 h-4 rounded-full bg-slate-300 border border-white"></div>
                    <div className="w-4 h-4 rounded-full bg-slate-400 border border-white"></div>
                    <div className="w-4 h-4 rounded-full bg-slate-500 border border-white text-[6px] text-white flex items-center justify-center">+20</div>
                 </div>
              </div>
           </div>
           
           <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 z-20">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-gameTeal">
                 <CheckCircle2 size={16} />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-slate-400 uppercase">Status</span>
                 <span className="text-xs font-bold text-slate-800">Class Completed</span>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Success Support",
      subtitle: "1:1 Mentorship",
      description: "Get personal guidance, tailored study plans, and dedicated doubt resolution support throughout your journey.",
      tags: ["Mentorship", "Doubt Solving", "Guidance"],
      icon: Users,
      bgGradient: "from-[#8c6d09] to-[#b48e0b]",
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center">
           <div className="relative z-10 flex flex-col gap-3 w-full max-w-[200px]">
              {/* Chat Bubble 1 */}
              <div className="self-end bg-[#075d63] text-white p-3 rounded-2xl rounded-tr-sm text-xs shadow-lg max-w-[90%] transform group-hover:-translate-x-2 transition-transform duration-500">
                 Sir, I'm stuck in Thermodynamics. Can you help?
              </div>
              {/* Chat Bubble 2 */}
              <div className="self-start bg-white text-slate-700 p-3 rounded-2xl rounded-tl-sm text-xs shadow-lg border border-slate-100 max-w-[95%] flex gap-3 items-start transform group-hover:translate-x-2 transition-transform duration-500 delay-75">
                 <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles size={12} className="text-gameTeal" />
                 </div>
                 <div>
                    <p className="font-semibold mb-1">Don't worry!</p>
                    <p className="opacity-80">Let's schedule a 1:1 session today at 5 PM. Review these notes first.</p>
                 </div>
              </div>
              
              {/* Audio Player Bubble */}
              <div className="self-start bg-slate-50 p-2 rounded-xl border border-slate-100 w-32 flex items-center gap-2 mt-1 opacity-80">
                 <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                    <PlayCircle size={12} className="text-slate-500" />
                 </div>
                 <div className="h-1 flex-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-slate-400"></div>
                 </div>
                 <span className="text-[8px] text-slate-400">0:42</span>
              </div>
           </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#075d63]/5 border border-[#075d63]/10 text-[#075d63] text-xs font-bold uppercase tracking-widest mb-4">
                 <CheckCircle2 size={14} /> Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                 How do these courses <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#075d63] to-[#b48e0b]">help you?</span>
              </h2>
           </motion.div>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px]">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              layout
              onClick={() => setActiveId(feature.id)}
              onMouseEnter={() => setActiveId(feature.id)}
              className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group
                ${activeId === feature.id ? 'lg:flex-[3.5] h-[500px] lg:h-auto' : 'lg:flex-[0.8] h-[100px] lg:h-auto hover:lg:flex-[1]'}
              `}
            >
              {/* Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-90 transition-opacity duration-500`}></div>
              
              {/* Background Pattern/Noise */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

              {/* Content Container */}
              <div className="relative h-full w-full p-6 md:p-8 flex overflow-hidden">
                
                {/* Collapsed State Content (Vertical Text) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${activeId === feature.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                   <div className="flex flex-col items-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/10">
                         <feature.icon size={24} />
                      </div>
                      <h3 className="text-2xl font-black text-white/40 uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 whitespace-nowrap hidden lg:block">
                         {feature.title}
                      </h3>
                      {/* Mobile Only Title for Collapsed State */}
                      <h3 className="text-xl font-bold text-white lg:hidden">
                         {feature.title}
                      </h3>
                   </div>
                </div>

                {/* Expanded State Content */}
                <div className={`w-full h-full flex flex-col md:flex-row gap-8 transition-all duration-500 delay-100 ${activeId === feature.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                   
                   {/* Text Content */}
                   <div className="flex-1 flex flex-col justify-center text-white z-10 min-w-[300px]">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20 shadow-xl">
                         <feature.icon size={32} className="text-white" />
                      </div>
                      
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                         {feature.subtitle}
                      </div>
                      
                      <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                         {feature.title}
                      </h3>
                      
                      <p className="text-lg text-white/80 font-medium leading-relaxed mb-8 max-w-md">
                         {feature.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3 mb-8">
                         {feature.tags.map((tag, i) => (
                            <span key={i} className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm font-semibold backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
                               # {tag}
                            </span>
                         ))}
                      </div>

                      <button className="flex items-center gap-2 text-white font-bold group/btn w-fit">
                         <span className="border-b-2 border-white/30 pb-0.5 group-hover/btn:border-white transition-colors">Explore Feature</span>
                         <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                   </div>

                   {/* Graphic Content (The "Screenshot") */}
                   <div className="flex-1 relative hidden md:flex items-center justify-center">
                      <div className="relative w-full max-w-[400px] aspect-[4/5] perspective-1000">
                         <motion.div 
                           initial={{ rotateY: 10, scale: 0.9 }}
                           animate={activeId === feature.id ? { rotateY: 0, scale: 1 } : { rotateY: 10, scale: 0.9 }}
                           transition={{ duration: 0.8, type: "spring" }}
                           className="w-full h-full"
                         >
                            {feature.graphic}
                         </motion.div>
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

export default CourseHelpSection;
