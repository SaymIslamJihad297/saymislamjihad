import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Zap, Palette, ShoppingCart, MessageSquare, Camera, BookOpen } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with React, Node.js, and Stripe integration.',
      longDescription: 'A comprehensive e-commerce solution featuring user authentication, product management, shopping cart functionality, payment processing with Stripe, order tracking, and admin dashboard. Built with modern React patterns and Node.js backend.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: ShoppingCart,
      gradient: 'from-purple-500 to-pink-500',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      longDescription: 'A powerful task management application with real-time collaboration features, drag-and-drop functionality, team workspaces, deadline tracking, and progress analytics. Features WebSocket integration for live updates.',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'Prisma'],
      icon: Zap,
      gradient: 'from-cyan-500 to-blue-500',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 3,
      title: 'Design Portfolio',
      description: 'A stunning portfolio website for creative professionals.',
      longDescription: 'An elegant portfolio website showcasing creative work with smooth animations, responsive design, and content management system. Features lazy loading, SEO optimization, and contact form integration.',
      tech: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Strapi'],
      icon: Palette,
      gradient: 'from-emerald-500 to-green-500',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 4,
      title: 'Chat Application',
      description: 'Real-time messaging app with group chats and file sharing.',
      longDescription: 'A modern chat application with real-time messaging, group conversations, file sharing, emoji reactions, and user presence indicators. Built with WebSocket technology for instant communication.',
      tech: ['React', 'Express', 'Socket.io', 'Redis'],
      icon: MessageSquare,
      gradient: 'from-orange-500 to-red-500',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 5,
      title: 'Photo Gallery',
      description: 'Image gallery with advanced filtering and search capabilities.',
      longDescription: 'A responsive photo gallery application with image upload, categorization, search functionality, and social sharing features. Includes image optimization and lazy loading for performance.',
      tech: ['Angular', 'Firebase', 'TypeScript', 'Cloudinary'],
      icon: Camera,
      gradient: 'from-indigo-500 to-purple-500',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Modern blogging platform with CMS and SEO optimization.',
      longDescription: 'A feature-rich blogging platform with content management system, SEO optimization, comment system, social sharing, and analytics dashboard. Supports markdown editing and media management.',
      tech: ['Gatsby', 'GraphQL', 'Contentful', 'Netlify'],
      icon: BookOpen,
      gradient: 'from-teal-500 to-cyan-500',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#118252]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#118252] to-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my latest work, featuring innovative solutions and cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                className="interactive group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                  {/* Project Icon */}
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Project Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="interactive flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="interactive flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  const IconComponent = project.icon;
                  return (
                    <>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="interactive w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gray-800 text-cyan-400 text-sm rounded-full border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          className="interactive flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          View Source
                        </a>
                        <a
                          href={project.demo}
                          className="interactive flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;