import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Download, Server } from 'lucide-react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiMongodb, 
  SiDocker 
} from 'react-icons/si';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend'>('frontend');

  const techData = {
    frontend: [
      { 
        name: 'React', 
        gradient: 'from-blue-400 to-blue-600',
        tooltip: 'UI wizardry with React',
        glow: 'shadow-blue-500/50',
        icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />
      },
      { 
        name: 'Next.js', 
        gradient: 'from-gray-600 to-gray-800',
        tooltip: 'Pages load like lightning',
        glow: 'shadow-gray-500/50',
        icon: <SiNextdotjs className="w-8 h-8 text-white" />
      },
      { 
        name: 'TypeScript', 
        gradient: 'from-blue-500 to-blue-700',
        tooltip: 'I type safe!',
        glow: 'shadow-blue-600/50',
        icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />
      },
    ],
    backend: [
      { 
        name: 'Node.js', 
        gradient: 'from-green-400 to-green-600',
        tooltip: 'Backend ninja stuff',
        glow: 'shadow-green-500/50',
        icon: <SiNodedotjs className="w-8 h-8 text-[#339933]" />
      },
      { 
        name: 'Express', 
        gradient: 'from-gray-500 to-gray-700',
        tooltip: 'Fast, unopinionated, minimalist!',
        glow: 'shadow-gray-500/50',
        icon: <SiExpress className="w-8 h-8 text-[#000000]" />
      },
      { 
        name: 'Python', 
        gradient: 'from-yellow-400 to-yellow-600',
        tooltip: 'For AI, APIs, and all things cool',
        glow: 'shadow-yellow-500/50',
        icon: <SiPython className="w-8 h-8 text-[#3776AB]" />
      },
      { 
        name: 'MongoDB', 
        gradient: 'from-green-500 to-green-700',
        tooltip: 'NoSQL, no problem!',
        glow: 'shadow-green-600/50',
        icon: <SiMongodb className="w-8 h-8 text-[#47A248]" />
      },
      { 
        name: 'Docker', 
        gradient: 'from-blue-400 to-cyan-500',
        tooltip: 'Packed and shipped perfectly',
        glow: 'shadow-cyan-500/50',
        icon: <SiDocker className="w-8 h-8 text-[#2496ED]" />
      },
    ]
  };

  const SmileyIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline-block ml-1">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="m9 9 0 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="m15 9 0 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="m8 15 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const TechIcon = ({ tech, index }: { tech: any, index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        className="relative flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-16 z-10 bg-gray-800/95 backdrop-blur-sm border border-gray-600 rounded-lg px-3 py-2 text-sm text-white whitespace-nowrap shadow-lg"
            >
              {tech.tooltip}
              <SmileyIcon />
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800/95"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Circular Icon */}
        <motion.div
          className={`w-20 h-20 rounded-full bg-gradient-to-br ${tech.gradient} p-0.5 cursor-pointer transition-all duration-300`}
          whileHover={{ 
            scale: 1.1,
            boxShadow: `0 0 20px rgba(56, 189, 248, 0.6)`
          }}
          animate={{
            boxShadow: isHovered 
              ? `0 0 25px rgba(56, 189, 248, 0.8)` 
              : `0 0 0px rgba(56, 189, 248, 0)`
          }}
        >
          <div className="w-full h-full rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 flex items-center justify-center">
            {tech.icon}
          </div>
        </motion.div>
        
        {/* Tech Name Below Circle */}
        <motion.span
          className="text-white font-medium text-sm mt-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {tech.name}
        </motion.span>
      </motion.div>
    );
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-[#118252]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile & Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative">
                <motion.div
                  className="w-48 h-48 rounded-full bg-gradient-to-r from-[#118252] to-emerald-500 p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <User className="w-24 h-24 text-gray-400" />
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </motion.div>
              </div>
            </div>

            {/* Code Block Style Bio */}
            <motion.div
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono">developer.bio</span>
              </div>
              
              <div className="font-mono text-sm">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-cyan-400">developer</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-yellow-400">{'{'}</span>
                <br />
                <span className="text-gray-400 ml-4">name:</span>{' '}
                <span className="text-green-400">"Saym Islam Jihad"</span>,
                <br />
                <span className="text-gray-400 ml-4">role:</span>{' '}
                <span className="text-green-400">"Full Stack Developer"</span>,
                <br />
                <span className="text-gray-400 ml-4">passion:</span>{' '}
                <span className="text-green-400">"Building innovative solutions"</span>,
                <br />
                <span className="text-gray-400 ml-4">experience:</span>{' '}
                <span className="text-orange-400">3</span>,
                <br />
                <span className="text-yellow-400">{'}'}</span>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-300 text-lg leading-relaxed mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'm a passionate full-stack developer with a love for creating 
              exceptional digital experiences. With expertise in modern web technologies, 
              I transform ideas into powerful, scalable applications that make a difference.
            </motion.p>

            <motion.button
              className="interactive flex items-center gap-2 bg-gradient-to-r from-[#118252] to-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Right Side - Interactive Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Toggle Cards */}
            <div className="flex space-x-4 mb-8">
              {(['frontend', 'backend'] as const).map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border-[#118252] text-cyan-400 shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Tech Icons Grid */}
            <div className="min-h-[300px]">
              <h3 className="text-2xl font-bold text-white mb-8">
                {activeTab === 'frontend' ? 'Frontend' : 'Backend'} Technologies
              </h3>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-3 gap-8 justify-items-center"
                >
                  {techData[activeTab].map((tech, index) => (
                    <TechIcon key={tech.name} tech={tech} index={index} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Animated decorative elements */}
            <div className="flex justify-center mt-12">
              <motion.div
                className="flex space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-emerald-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;