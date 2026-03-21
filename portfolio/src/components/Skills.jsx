import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaRobot,
} from "react-icons/fa";
import { SiC, SiNextdotjs, SiExpress, SiTypescript, SiTailwindcss } from "react-icons/si";
import { HiOutlineGlobe } from "react-icons/hi";

const categories = [
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <FaReact />, level: 90, color: "from-cyan-400 to-blue-500" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "from-gray-700 to-black" },
      { name: "Express.js", icon: <SiExpress />, level: 82, color: "from-green-500 to-green-700" },
      { name: "Node.js", icon: <FaNodeJs />, level: 85, color: "from-green-600 to-green-800" },
    ],
  },
  {
    title: "Languages & Core Tech",
    items: [
      { name: "C", icon: <SiC />, level: 80, color: "from-blue-500 to-blue-700" },
      { name: "Java", icon: <FaJava />, level: 85, color: "from-red-500 to-orange-600" },
      { name: "Python", icon: <FaPython />, level: 90, color: "from-yellow-400 to-blue-500" },
      { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "from-blue-600 to-blue-800" },
    ],
  },
  {
    title: "Modern UI & Data",
    items: [
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95, color: "from-cyan-400 to-teal-500" },
      { name: "SQL", icon: <FaDatabase />, level: 82, color: "from-cyan-500 to-teal-600" },
      { name: "Blynk IoT", icon: <HiOutlineGlobe />, level: 88, color: "from-blue-400 to-indigo-500" },
      { name: "Gemini AI", icon: <FaRobot />, level: 85, color: "from-purple-500 to-indigo-600" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: <FaGitAlt />, level: 85, color: "from-orange-500 to-red-600" },
      { name: "GitHub", icon: <FaGithub />, level: 88, color: "from-gray-500 to-gray-800" },
    ],
  },
];

const SkillIcon = ({ item, delay, inView }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ delay, duration: 0.4 }}
    className="flex flex-col items-center gap-2 group"
  >
    <div
      className={`text-3xl p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg
                  group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`}
    >
      {item.icon}
    </div>
    <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">
      {item.name}
    </span>
  </motion.div>
);

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-gray-50/50 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.15, duration: 0.6 }}
              className="glass-card p-6 sm:p-8"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 rounded bg-gradient-to-r from-cyan-500 to-blue-600" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-6 pt-2">
                {cat.items.map((item, ii) => (
                  <SkillIcon
                    key={item.name}
                    item={item}
                    delay={ci * 0.15 + ii * 0.1}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
