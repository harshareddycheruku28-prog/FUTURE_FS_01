import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const Hero = () => {
  const socials = [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/harshavardhanreddycheruku28",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:border-blue-600 hover:shadow-blue-500/25",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/harshareddycheruku28-prog",
      label: "GitHub",
      color: "hover:bg-gray-800 hover:border-gray-800 hover:shadow-gray-500/25 dark:hover:bg-white dark:hover:text-gray-900 dark:hover:border-white",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:harshareddycheruku28@gmail.com",
      label: "Email",
      color: "hover:bg-red-500 hover:border-red-500 hover:shadow-red-500/25",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob-gradient w-[500px] h-[500px] bg-cyan-500 -top-40 -right-40 animate-blob" />
        <div className="blob-gradient w-[400px] h-[400px] bg-purple-500 top-1/2 -left-40 animate-blob animation-delay-2000" />
        <div className="blob-gradient w-[350px] h-[350px] bg-blue-500 bottom-0 right-1/3 animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full
                     bg-cyan-50 dark:bg-cyan-500/10
                     border border-cyan-200 dark:border-cyan-500/20
                     text-cyan-700 dark:text-cyan-400 text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          Available for Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6"
        >
          <span className="text-gray-900 dark:text-white">Hi, I'm </span>
          <br className="sm:hidden" />
          <span className="gradient-text-hover">Harshavardhan</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6 text-xl sm:text-2xl font-semibold
                     text-gray-600 dark:text-gray-300"
        >
          <span>Full Stack Developer</span>
          <span className="w-2 h-2 rounded-full bg-cyan-500" />
          <span>AI Enthusiast</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-balance"
        >
          Building <span className="text-cyan-600 dark:text-cyan-400 font-semibold">intelligent web solutions</span>{" "}
          that merge modern development with the power of Artificial Intelligence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link to="projects" smooth offset={-80} duration={500}>
            <button className="btn-primary group">
              View Projects
              <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link to="contact" smooth offset={-80} duration={500}>
            <button className="btn-secondary">Contact Me</button>
          </Link>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-xl border border-gray-200 dark:border-white/10
                          bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300
                          shadow-sm transition-all duration-300
                          hover:text-white hover:shadow-lg ${s.color}`}
            >
              <span className="text-lg">{s.icon}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth offset={-80} duration={500} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500
                       hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Scroll
            </span>
            <FaChevronDown className="text-sm" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
