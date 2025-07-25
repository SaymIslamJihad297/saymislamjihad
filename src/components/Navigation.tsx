import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const Navigation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Determine active section
      const sections = ['hero', 'about', 'projects', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Enhanced Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-black/20">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 relative overflow-hidden"
          style={{ width: `${scrollProgress}%` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
        >
          {/* Animated glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-400 opacity-60"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 bg-white/30"
            animate={{
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-6 right-6 z-40"
        initial={{ opacity: 0, x: 100, rotateY: -90 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ 
          delay: 0.5, 
          duration: 0.8,
          type: "spring",
          stiffness: 100 
        }}
      >
        <motion.div
          className="relative bg-black/40 backdrop-blur-xl rounded-2xl px-6 py-4 border border-cyan-400/30 shadow-2xl"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)"
          }}
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(15,23,42,0.8) 50%, rgba(30,41,59,0.7) 100%)"
          }}
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20"
            animate={{
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative group px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl"
                      layoutId="activeTab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    animate={isActive ? {
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    } : {}}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon 
                      size={16} 
                      className={`transition-colors duration-300 ${
                        isActive 
                          ? 'text-cyan-400' 
                          : 'text-gray-400 group-hover:text-cyan-300'
                      }`}
                    />
                  </motion.div>
                  
                  {/* Label */}
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-400 group-hover:text-white'
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: [0, 1.2, 1],
                        opacity: [0, 1, 0.8]
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Tech corner indicators */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-cyan-400/60 rounded-tl-lg" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-cyan-400/60 rounded-br-lg" />
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navigation;