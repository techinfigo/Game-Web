import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedExams from './components/FeaturedExams';
import ReasonsSection from './components/ReasonsSection';
import EnrollmentOptions from './components/EnrollmentOptions';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import CoursesPage from './components/CoursesPage';
import AboutPage from './components/AboutPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import TermsOfUse from './components/TermsOfUse';
import TakeDownPolicy from './components/TakeDownPolicy';
import ContactPage from './components/ContactPage';
import HacksAndStrategiesPage from './components/HacksAndStrategiesPage';
import KnowledgePitaraPage from './components/KnowledgePitaraPage';
import AchieversPage from './components/AchieversPage';
import WinnerChoiceSection from './components/WinnerChoiceSection';
import SpecialOffer from './components/SpecialOffer';
import FreeStudyMaterial from './components/FreeStudyMaterial';
import AchieversSection from './components/AchieversSection';
import YouMustRead from './components/YouMustRead';
import GateExamPage from './components/GateExamPage';
import EseExamPage from './components/EseExamPage';
import SscJeExamPage from './components/SscJeExamPage';
import RrbJeExamPage from './components/RrbJeExamPage';
import JobNotificationsPage from './components/JobNotificationsPage';
import BlogPage from './components/BlogPage';
import CourseHero from './components/CourseHero';
import PsuExamPage from './components/PsuExamPage';
import RankersPage from './components/RankersPage';
import JobUpdatesSection from './components/JobUpdatesSection';
import { StateAeJeExamPage, IitNeetExamPage, NonTechExamPage, SchoolExamPage } from './components/OtherExamPages';

const App: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  // Simple mock login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
     window.scrollTo(0, 0);
  }, [currentPage]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-gameTeal selection:text-white relative font-sans transition-colors duration-300">
      
      {/* Content */}
      <div className="relative z-10 flex flex-col w-full">
        <Navbar 
          openLogin={() => setIsLoginOpen(true)}
          onNavigate={(page) => setCurrentPage(page)}
          currentPage={currentPage}
          isLoggedIn={isLoggedIn}
          onLogout={() => setIsLoggedIn(false)}
        />
        
        <main className="flex flex-col min-h-screen pt-20">
          {currentPage === 'home' ? (
            <div className="flex flex-col">
              <Hero onNavigate={(page) => setCurrentPage(page)} />
              <WinnerChoiceSection onNavigate={(page) => setCurrentPage(page)} />
              <SpecialOffer />
              <FeaturedExams onNavigate={(page) => setCurrentPage(page)} />
              <CourseHero isSection={true} />
              <ReasonsSection />
              <FreeStudyMaterial />
              <AchieversSection onNavigate={(page) => setCurrentPage(page)} />
              <EnrollmentOptions />
              <YouMustRead />
              <JobUpdatesSection onNavigate={(page) => setCurrentPage(page)} />
              <FAQSection />
            </div>
          ) : currentPage === 'courses' ? (
             <CoursesPage />
          ) : currentPage === 'gate' ? (
             <GateExamPage />
          ) : currentPage === 'ese' ? (
             <EseExamPage />
          ) : currentPage === 'ssc' ? (
             <SscJeExamPage />
          ) : currentPage === 'psu' ? (
             <PsuExamPage />
          ) : currentPage === 'rrb' ? (
             <RrbJeExamPage />
          ) : currentPage === 'state' ? (
             <StateAeJeExamPage />
          ) : currentPage === 'iit' ? (
             <IitNeetExamPage />
          ) : currentPage === 'nontech' ? (
             <NonTechExamPage />
          ) : currentPage === 'school' ? (
             <SchoolExamPage />
          ) : currentPage === 'about' ? (
             <AboutPage />
          ) : currentPage === 'contact' ? (
             <ContactPage />
          ) : currentPage === 'hacks' ? (
             <HacksAndStrategiesPage />
          ) : currentPage === 'resources' ? (
             <KnowledgePitaraPage />
          ) : currentPage === 'achievers' ? (
             <AchieversPage initialFilter="all" />
          ) : currentPage === 'rankers' ? (
             <RankersPage />
          ) : currentPage === 'reviews' ? (
             <AchieversPage initialFilter="story" />
          ) : currentPage === 'jobs' ? (
             <JobNotificationsPage isLoggedIn={isLoggedIn} openLogin={() => setIsLoginOpen(true)} />
          ) : currentPage === 'blog' ? (
             <BlogPage />
          ) : currentPage === 'privacy' ? (
             <PrivacyPolicy />
          ) : currentPage === 'refund' ? (
             <RefundPolicy />
          ) : currentPage === 'terms' ? (
             <TermsOfUse />
          ) : currentPage === 'takedown' ? (
             <TakeDownPolicy />
          ) : null}
        </main>
        
        <Footer onNavigate={(page) => setCurrentPage(page)} />
      </div>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onSuccess={handleLoginSuccess}
      />
    
    </div>
  );
};

export default App;