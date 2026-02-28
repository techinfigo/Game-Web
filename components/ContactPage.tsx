
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Smartphone, HelpCircle, CheckCircle2 } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans -mt-20">
      
      {/* 1. New Hero Banner */}
      <section className="relative pt-32 pb-28 overflow-hidden bg-gradient-to-br from-[#075d63] to-[#043f42] text-white">
         {/* Decorative Spheres */}
         <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-[40px]"></div>
         <div className="absolute bottom-10 right-10 w-48 h-48 bg-gameGold/20 rounded-full blur-[60px]"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

         <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.div {...fadeInUp}>
               <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gameGold font-bold text-xs uppercase tracking-widest mb-6">
                  Support Center
               </span>
               <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                  We're Here to <span className="text-gameGold">Help</span>
               </h1>
               <p className="text-teal-100 text-lg max-w-2xl mx-auto leading-relaxed">
                  Have questions about our courses, fees, or admissions? Our team of academic counselors is ready to guide you on your journey to success.
               </p>
            </motion.div>
         </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 pb-24 relative z-10 mt-8">
         <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
               
               {/* Phone Card */}
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-start gap-5 hover:border-gameTeal/30 transition-colors group"
               >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                     <Phone size={24} />
                  </div>
                  <div>
                     <h3 className="font-bold text-slate-900 text-lg mb-1">Call Us</h3>
                     <p className="text-slate-500 text-sm mb-3">Mon-Sat from 10am to 7pm</p>
                     <a href="tel:+919998887777" className="text-lg font-bold text-gameTeal hover:underline block">
                        +91 999-888-7777
                     </a>
                  </div>
               </motion.div>

               {/* Email Card */}
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-start gap-5 hover:border-gameTeal/30 transition-colors group"
               >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                     <Mail size={24} />
                  </div>
                  <div>
                     <h3 className="font-bold text-slate-900 text-lg mb-1">Email Us</h3>
                     <p className="text-slate-500 text-sm mb-3">We usually reply within 24hrs</p>
                     <a href="mailto:info@gameacademy.in" className="text-base font-bold text-slate-700 hover:text-gameTeal transition-colors block">
                        info@gameacademy.in
                     </a>
                  </div>
               </motion.div>

               {/* Address Card */}
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-start gap-5 hover:border-gameTeal/30 transition-colors group"
               >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                     <MapPin size={24} />
                  </div>
                  <div>
                     <h3 className="font-bold text-slate-900 text-lg mb-1">Visit Offline Center</h3>
                     <p className="text-slate-500 text-sm mb-3">Come say hello at our office HQ.</p>
                     <p className="text-slate-700 font-medium leading-relaxed">
                        2nd Floor, Landmark Tower, <br/>
                        Near Metro Station, Sector 62, <br/>
                        Noida, Uttar Pradesh - 201301
                     </p>
                  </div>
               </motion.div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative"
               >
                  <div className="bg-slate-900 p-8 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-gameTeal/20 rounded-full blur-3xl"></div>
                     <h3 className="text-2xl font-bold text-white relative z-10">Send us a Message</h3>
                     <p className="text-slate-400 text-sm mt-2 relative z-10">Fill out the form below and we'll get back to you shortly.</p>
                  </div>

                  {formStatus === 'success' ? (
                     <div className="p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                           <CheckCircle2 size={40} />
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                        <p className="text-slate-600 mb-8 max-w-xs mx-auto">
                           Thank you for contacting us. Our team will review your message and reach out to you within 24 hours.
                        </p>
                        <button 
                           onClick={() => setFormStatus('idle')}
                           className="bg-slate-100 text-slate-700 px-6 py-2 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                        >
                           Send Another Message
                        </button>
                     </div>
                  ) : (
                     <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
                        
                        <div className="grid md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                              <div className="relative group">
                                 <input type="text" required placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pl-11 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-gameTeal focus:ring-1 focus:ring-gameTeal transition-all" />
                                 <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-gameTeal transition-colors" size={18} />
                              </div>
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                              <div className="relative group">
                                 <input type="tel" required placeholder="+91 98765 43210" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pl-11 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-gameTeal focus:ring-1 focus:ring-gameTeal transition-all" />
                                 <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-gameTeal transition-colors" size={18} />
                              </div>
                           </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                              <div className="relative group">
                                 <input type="email" required placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pl-11 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-gameTeal focus:ring-1 focus:ring-gameTeal transition-all" />
                                 <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-gameTeal transition-colors" size={18} />
                              </div>
                           </div>
                           <div className="space-y-2">
                              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Inquiry Type</label>
                              <div className="relative group">
                                 <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pl-11 text-slate-900 focus:outline-none focus:border-gameTeal focus:ring-1 focus:ring-gameTeal transition-all appearance-none cursor-pointer">
                                    <option>New Admission</option>
                                    <option>Course Details</option>
                                    <option>Technical Support</option>
                                    <option>Franchise / Partnership</option>
                                    <option>Other</option>
                                 </select>
                                 <HelpCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-gameTeal transition-colors" size={18} />
                                 <div className="absolute right-4 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-slate-400 pointer-events-none"></div>
                              </div>
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
                           <div className="relative group">
                              <textarea required rows={4} placeholder="How can we help you today?" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pl-11 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-gameTeal focus:ring-1 focus:ring-gameTeal transition-all resize-none"></textarea>
                              <MessageSquare className="absolute left-3.5 top-5 text-slate-400 group-focus-within:text-gameTeal transition-colors" size={18} />
                           </div>
                        </div>

                        <button 
                           type="submit" 
                           disabled={formStatus === 'submitting'}
                           className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all flex items-center justify-center gap-2 ${formStatus === 'submitting' ? 'bg-slate-400 cursor-not-allowed' : 'bg-gameTeal hover:bg-gameTealDark hover:shadow-gameTeal/30'}`}
                        >
                           {formStatus === 'submitting' ? 'Sending...' : (
                              <>Send Message <Send size={18} /></>
                           )}
                        </button>

                     </form>
                  )}
               </motion.div>
            </div>
         </div>
      </div>

      {/* Map Section */}
      <section className="h-[400px] w-full relative bg-slate-200">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1328905389!2d77.373!3d28.627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5545e8e977f%3A0x6d859e984534891b!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714828192345!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%)' }} 
            allowFullScreen={true} 
            loading="lazy"
            className="opacity-80 hover:opacity-100 transition-opacity duration-500"
         ></iframe>
         
         <div className="absolute top-6 left-6 md:left-20 bg-white p-4 rounded-xl shadow-2xl border border-slate-200 max-w-xs pointer-events-none">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
               <MapPin size={16} className="text-gameTeal" /> HQ Location
            </h4>
            <p className="text-xs text-slate-500 mt-1">
               Sector 62, Noida, UP. <br/> Come visit us for a free counseling session.
            </p>
         </div>
      </section>

    </div>
  );
};

export default ContactPage;
