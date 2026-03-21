import React from "react";
import { Link } from "react-scroll";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import { HiOutlineChevronUp } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "experience", label: "Experience" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-white/5">
      {/* Back to top */}
      <div className="flex justify-center -mt-6">
        <Link
          to="home"
          smooth
          duration={800}
          className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600
                     text-white shadow-lg shadow-cyan-500/30 cursor-pointer
                     hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <HiOutlineChevronUp className="w-5 h-5" />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold">
              <span className="gradient-text">&lt;</span>
              <span className="text-gray-800 dark:text-white">Harsha</span>
              <span className="gradient-text">/&gt;</span>
            </span>
            <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer & AI Enthusiast building intelligent web
              solutions. Always learning, always coding.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    offset={-80}
                    duration={500}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400
                               cursor-pointer transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                {
                  icon: <FaLinkedinIn />,
                  href: "https://www.linkedin.com/in/harshavardhanreddycheruku28",
                },
                {
                  icon: <FaGithub />,
                  href: "https://github.com/harshareddycheruku28-prog",
                },
                {
                  icon: <FaEnvelope />,
                  href: "mailto:harshareddycheruku28@gmail.com",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-gray-200 dark:border-white/10
                             bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400
                             hover:text-cyan-600 dark:hover:text-cyan-400
                             hover:border-cyan-300 dark:hover:border-cyan-500/30
                             transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/5 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Cheruku Harshavardhan Reddy. Built with{" "}
            <FaHeart className="inline w-3 h-3 text-red-500 mx-1" /> using React &
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
