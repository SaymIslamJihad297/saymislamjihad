import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Github,
    Linkedin,
    Twitter,
    Facebook,
    Mail,
    FileText,
    ExternalLink
} from 'lucide-react';

interface SocialLink {
    icon: React.ComponentType<any>;
    href: string;
    label: string;
    tooltip: string;
    color: string;
    hoverColor: string;
}

const SocialSidebar = () => {
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
    // Smile1Icon.tsx
    const Smile1Icon = ({ className }: { className?: string }) => (
        <svg
            className={className}
            width="24"
            height="24"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="32" cy="32" r="30" stroke="#72f499ff" strokeWidth="4" fill="transparent" />
            <circle cx="22" cy="24" r="3" fill="#72f499ff" />
            <circle cx="42" cy="24" r="3" fill="#72f4beff" />
            <path
                d="M22 42C24.6667 45.3333 29.3333 48 32 48C34.6667 48 39.3333 45.3333 42 42"
                stroke="#72f488ff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    // Smile2Icon.tsx
    const Smile2Icon = ({ className }: { className?: string }) => (
        <svg
            className={className}
            width="24"
            height="24"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="32" cy="32" r="30" stroke="#facc15" strokeWidth="4" fill="transparent" />
            <circle cx="20" cy="24" r="4" fill="#facc15" />
            <circle cx="44" cy="24" r="4" fill="#facc15" />
            <path
                d="M20 40C24 45 40 45 44 40"
                stroke="#facc15"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M26 37C27.5 38.5 36.5 38.5 38 37"
                stroke="#facc15"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );



    const socialLinks: SocialLink[] = [
    {
        icon: Github,
        href: "https://github.com/SaymIslamJihad297",
        label: "GitHub",
        tooltip: "Check out my code 🚀",
        color: "#6366f1",
        hoverColor: "#8b5cf6"
    },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/saym-islam-70a10a306",
        label: "LinkedIn",
        tooltip: "Let's connect professionally 👔",
        color: "#0ea5e9",
        hoverColor: "#06b6d4"
    },
    {
        icon: Smile1Icon,
        href: "#",
        label: "Smile 1",
        tooltip: "Happy to see you 😊",
        color: "#f472b6",
        hoverColor: "#ec4899"
    },
    {
        icon: Smile2Icon,
        href: "#",
        label: "Smile 2",
        tooltip: "Stay positive 😄",
        color: "#facc15",
        hoverColor: "#eab308"
    },
    {
        icon: Mail,
        href: "mailto:info.jihadsheikh@gmail.com",
        label: "Email",
        tooltip: "Drop me a line ✉️",
        color: "#10b981",
        hoverColor: "#059669"
    },
    {
        icon: FileText,
        href: "/resume.pdf",
        label: "Resume",
        tooltip: "Download my resume 📄",
        color: "#f59e0b",
        hoverColor: "#d97706"
    }
];


    const sidebarVariants = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 2,
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: 2.5 + (i * 0.1),
                duration: 0.5,
                ease: "backOut"
            }
        }),
        hover: {
            scale: 1.2,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    const tooltipVariants = {
        hidden: { opacity: 0, x: -10, scale: 0.8 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="fixed left-6 bottom-6 z-40 hidden lg:block"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Main Sidebar Container */}
            <motion.div
                className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-4 shadow-2xl"
                style={{
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                }}
            >
                {/* Animated Background Glow */}
                <motion.div
                    className="absolute -inset-0.5 rounded-2xl opacity-30"
                    style={{
                        background: "linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.2), transparent, rgba(16, 185, 129, 0.2), transparent, rgba(139, 92, 246, 0.2), transparent)",
                        backgroundSize: "400% 400%",
                        filter: "blur(10px)"
                    }}
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Social Icons */}
                <div className="relative space-y-4">
                    {[...Array(6)].map((_, index) => {
                        const social = socialLinks[index];

                        // Render empty space for removed social links
                        if (!social) {
                            return (
                                <div key={`empty-${index}`} className="relative">
                                    <div className="p-3 rounded-xl h-11 w-11" />
                                </div>
                            );
                        }

                        const Icon = social.icon;
                        return (
                            <div key={social.label} className="relative">
                                <motion.a
                                    href={social.href}
                                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                    className="relative block p-3 rounded-xl transition-all duration-300 group"
                                    variants={iconVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                    custom={index}
                                    onMouseEnter={() => setHoveredIcon(social.label)}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                    aria-label={`${social.label} - ${social.tooltip}`}
                                    style={{
                                        background: hoveredIcon === social.label
                                            ? `linear-gradient(135deg, ${social.color}20, ${social.hoverColor}30)`
                                            : 'transparent'
                                    }}
                                >
                                    {/* Icon Glow Effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            background: `radial-gradient(circle, ${social.color}40, transparent 70%)`,
                                            filter: "blur(8px)"
                                        }}
                                    />

                                    {/* Icon */}
                                    <motion.div
                                        className="relative"
                                        animate={{
                                            filter: hoveredIcon === social.label
                                                ? `drop-shadow(0 0 8px ${social.color}) drop-shadow(0 0 16px ${social.color}40)`
                                                : 'none'
                                        }}
                                    >
                                        <Icon
                                            className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300"
                                            style={{
                                                color: hoveredIcon === social.label ? social.hoverColor : undefined
                                            }}
                                        />
                                    </motion.div>

                                    {/* External Link Indicator */}
                                    {!social.href.startsWith('mailto:') && (
                                        <motion.div
                                            className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            initial={{ scale: 0 }}
                                            whileHover={{ scale: 1 }}
                                        >
                                            <ExternalLink className="w-3 h-3 text-gray-400" />
                                        </motion.div>
                                    )}
                                </motion.a>

                                {/* Tooltip */}
                                <AnimatePresence>
                                    {hoveredIcon === social.label && (
                                        <motion.div
                                            className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 pointer-events-none z-50"
                                            variants={tooltipVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                        >
                                            <div className="relative">
                                                <div
                                                    className="bg-gray-900/95 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg border border-gray-700/50 whitespace-nowrap shadow-xl"
                                                    style={{
                                                        boxShadow: `0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px ${social.color}40`
                                                    }}
                                                >
                                                    {social.tooltip}
                                                </div>
                                                {/* Tooltip Arrow */}
                                                <div
                                                    className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900/95 border-l border-b border-gray-700/50 rotate-45"
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* Connection Line to Content */}
                <motion.div
                    className="absolute top-1/2 right-0 w-8 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 32, opacity: 1 }}
                    transition={{ delay: 3.5, duration: 1 }}
                />

                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                        style={{
                            left: `${20 + (i * 20)}%`,
                            top: `${30 + (i * 30)}%`,
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0],
                            y: [0, -10, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 4 + (i * 0.5),
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </motion.div>

            {/* Bottom Gradient Line */}
            <motion.div
                className="mt-4 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 3.8, duration: 1 }}
            />
        </motion.div>
    );
};

export default SocialSidebar;