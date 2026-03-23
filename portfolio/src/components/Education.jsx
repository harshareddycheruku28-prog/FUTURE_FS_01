import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiOutlineAcademicCap,
  HiOutlineLibrary,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineLocationMarker
} from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const educationData = [
    {
      type: "Bachelor of Technology",
      institution: "Vignan's Institute of Information Technology",
      field: "Computer Science and Engineering (Artificial Intelligence)",
      duration: "2024 — Present",
      location: "Visakhapatnam, Andhra Pradesh",
      grade: "CGPA: 8.62",
      description: "Specializing in Intelligence Systems and Machine Learning. Actively participating in hackathons and technical events.",
      icon: <FaGraduationCap className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600"
    },
    {
      type: "Intermediate Education (MPC)",
      institution: "Sri Chaitanya Junior College",
      field: "Board of Intermediate Education, AP",
      duration: "2022 — 2024",
      location: "Andhra Pradesh, India",
      grade: "96.7%",
      description: "Focused on Mathematics, Physics, and Chemistry (MPC) with a strong foundation in analytical subjects.",
      icon: <HiOutlineLibrary className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      type: "Secondary School Certificate",
      institution: "ZPH School",
      field: "Board of Secondary Education, AP",
      duration: "2022",
      location: "Andhra Pradesh, India",
      grade: "83.83%",
      description: "Completed secondary education with Excellence, focusing on foundational science and mathematics.",
      icon: <HiOutlineAcademicCap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">
            Education <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subheading">
            My academic foundation and the path I've traversed in my learning quest
          </p>
        </motion.div>

        <div className="relative mt-12">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 opacity-20 hidden sm:block" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`relative flex flex-col sm:flex-row items-center ${index % 2 === 0 ? "sm:flex-row-reverse" : ""
                  }`}
              >
                {/* Connection Dot */}
                <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-2 border-cyan-500 rounded-full -translate-x-1.5 z-10 hidden sm:block" />

                <div className="w-full sm:w-1/2 px-4 sm:px-12">
                  <div className="glass-card glass-card-hover p-6 group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${edu.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                            {edu.type}
                          </h3>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold border border-cyan-100 dark:border-cyan-500/20">
                            <HiOutlineCalendar className="w-3.5 h-3.5" />
                            {edu.duration}
                          </span>
                        </div>
                        <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-1 flex items-center gap-1">
                          <HiOutlineLibrary className="w-4 h-4" />
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
                          <span className="flex items-center gap-1">
                            <HiOutlineLocationMarker className="w-4 h-4" />
                            {edu.location}
                          </span>
                          <span className="flex items-center gap-1 font-bold text-cyan-600 dark:text-cyan-400">
                            <HiOutlineBookOpen className="w-4 h-4" />
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
