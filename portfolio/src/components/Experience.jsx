import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineBadgeCheck,
  HiOutlineStar,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { FaTrophy } from "react-icons/fa";

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const internship = {
    role: "Full Stack Web Development Intern",
    company: "Future Interns",
    duration: "Mar 2026 – Apr 2026",
    description:
      "Designed and developed a personal portfolio website from scratch using modern frameworks. Gained hands-on experience in full stack development workflows including frontend design, backend integration, version control, and deployment.",
    highlights: [
      "Built a fully responsive portfolio website",
      "Worked with React, Node.js & modern tooling",
      "Practiced agile development methodologies",
      "Collaborated with cross-functional teams",
    ],
  };

  const achievements = [
    {
      icon: <FaTrophy className="w-6 h-6" />,
      title: "Supersus Hackathon",
      description: "Participated and showcased innovative problem-solving skills in a competitive coding hackathon.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <HiOutlineUserGroup className="w-6 h-6" />,
      title: "Discipline Committee Member",
      description: "Served as a Discipline Committee Member at Yuvtarang 2K26, managing event coordination and campus order.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-gray-50/50 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subheading">
            Professional experience and recognitions that define my journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Internship — takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <HiOutlineBriefcase className="text-cyan-500" /> Internship
            </h3>
            <div className="glass-card p-6 sm:p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
              {/* Accent stripe */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-r" />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {internship.role}
                  </h4>
                  <p className="text-cyan-600 dark:text-cyan-400 font-semibold">
                    {internship.company}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                               bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400
                               text-sm font-medium border border-cyan-200 dark:border-cyan-500/20">
                  <HiOutlineCalendar className="w-4 h-4" />
                  {internship.duration}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                {internship.description}
              </p>

              <ul className="grid sm:grid-cols-2 gap-3">
                {internship.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <HiOutlineBadgeCheck className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Achievements — takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <HiOutlineStar className="text-cyan-500" /> Achievements
            </h3>
            <div className="space-y-5">
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                  className="glass-card glass-card-hover p-5 group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${a.color} text-white shadow-lg
                                  group-hover:scale-110 transition-transform duration-300`}
                    >
                      {a.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        {a.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {a.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
