import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineDownload,
} from "react-icons/hi";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "education", label: "Education" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "experience", label: "Experience" },
  { to: "certifications", label: "Certifications" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* lock body scroll while mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-2 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-gray-200/50 dark:border-white/5"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer group"
          >
            <span className="text-2xl font-bold">
              <span className="gradient-text">&lt;</span>
              <span className="text-gray-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Harsha
              </span>
              <span className="gradient-text">/&gt;</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="!text-cyan-600 dark:!text-cyan-400 bg-cyan-50 dark:bg-cyan-400/10"
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300
                           hover:text-cyan-600 dark:hover:text-cyan-400
                           hover:bg-cyan-50 dark:hover:bg-cyan-400/10
                           transition-all duration-300 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10
                         hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
            >
              {darkMode ? (
                <HiOutlineSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <HiOutlineMoon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Resume button */}
            <a
              href="/resume.pdf"
              download="Harsha_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5
                         bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                         rounded-xl text-sm font-semibold shadow-lg shadow-cyan-500/25
                         hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5
                         transition-all duration-300"
            >
              <HiOutlineDownload className="w-4 h-4" />
              Resume
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="lg:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-white/5
                         border border-gray-200 dark:border-white/10
                         hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
            >
              <HiOutlineMenu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* -------- Mobile drawer -------- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] z-50 lg:hidden
                         bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-white/10
                         shadow-2xl flex flex-col"
            >
              {/* close */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10">
                <span className="text-xl font-bold gradient-text">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition"
                >
                  <HiOutlineX className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.to}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.06 }}
                  >
                    <Link
                      to={link.to}
                      spy
                      smooth
                      offset={-80}
                      duration={500}
                      onClick={() => setMobileOpen(false)}
                      activeClass="!text-cyan-600 dark:!text-cyan-400 bg-cyan-50 dark:bg-cyan-400/10"
                      className="block px-4 py-3 rounded-xl text-gray-600 dark:text-gray-300
                                 hover:text-cyan-600 dark:hover:text-cyan-400
                                 hover:bg-cyan-50 dark:hover:bg-cyan-400/10
                                 font-medium transition-all cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 border-t border-gray-200 dark:border-white/10">
                <a
                  href="/resume.pdf"
                  download="Harsha_Resume.pdf"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3
                             bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                             font-semibold rounded-xl shadow-lg shadow-cyan-500/25
                             transition-all duration-300"
                >
                  <HiOutlineDownload className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
