import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlinePaperAirplane,
} from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // simulate send
    setTimeout(() => {
      alert("Message sent successfully! (Demo)");
      setForm({ name: "", email: "", subject: "", message: "" });
      setSending(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <HiOutlineMail className="w-5 h-5" />,
      label: "Email",
      value: "harshareddycheruku28@gmail.com",
      href: "mailto:harshareddycheruku28@gmail.com",
    },
    {
      icon: <HiOutlinePhone className="w-5 h-5" />,
      label: "Phone",
      value: "+91-9701571767",
      href: "tel:+919701571767",
    },
    {
      icon: <HiOutlineLocationMarker className="w-5 h-5" />,
      label: "Location",
      value: "Andhra Pradesh, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/harshavardhanreddycheruku28",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:shadow-blue-500/25",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/harshareddycheruku28-prog",
      label: "GitHub",
      color: "hover:bg-gray-800 hover:border-gray-800 hover:text-white hover:shadow-gray-500/25 dark:hover:bg-white dark:hover:text-gray-900",
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-gray-50/50 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Let's build something amazing together
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, opportunities, or
                partnerships. Feel free to reach out through any channel below.
              </p>

              <div className="space-y-5">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-center gap-4 p-3 -mx-3 rounded-xl
                                   hover:bg-cyan-50 dark:hover:bg-cyan-500/5 transition-colors"
                      >
                        <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-500/10
                                        text-cyan-600 dark:text-cyan-400
                                        group-hover:bg-cyan-500 group-hover:text-white
                                        transition-all duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                            {info.label}
                          </p>
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200
                                        group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-3 -mx-3">
                        <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-500/10
                                        text-cyan-600 dark:text-cyan-400">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                            {info.label}
                          </p>
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/5">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">
                  Follow me on
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl border border-gray-200 dark:border-white/10
                                  bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300
                                  shadow-sm transition-all duration-300 ${s.color}`}
                    >
                      <span className="text-lg">{s.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5
                               border border-gray-200 dark:border-white/10
                               text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                               focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500
                               transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5
                               border border-gray-200 dark:border-white/10
                               text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                               focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500
                               transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5
                             border border-gray-200 dark:border-white/10
                             text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                             focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500
                             transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5
                             border border-gray-200 dark:border-white/10
                             text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                             focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500
                             transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <HiOutlinePaperAirplane className="w-5 h-5 rotate-45" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
