import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import {
  SiCisco,
  SiPython,
  SiGoogle,
} from "react-icons/si";
import { FaBrain, FaRobot, FaBuilding } from "react-icons/fa";

const certs = [
  {
    title: "C Programming",
    issuer: "Cisco",
    icon: <SiCisco />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "JavaScript Essentials",
    issuer: "Cisco",
    icon: <SiCisco />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Python 1 & 2",
    issuer: "Cisco / Certified",
    icon: <SiPython />,
    color: "from-blue-400 to-yellow-500",
  },
  {
    title: "Prompt Engineering",
    issuer: "IBM",
    icon: <FaBuilding />,
    color: "from-blue-600 to-blue-800",
  },
  {
    title: "Generative AI",
    issuer: "Analytics Vidhya",
    icon: <FaBrain />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI/ML Virtual Internship",
    issuer: "Google (EduSkills)",
    icon: <SiGoogle />,
    color: "from-green-500 to-blue-500",
  },
  {
    title: "Prompt War",
    issuer: "Unstop – VIIT",
    icon: <FaRobot />,
    color: "from-red-500 to-orange-500",
  },
];

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subheading">
            Professional certifications that validate my skills and knowledge
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card glass-card-hover p-5 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} text-white shadow-lg
                              group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <span className="text-xl">{cert.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm leading-snug mb-1 truncate">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <HiOutlineBadgeCheck className="w-3.5 h-3.5 text-cyan-500" />
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
