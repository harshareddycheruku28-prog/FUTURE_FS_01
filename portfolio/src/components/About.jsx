import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
  HiOutlineCode,
  HiOutlineSparkles,
} from "react-icons/hi";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    {
      icon: <HiOutlineAcademicCap className="w-6 h-6" />,
      title: "Education",
      value: "B.Tech CSE (AI)",
      sub: "Vignan's Institute of Information Technology",
    },
    {
      icon: <HiOutlineSparkles className="w-6 h-6" />,
      title: "CGPA",
      value: "8.62",
      sub: "Consistently strong academic record",
    },
    {
      icon: <HiOutlineCode className="w-6 h-6" />,
      title: "Focus",
      value: "Full Stack Dev",
      sub: "React, Node.js & Modern Web",
    },
    {
      icon: <HiOutlineLightBulb className="w-6 h-6" />,
      title: "Passion",
      value: "AI Solutions",
      sub: "Intelligent & data-driven apps",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">
            Get to know who I am and what drives my passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — illustration / avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-blue-400/20 animate-spin-slow" style={{ animationDirection: "reverse" }} />
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-purple-400/20 animate-spin-slow" />

              {/* Center avatar circle */}
              <div
                className="absolute inset-12 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600
                             flex items-center justify-center shadow-2xl shadow-cyan-500/20"
              >
                <span className="text-6xl sm:text-7xl font-black text-white select-none">
                  H
                </span>
              </div>

              {/* Floating tech badges */}
              {["React", "AI", "Node", "Python"].map((t, i) => {
                const positions = [
                  "top-0 left-1/2 -translate-x-1/2 -translate-y-4",
                  "bottom-0 left-1/2 -translate-x-1/2 translate-y-4",
                  "left-0 top-1/2 -translate-y-1/2 -translate-x-4",
                  "right-0 top-1/2 -translate-y-1/2 translate-x-4",
                ];
                return (
                  <motion.div
                    key={t}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      delay: i * 0.5,
                    }}
                    className={`absolute ${positions[i]} px-3 py-1.5 rounded-lg
                                bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-white/10
                                text-xs font-bold text-gray-700 dark:text-gray-200`}
                  >
                    {t}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — text + highlights */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Crafting <span className="gradient-text">Digital Experiences</span> with Code & AI
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              <p>
                I'm <span className="text-gray-900 dark:text-white font-semibold">Cheruku Harshavardhan Reddy</span>,
                a B.Tech CSE (AI) student at{" "}
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                  Vignan's Institute of Information Technology
                </span>
                , maintaining a CGPA of <span className="font-semibold text-gray-900 dark:text-white">8.62</span>.
              </p>
              <p>
                I'm deeply passionate about building full stack web applications that are both
                elegant and functional. My journey blends modern frontend frameworks like React
                with powerful backend technologies and AI-driven features to deliver truly
                intelligent solutions.
              </p>
              <p>
                When I'm not coding, I enjoy participating in hackathons, exploring new AI tools,
                and contributing to community events that foster innovation.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="glass-card glass-card-hover p-4 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400
                                    group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                      {h.icon}
                    </div>
                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      {h.title}
                    </span>
                  </div>
                  <p className="font-bold text-gray-900 dark:text-white">{h.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{h.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
