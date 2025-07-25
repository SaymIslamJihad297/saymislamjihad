import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import BackgroundElements from './components/BackgroundElements';
import Navigation from './components/Navigation';
import SocialSidebar from './components/SocialSidebar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <BackgroundElements />
      <Navigation />
      <SocialSidebar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Saym Islam Jihad. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <span>Built with</span>
              <span className="text-red-500">♥</span>
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;