import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiOutlineExternalLink,
  HiOutlineCode,
  HiOutlineChip,
  HiOutlineGlobe,
  HiOutlineX,
} from "react-icons/hi";
import {
  FaReact,
  FaNodeJs,
  FaRobot,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Campus Navigator Web Application",
    subtitle: "Centralized Academic Platform",
    description:
      "A comprehensive web platform designed for students to access academic resources, campus information, and intelligent features — all in one place. Built with a modern tech stack to ensure performance and scalability.",
    longDescription:
      "Campus Navigator is a full-featured web application that transforms how students interact with campus resources. It includes a secure login system with role-based access, a personalized dashboard, branch prediction tools, and an AI-powered chatbot for instant academic assistance. The platform consolidates scattered resources into a single, intuitive interface.",
    image: "🎓",
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    features: [
      "Secure Login & Authentication System",
      "Personalized Student Dashboard",
      "AI Branch Prediction Module",
      "Intelligent AI Chatbot",
      "Responsive & Modern UI",
    ],
    color: "from-cyan-500 to-blue-600",
    shadowColor: "shadow-cyan-500/20",
    github: "#",
    live: "https://campus-navigator-dun.vercel.app/",
    category: "Web",
  },
  {
    id: 2,
    title: "AquaSphere — Smart Water Tank Monitor",
    subtitle: "AI-Powered IoT Dashboard",
    description:
      "A sophisticated IoT-based smart water monitoring dashboard for real-time tracking of tank volume, capacity, and usage — powered by Google Gemini AI for predictive analytics and intelligent insights.",
    longDescription:
      "AquaSphere is a full-featured smart water management platform that combines IoT hardware with cutting-edge AI. It integrates with the Blynk IoT platform for live sensor data, and uses Google Gemini AI to predict empty times and calculate real-time drain rates. The dashboard features dual control modes (Automatic & Manual), interactive usage trend charts via Recharts, a real-time notification system, and advanced configuration for tank dimensions and sensor offsets — all wrapped in a stunning glassmorphism dark UI.",
    image: "🌊",
    tech: [
      { name: "Next.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Gemini AI", icon: <FaRobot /> },
      { name: "Blynk IoT", icon: <HiOutlineGlobe /> },
      { name: "Recharts", icon: <HiOutlineChip /> },
    ],
    features: [
      "Real-time Tank Volume & Capacity Tracking",
      "Google Gemini AI Predictive Analytics",
      "Automatic & Manual Control Modes",
      "Interactive Usage Trend Charts",
      "Live Notification & Alert System",
      "Advanced IoT Configuration Panel",
    ],
    color: "from-teal-500 to-cyan-600",
    shadowColor: "shadow-teal-500/20",
    github: "#",
    live: "https://aquasphere-ruddy.vercel.app/",
    category: "IoT + AI",
  },
];

const ProjectCard = ({ project, index, onOpen, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
    className="group relative"
  >
    <div className="glass-card overflow-hidden h-full flex flex-col transition-all duration-500
                    hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-cyan-500/5
                    hover:border-cyan-300/50 dark:hover:border-cyan-500/20">
      {/* Top gradient banner */}
      <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center overflow-hidden`}>
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <span className="text-7xl sm:text-8xl filter drop-shadow-lg select-none
                         group-hover:scale-110 transition-transform duration-500">
          {project.image}
        </span>
        {/* Category badge */}
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm
                         text-white text-xs font-bold uppercase tracking-wider">
          {project.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1
                       group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-3">
          {project.subtitle}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
                         bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300
                         border border-gray-200 dark:border-white/10
                         group-hover:border-cyan-300/50 dark:group-hover:border-cyan-500/20
                         transition-colors"
            >
              <span className="text-sm">{t.icon}</span>
              {t.name}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-white/5">
          <button
            onClick={() => onOpen(project)}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl
                       bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm
                       shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30
                       hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <HiOutlineCode className="w-4 h-4" />
            Learn More
          </button>
          <a
            href={project.github}
            className="p-2.5 rounded-xl border border-gray-200 dark:border-white/10
                       hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
            aria-label="GitHub"
          >
            <HiOutlineExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 z-[999] flex items-center justify-center p-4
               bg-black/70 backdrop-blur-sm"
  >
    <motion.div
      initial={{ scale: 0.85, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.85, opacity: 0, y: 40 }}
      transition={{ type: "spring", damping: 25, stiffness: 250 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto
                 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-white/10
                 shadow-2xl"
    >
      {/* Header */}
      <div className={`relative h-40 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center`}>
        <span className="text-6xl select-none">{project.image}</span>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm
                     text-white hover:bg-white/30 transition"
        >
          <HiOutlineX className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6 sm:p-8">
        <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10
                         text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-4">
          {project.subtitle}
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          {project.longDescription}
        </p>

        {/* Features */}
        <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <FaRobot className="text-cyan-500" /> Key Features
        </h4>
        <ul className="space-y-2 mb-6">
          {project.features.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Tech */}
        <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <HiOutlineChip className="text-cyan-500" /> Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold
                         bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300
                         border border-gray-200 dark:border-white/10"
            >
              <span>{t.icon}</span>
              {t.name}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={project.live}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl
                       bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold
                       shadow-lg shadow-cyan-500/25 hover:shadow-xl transition-all"
          >
            <HiOutlineGlobe className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={project.github}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl
                       border-2 border-gray-200 dark:border-white/10 font-semibold
                       hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
          >
            <HiOutlineCode className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            Some of my recent work that showcases my skills and passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              inView={inView}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
