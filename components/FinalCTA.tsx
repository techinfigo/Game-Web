import React from 'react';
import { Smartphone } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gameTeal text-white relative overflow-hidden">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
       <div className="max-w-[1080px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-extrabold mb-6">Start Your Journey Today</h2>
          <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
             Choose the course best suited to your timeline and goals, and let GAME be your partner in achieving a top GATE score.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="bg-white text-gameTeal px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-xl">
                Meet Our Faculty
             </button>
             <button className="bg-gameBlack text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-900 transition-all shadow-xl flex items-center justify-center gap-2">
                <Smartphone size={20} /> Download GAME Live App
             </button>
          </div>
       </div>
    </section>
  );
};

export default FinalCTA;