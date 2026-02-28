
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, Sparkles, GraduationCap, Trophy, Microscope, 
  Building2, Train, MapPin, Atom, BookOpen, Backpack, Video, 
  MessageSquare, Lightbulb, FileText, Info, Phone, MonitorPlay, Rss
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Added isLoggedIn and onLogout to the NavbarProps interface
interface NavbarProps {
  openLogin: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ openLogin, onNavigate, currentPage, isLoggedIn, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (page) {
        onNavigate(page);
    }
    setIsOpen(false);
    setMobileExpanded(null);
  };

  const navItems = [
    {
      name: 'Examination',
      id: 'examination',
      highlight: true,
      layout: 'grid',
      width: 'w-[520px]',
      dropdown: [
        { name: 'GATE', id: 'gate', icon: GraduationCap, desc: 'Graduate Aptitude Test' },
        { name: 'ESE', id: 'ese', icon: Trophy, desc: 'Engineering Services' },
        { name: 'PSUs / R&D', id: 'psu', icon: Microscope, desc: 'Public Sector Jobs' },
        { name: 'SSC JE', id: 'ssc', icon: Building2, desc: 'Junior Engineer' },
        { name: 'RRB JE', id: 'rrb', icon: Train, desc: 'Railway Recruitment' },
        { name: 'State AE/JE', id: 'state', icon: MapPin, desc: 'State Services' },
        { name: 'IIT-JEE / NEET', id: 'iit', icon: Atom, desc: 'Entrance Exams' },
        { name: 'Non Tech', id: 'nontech', icon: BookOpen, desc: 'General Studies' },
        { name: '9th - 12th', id: 'school', icon: Backpack, desc: 'School Foundation' }
      ]
    },
    { name: 'Home', id: 'home' },
    { name: 'Courses', id: 'courses' },
    {
      name: 'Results',
      id: 'achievers',
      layout: 'list',
      width: 'w-64',
      dropdown: [
        { name: 'Rankers', id: 'rankers', icon: Trophy, desc: 'Hall of Fame' },
        { name: 'Reviews', id: 'reviews', icon: MessageSquare, desc: 'Student Voices' },
        { name: 'Success Stories', id: 'achievers', icon: Video, desc: 'Video Testimonials' }
      ]
    },
    { name: 'Job Updates', id: 'jobs' },
    {
      name: 'More',
      id: 'more',
      layout: 'list',
      width: 'w-64',
      dropdown: [
        { name: 'Blogs', id: 'blog', icon: Rss, desc: 'Latest Articles' },
        { name: 'Strategy', id: 'hacks', icon: Lightbulb, desc: 'Tips & Tricks' },
        { name: 'Resources', id: 'resources', icon: FileText, desc: 'Downloads & Notes' },
        { name: 'About Us', id: 'about', icon: Info, desc: 'Our Story' },
        { name: 'Contact', id: 'contact', icon: Phone, desc: 'Get in Touch' }
      ]
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white/95 backdrop-blur-md ${
        scrolled ? 'shadow-xl py-3 border-b border-slate-100' : 'py-5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gameTeal to-teal-700 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg group-hover:scale-105 transition-transform">
                G
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-extrabold leading-none tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-800'}`}>GAME</span>
              <span className="text-[10px] text-gameGoldDark font-bold uppercase tracking-widest">Academy</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isHighlight = (item as any).highlight;
              return (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  <a 
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        if(!item.dropdown) handleLinkClick(e, item.id);
                    }}
                    className={`
                      text-sm font-bold transition-all relative flex items-center gap-1.5 py-2
                      ${isHighlight 
                        ? 'px-5 rounded-full border-2 border-[#f2c537] bg-transparent text-slate-900 hover:bg-[#f2c537] hover:text-black hover:-translate-y-0.5' 
                        : `${scrolled ? 'text-slate-600 hover:text-gameTeal' : 'text-slate-700 hover:text-gameTeal'} ${currentPage === item.id ? 'text-gameTeal' : ''}`
                      }
                    `}
                  >
                    {isHighlight && <Sparkles size={16} className="text-[#d8b32f] group-hover:text-black transition-colors" />}
                    {item.name}
                    {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                    
                    {!isHighlight && !item.dropdown && (
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-gameTeal transition-all ${currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    )}
                  </a>

                  {/* Desktop Dropdown */}
                  {item.dropdown && (
                      <AnimatePresence>
                          {activeDropdown === item.name && (
                              <motion.div
                                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                  transition={{ duration: 0.2, ease: "easeOut" }}
                                  className={`absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-2 overflow-hidden ${item.width || 'w-64'} z-50`}
                              >
                                  {/* Hover Bridge */}
                                  <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>

                                  <div className={`grid ${item.layout === 'grid' ? 'grid-cols-2 gap-2' : 'grid-cols-1 gap-1'}`}>
                                      {item.dropdown.map((subItem) => (
                                          <a
                                              key={subItem.name}
                                              href="#"
                                              onClick={(e) => {
                                                  e.preventDefault();
                                                  handleLinkClick(e, subItem.id);
                                                  setActiveDropdown(null);
                                              }}
                                              className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group/item hover:bg-slate-50 border border-transparent hover:border-slate-100"
                                          >
                                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                                                  item.highlight && subItem.id === 'gate' 
                                                  ? 'bg-gameTeal text-white shadow-lg shadow-gameTeal/30' 
                                                  : 'bg-slate-100 text-slate-500 group-hover/item:bg-gameTeal group-hover/item:text-white'
                                              }`}>
                                                  {subItem.icon && <subItem.icon size={20} strokeWidth={1.5} />}
                                              </div>
                                              <div>
                                                  <div className="text-sm font-bold text-slate-700 group-hover/item:text-gameTeal transition-colors leading-tight">
                                                      {subItem.name}
                                                  </div>
                                                  {subItem.desc && (
                                                      <div className="text-[10px] font-medium text-slate-400 group-hover/item:text-slate-500 mt-0.5">
                                                          {subItem.desc}
                                                      </div>
                                                  )}
                                              </div>
                                          </a>
                                      ))}
                                  </div>
                              </motion.div>
                          )}
                      </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Added conditional rendering for Logout/Login button */}
            {isLoggedIn ? (
              <button 
                onClick={onLogout}
                className="bg-slate-100 text-slate-700 px-6 py-2.5 rounded-full font-bold text-sm shadow-sm transition-all hover:bg-slate-200"
              >
                Logout
              </button>
            ) : (
              <button 
                onClick={openLogin}
                className="bg-gameTeal hover:bg-gameTealDark text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-gameTeal/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Student Login
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-slate-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl max-h-[85vh] overflow-y-auto"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col p-6 space-y-2">
              {navItems.map((item) => {
                const isHighlight = (item as any).highlight;
                return (
                  <div key={item.name}>
                      {item.dropdown ? (
                          <div className="border-b border-slate-50 pb-2">
                              <button 
                                  onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                                  className={`w-full flex items-center justify-between text-lg font-bold py-3 ${isHighlight ? 'text-[#d8b32f]' : 'text-slate-700'}`}
                              >
                                  <span className="flex items-center gap-2">
                                    {isHighlight && <Sparkles size={18} />}
                                    {item.name}
                                  </span>
                                  <ChevronDown size={20} className={`transition-transform ${mobileExpanded === item.name ? 'rotate-180' : ''}`} />
                              </button>
                              <AnimatePresence>
                                  {mobileExpanded === item.name && (
                                      <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="pl-2 pr-2 pb-2 grid grid-cols-1 gap-2"
                                      >
                                          {item.dropdown.map((subItem) => (
                                              <a
                                                  key={subItem.name}
                                                  href="#"
                                                  onClick={(e) => handleLinkClick(e, subItem.id)}
                                                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 active:bg-slate-100 transition-colors"
                                              >
                                                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gameTeal shadow-sm shrink-0">
                                                      {subItem.icon && <subItem.icon size={16} />}
                                                  </div>
                                                  <div>
                                                      <div className="text-sm font-bold text-slate-700">{subItem.name}</div>
                                                      <div className="text-[10px] text-slate-400 font-medium">{subItem.desc}</div>
                                                  </div>
                                              </a>
                                          ))}
                                      </motion.div>
                                  )}
                              </AnimatePresence>
                          </div>
                      ) : (
                          <a 
                              href="#" 
                              className={`block text-lg font-bold py-3 border-b border-slate-50 ${currentPage === item.id ? 'text-gameTeal' : 'text-slate-700 hover:text-gameTeal'}`}
                              onClick={(e) => handleLinkClick(e, item.id)}
                          >
                              {item.name}
                          </a>
                      )}
                  </div>
                );
              })}
              <div className="pt-4">
                {/* Added conditional rendering for Mobile Logout/Login button */}
                {isLoggedIn ? (
                  <button 
                      onClick={() => {
                      onLogout();
                      setIsOpen(false);
                      }}
                      className="w-full bg-slate-100 text-slate-700 py-3.5 rounded-xl font-bold mt-2 shadow-sm flex items-center justify-center gap-2"
                  >
                      Logout
                  </button>
                ) : (
                  <button 
                      onClick={() => {
                      openLogin();
                      setIsOpen(false);
                      }}
                      className="w-full bg-gameTeal text-white py-3.5 rounded-xl font-bold mt-2 shadow-lg flex items-center justify-center gap-2"
                  >
                      Student Login
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
