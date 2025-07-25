import React from 'react';
import { motion } from 'framer-motion';

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} 
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, -20, 20],
            x: [null, -10, 10],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ))}

      {/* Code Snippets */}
      {['<div>', 'const', '{...}', '[]', '()'].map((code, i) => (
        <motion.div
          key={i}
          className="absolute text-emerald-500/20 font-mono text-sm"
          initial={{ opacity: 0, y: 100 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            y: -100,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
          }}
          style={{
            left: 10 + (i * 20) + '%',
            top: '100%',
          }}
        >
          {code}
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundElements;