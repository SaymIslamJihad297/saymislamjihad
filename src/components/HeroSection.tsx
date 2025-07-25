import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Globe, Shield, Layers, Cpu, Database, Code2, GitBranch, Smartphone, Monitor, Server } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Futuristic Holographic Interface
  const HolographicInterface = () => {
    return (
      <div className="relative w-96 h-96">
        {/* Main Holographic Container */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-3xl border-2 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotateY: 0,
            borderColor: ["#00d9ff", "#10b981", "#8b5cf6", "#00d9ff"]
          }}
          transition={{ 
            opacity: { duration: 1 },
            scale: { duration: 1 },
            rotateY: { duration: 1 },
            borderColor: { duration: 4, repeat: Infinity }
          }}
          style={{
            boxShadow: "0 0 50px rgba(0, 217, 255, 0.3), inset 0 0 50px rgba(0, 217, 255, 0.1)"
          }}
        >
          {/* Holographic Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00d9ff" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Central Hexagon Hub */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="w-20 h-20 border-2 border-cyan-400 relative"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                background: "linear-gradient(45deg, rgba(6, 182, 212, 0.2), rgba(16, 185, 129, 0.2))"
              }}
              animate={{
                rotate: [0, 360],
                borderColor: ["#06b6d4", "#10b981", "#8b5cf6", "#06b6d4"]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                borderColor: { duration: 3, repeat: Infinity }
              }}
            >
              <motion.div
                className="absolute inset-2 border border-emerald-400"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: "radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent)"
                }}
                animate={{
                  rotate: [0, -360]
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                }}
              />
              <Cpu className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-cyan-400" />
            </motion.div>
          </motion.div>

          {/* Floating Tech Panels */}
          {/* Frontend Panel */}
          <motion.div
            className="absolute top-8 left-8 w-24 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/30 border border-cyan-400/50 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0, x: -50, y: -50 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: [0, -5, 0]
            }}
            transition={{ 
              opacity: { delay: 1 },
              x: { delay: 1 },
              y: { delay: 1, y: { duration: 3, repeat: Infinity } }
            }}
          >
            <div className="p-2 h-full flex flex-col items-center justify-center">
              <Monitor className="w-5 h-5 text-cyan-400 mb-1" />
              <span className="text-xs text-cyan-300 font-mono">Frontend</span>
            </div>
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-lg opacity-20"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Backend Panel */}
          <motion.div
            className="absolute top-8 right-8 w-24 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 border border-emerald-400/50 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0, x: 50, y: -50 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: [0, -8, 0]
            }}
            transition={{ 
              opacity: { delay: 1.2 },
              x: { delay: 1.2 },
              y: { delay: 1.2, y: { duration: 3.5, repeat: Infinity } }
            }}
          >
            <div className="p-2 h-full flex flex-col items-center justify-center">
              <Server className="w-5 h-5 text-emerald-400 mb-1" />
              <span className="text-xs text-emerald-300 font-mono">Backend</span>
            </div>
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-lg opacity-20"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Database Panel */}
          <motion.div
            className="absolute bottom-8 left-8 w-24 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/30 border border-purple-400/50 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: [0, -6, 0]
            }}
            transition={{ 
              opacity: { delay: 1.4 },
              x: { delay: 1.4 },
              y: { delay: 1.4, y: { duration: 2.8, repeat: Infinity } }
            }}
          >
            <div className="p-2 h-full flex flex-col items-center justify-center">
              <Database className="w-5 h-5 text-purple-400 mb-1" />
              <span className="text-xs text-purple-300 font-mono">Database</span>
            </div>
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg opacity-20"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
          </motion.div>

          {/* Mobile Panel */}
          <motion.div
            className="absolute bottom-8 right-8 w-24 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/30 border border-orange-400/50 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: [0, -7, 0]
            }}
            transition={{ 
              opacity: { delay: 1.6 },
              x: { delay: 1.6 },
              y: { delay: 1.6, y: { duration: 3.2, repeat: Infinity } }
            }}
          >
            <div className="p-2 h-full flex flex-col items-center justify-center">
              <Smartphone className="w-5 h-5 text-orange-400 mb-1" />
              <span className="text-xs text-orange-300 font-mono">Mobile</span>
            </div>
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-lg opacity-20"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </motion.div>

          {/* Holographic Connection Lines */}
          <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
            <defs>
              <linearGradient id="connectionGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Animated connection lines */}
            <motion.line
              x1="96" y1="80" x2="192" y2="192"
              stroke="url(#connectionGlow)"
              strokeWidth="2"
              filter="url(#glow)"
              strokeDasharray="4,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 1, 0],
                strokeDashoffset: [0, -8]
              }}
              transition={{ 
                pathLength: { duration: 2, delay: 2 },
                opacity: { duration: 3, repeat: Infinity, delay: 2 },
                strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear", delay: 2 }
              }}
            />
            
            <motion.line
              x1="300" y1="80" x2="192" y2="192"
              stroke="url(#connectionGlow)"
              strokeWidth="2"
              filter="url(#glow)"
              strokeDasharray="4,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 1, 0],
                strokeDashoffset: [0, -8]
              }}
              transition={{ 
                pathLength: { duration: 2, delay: 2.3 },
                opacity: { duration: 3, repeat: Infinity, delay: 2.3 },
                strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear", delay: 2.3 }
              }}
            />
            
            <motion.line
              x1="96" y1="312" x2="192" y2="192"
              stroke="url(#connectionGlow)"
              strokeWidth="2"
              filter="url(#glow)"
              strokeDasharray="4,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 1, 0],
                strokeDashoffset: [0, -8]
              }}
              transition={{ 
                pathLength: { duration: 2, delay: 2.6 },
                opacity: { duration: 3, repeat: Infinity, delay: 2.6 },
                strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear", delay: 2.6 }
              }}
            />
            
            <motion.line
              x1="300" y1="312" x2="192" y2="192"
              stroke="url(#connectionGlow)"
              strokeWidth="2"
              filter="url(#glow)"
              strokeDasharray="4,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 1, 0],
                strokeDashoffset: [0, -8]
              }}
              transition={{ 
                pathLength: { duration: 2, delay: 2.9 },
                opacity: { duration: 3, repeat: Infinity, delay: 2.9 },
                strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear", delay: 2.9 }
              }}
            />
          </svg>

          {/* Floating Code Symbols */}
          <motion.div
            className="absolute top-20 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity },
              rotate: { duration: 6, repeat: Infinity }
            }}
          >
            <span className="text-2xl font-mono text-cyan-400 opacity-80">&lt;/&gt;</span>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, 8, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              y: { duration: 3.5, repeat: Infinity },
              rotate: { duration: 5, repeat: Infinity }
            }}
          >
            <span className="text-xl font-mono text-emerald-400 opacity-80">{'{}'}</span>
          </motion.div>

          {/* Holographic Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${20 + (i * 45)}%`,
                top: `${30 + (i * 20) % 40}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Outer Glow Effect */}
          <motion.div
            className="absolute -inset-4 rounded-3xl opacity-30"
            style={{
              background: "linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.3), transparent, rgba(16, 185, 129, 0.3), transparent, rgba(139, 92, 246, 0.3), transparent)",
              backgroundSize: "400% 400%",
              filter: "blur(20px)"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    );
  };

  // Ultra Futuristic Scroll Portal
  const QuantumScrollPortal = () => {
    const handleScrollClick = () => {
      setIsScrolling(true);
      document.getElementById('about')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setTimeout(() => setIsScrolling(false), 1500);
    };

    return (
      <motion.div
        className="relative flex flex-col items-center cursor-pointer group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        onClick={handleScrollClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Main Portal Container */}
        <div className="relative w-20 h-20">
          {/* Outer Energy Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
            animate={{
              rotate: [0, 360],
              scale: isScrolling ? [1, 1.5, 1] : [1, 1.1, 1],
              borderColor: isScrolling 
                ? ["#06b6d4", "#10b981", "#8b5cf6", "#f59e0b", "#06b6d4"]
                : ["#06b6d4", "#10b981", "#06b6d4"]
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: isScrolling ? 0.8 : 2, repeat: Infinity },
              borderColor: { duration: isScrolling ? 1.5 : 3, times: isScrolling ? [0, 0.25, 0.5, 0.75, 1] : [0, 0.5, 1], repeat: Infinity }
            }}
            style={{
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.4), inset 0 0 30px rgba(6, 182, 212, 0.1)"
            }}
          />

          {/* Middle Energy Ring */}
          <motion.div
            className="absolute inset-2 rounded-full border border-emerald-400/50"
            animate={{
              rotate: [360, 0],
              scale: isScrolling ? [1, 1.3, 1] : [1, 1.05, 1],
              borderColor: isScrolling 
                ? ["#10b981", "#8b5cf6", "#06b6d4", "#f59e0b", "#10b981"]
                : ["#10b981", "#8b5cf6", "#10b981"]
            }}
            transition={{
              rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              scale: { duration: isScrolling ? 0.6 : 2.5, repeat: Infinity },
              borderColor: { duration: isScrolling ? 1.2 : 4, repeat: Infinity }
            }}
            style={{
              boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)"
            }}
          />

          {/* Inner Core */}
          <motion.div
            className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-400/20 via-emerald-400/30 to-purple-400/20 backdrop-blur-sm border border-white/20"
            animate={{
              scale: isScrolling ? [1, 1.4, 0.8, 1.2, 1] : [1, 1.1, 1],
              background: isScrolling 
                ? [
                    "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(16, 185, 129, 0.3) 50%, rgba(139, 92, 246, 0.2) 100%)",
                    "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(139, 92, 246, 0.3) 50%, rgba(245, 158, 11, 0.2) 100%)",
                    "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(245, 158, 11, 0.3) 50%, rgba(6, 182, 212, 0.2) 100%)"
                  ]
                : [
                    "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(16, 185, 129, 0.3) 50%, rgba(139, 92, 246, 0.2) 100%)"
                  ]
            }}
            transition={{
              scale: { duration: isScrolling ? 1.5 : 3, repeat: Infinity, times: isScrolling ? [0, 0.3, 0.6, 0.8, 1] : [0, 0.5, 1] },
              background: { duration: isScrolling ? 2 : 4, repeat: Infinity }
            }}
            style={{
              boxShadow: "0 0 40px rgba(6, 182, 212, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)"
            }}
          >
            {/* Central Icon */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: isScrolling ? [0, 180, 360] : [0, 15, -15, 0],
                scale: isScrolling ? [1, 0.5, 1.3, 1] : [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: isScrolling ? 1.5 : 4, repeat: Infinity, times: isScrolling ? [0, 0.5, 1] : [0, 0.33, 0.66, 1] },
                scale: { duration: isScrolling ? 1.5 : 2, repeat: Infinity, times: isScrolling ? [0, 0.3, 0.7, 1] : [0, 0.5, 1] }
              }}
            >
              <ChevronDown 
                className={`w-6 h-6 transition-colors duration-300 ${
                  isScrolling ? 'text-yellow-400' : 'text-white group-hover:text-cyan-400'
                }`} 
              />
            </motion.div>
          </motion.div>

          {/* Quantum Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: `linear-gradient(45deg, ${
                  i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#10b981' : '#8b5cf6'
                })`,
                left: '50%',
                top: '50%',
                transformOrigin: '0 0'
              }}
              animate={{
                rotate: [0, 360],
                x: isScrolling ? [0, Math.cos(i * 30 * Math.PI / 180) * 60] : [0, Math.cos(i * 30 * Math.PI / 180) * 35],
                y: isScrolling ? [0, Math.sin(i * 30 * Math.PI / 180) * 60] : [0, Math.sin(i * 30 * Math.PI / 180) * 35],
                opacity: isScrolling ? [1, 0.3, 1, 0] : [0, 1, 0],
                scale: isScrolling ? [0, 1.5, 0] : [0, 1, 0]
              }}
              transition={{
                rotate: { duration: 3 + i * 0.2, repeat: Infinity, ease: "linear" },
                x: { duration: isScrolling ? 1.5 : 4, repeat: Infinity },
                y: { duration: isScrolling ? 1.5 : 4, repeat: Infinity },
                opacity: { duration: isScrolling ? 1.5 : 3, repeat: Infinity, delay: i * 0.1 },
                scale: { duration: isScrolling ? 1.5 : 3, repeat: Infinity, delay: i * 0.1 }
              }}
            />
          ))}

          {/* Energy Waves */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute inset-0 rounded-full border border-cyan-400/20"
              animate={{
                scale: isScrolling ? [1, 2.5 + i * 0.5, 3 + i * 0.5] : [1, 1.5 + i * 0.3, 2 + i * 0.3],
                opacity: isScrolling ? [0.8, 0.3, 0] : [0.5, 0.2, 0],
                borderColor: isScrolling 
                  ? [`hsl(${180 + i * 60}, 70%, 60%)`, `hsl(${240 + i * 60}, 70%, 60%)`, `hsl(${300 + i * 60}, 70%, 60%)`]
                  : [`hsl(${180 + i * 30}, 50%, 50%)`, `hsl(${210 + i * 30}, 50%, 50%)`]
              }}
              transition={{
                scale: { duration: isScrolling ? 1.5 : 3, repeat: Infinity, delay: i * 0.2 },
                opacity: { duration: isScrolling ? 1.5 : 3, repeat: Infinity, delay: i * 0.2 },
                borderColor: { duration: isScrolling ? 1.5 : 2, repeat: Infinity }
              }}
            />
          ))}

          {/* Lightning Bolts */}
          {isScrolling && [...Array(6)].map((_, i) => (
            <motion.div
              key={`lightning-${i}`}
              className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-gradient-to-b from-yellow-400 via-cyan-400 to-transparent origin-top"
              style={{
                transform: `rotate(${i * 60}deg) translateY(-40px)`
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: [0, 1, 0],
                opacity: [0, 1, 0],
                background: [
                  "linear-gradient(to bottom, #facc15, #06b6d4, transparent)",
                  "linear-gradient(to bottom, #06b6d4, #10b981, transparent)",
                  "linear-gradient(to bottom, #10b981, #8b5cf6, transparent)"
                ]
              }}
              transition={{
                scaleY: { duration: 0.3, repeat: 5, delay: i * 0.1 },
                opacity: { duration: 0.3, repeat: 5, delay: i * 0.1 },
                background: { duration: 0.3, repeat: 5, delay: i * 0.1 }
              }}
            />
          ))}
        </div>

        {/* Flowing Data Stream */}
        <motion.div
          className="mt-4 flex flex-col items-center"
          animate={{
            opacity: isScrolling ? [1, 0.3, 1] : [0.7, 1, 0.7]
          }}
          transition={{
            opacity: { duration: isScrolling ? 0.5 : 2, repeat: Infinity }
          }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="w-0.5 h-1 mb-1 rounded-full"
              style={{
                background: `linear-gradient(to bottom, ${
                  ['#06b6d4', '#10b981', '#8b5cf6', '#f59e0b'][i % 4]
                }, transparent)`
              }}
              animate={{
                opacity: isScrolling ? [0, 1, 0] : [0, 0.8, 0],
                scaleY: isScrolling ? [0, 2, 0] : [0, 1, 0],
                y: isScrolling ? [0, 20] : [0, 10]
              }}
              transition={{
                opacity: { duration: isScrolling ? 0.3 : 1.5, repeat: Infinity, delay: i * 0.1 },
                scaleY: { duration: isScrolling ? 0.3 : 1.5, repeat: Infinity, delay: i * 0.1 },
                y: { duration: isScrolling ? 0.8 : 2, repeat: Infinity, delay: i * 0.1 }
              }}
            />
          ))}
        </motion.div>

        {/* Holographic Text */}
        <motion.div
          className="mt-2 text-xs font-mono text-cyan-400/80 tracking-wider"
          animate={{
            opacity: isScrolling ? [1, 0.3, 1] : [0.6, 1, 0.6],
            scale: isScrolling ? [1, 1.1, 1] : [1, 1.05, 1],
            color: isScrolling 
              ? ["#06b6d4", "#10b981", "#8b5cf6", "#f59e0b", "#06b6d4"]
              : ["#06b6d4", "#10b981", "#06b6d4"]
          }}
          transition={{
            opacity: { duration: isScrolling ? 0.5 : 1.5, repeat: Infinity },
            scale: { duration: isScrolling ? 0.5 : 2, repeat: Infinity },
            color: { duration: isScrolling ? 1.5 : 3, repeat: Infinity }
          }}
        >
          {isScrolling ? 'INITIALIZING...' : 'SCROLL TO EXPLORE'}
        </motion.div>

        {/* Quantum Field Effect */}
        <motion.div
          className="absolute -inset-8 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 100%)",
            filter: "blur(10px)"
          }}
          animate={{
            scale: isScrolling ? [1, 2, 1] : [1, 1.2, 1],
            opacity: isScrolling ? [0.2, 0.6, 0.2] : [0.1, 0.3, 0.1]
          }}
          transition={{
            scale: { duration: isScrolling ? 1.5 : 4, repeat: Infinity },
            opacity: { duration: isScrolling ? 1.5 : 3, repeat: Infinity }
          }}
        />
      </motion.div>
    );
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.h1 
            className="text-6xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Saym Islam
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A86B] to-[#118252] ml-4">
              Jihad
            </span>
          </motion.h1>
          
          <motion.div 
            className="text-2xl lg:text-3xl text-gray-300 mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="font-mono">
              {displayText}
              <span className="animate-pulse text-cyan-400">|</span>
            </span>
          </motion.div>

          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Crafting exceptional digital experiences with cutting-edge technologies 
            and innovative solutions that bring ideas to life.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <button className="interactive bg-gradient-to-r from-[#118252] to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              View Projects
            </button>
            <button className="interactive border border-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:border-[#118252] hover:text-[#118252] transition-all duration-300">
              Download CV
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Holographic Interface */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <HolographicInterface />
        </motion.div>
      </div>

      {/* Quantum Scroll Portal */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <QuantumScrollPortal />
      </div>
    </section>
  );
};

export default HeroSection;