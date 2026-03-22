import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const FORMSPREE_ID = 'xzdjqkgy';

const contactInfo = [
  {
    label: 'Email',
    value: 'harshareddycheruku28@gmail.com',
    href: 'mailto:harshareddycheruku28@gmail.com',
    icon: '✉️',
  },
  {
    label: 'Location',
    value: 'Hyderabad, India',
    icon: '📍',
  },
  {
    label: 'Availability',
    value: 'Open to opportunities',
    icon: '🟢',
  },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/harshareddycheruku28-prog', icon: '🐙', color: 'hover:text-gray-900 dark:hover:text-white' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼', color: 'hover:text-blue-600' },
  { label: 'Twitter', href: 'https://twitter.com', icon: '🐦', color: 'hover:text-sky-500' },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

const STATUS = {
  IDLE: 'idle',
  SENDING: 'sending',
  SUCCESS: 'success',
  ERROR: 'error',
};

export default function Contact() {
  const [inView, setInView] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errMsg, setErrMsg] = useState('');
  const sectionRef = useRef(null);

  // Intersection observer (same pattern as the rest of your portfolio)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.SENDING);
    setErrMsg('');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus(STATUS.SUCCESS);
        setForm(INITIAL_FORM);
        // Auto-reset success banner after 5 s
        setTimeout(() => setStatus(STATUS.IDLE), 5000);
      } else {
        const data = await res.json();
        // Formspree returns { errors: [{message}] } on 4xx
        const msg =
          data?.errors?.[0]?.message ||
          'Something went wrong. Please try again.';
        setErrMsg(msg);
        setStatus(STATUS.ERROR);
      }
    } catch (_) {
      setErrMsg('Network error. Please check your connection and try again.');
      setStatus(STATUS.ERROR);
    }
  };

  const isSending = status === STATUS.SENDING;

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 ' +
    'dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 ' +
    'dark:placeholder-gray-500 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 ' +
    'transition-all duration-300';

  return (
    <section id="contact" className="py-20 lg:py-28 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-cyan-500 uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Get In{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── LEFT: contact info + socials ── */}
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
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + 0.1 * i, duration: 0.5 }}
                    className="group"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-cyan-50 dark:hover:bg-cyan-500/5 transition-colors"
                      >
                        <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 text-lg">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-3 -mx-3">
                        <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-lg">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
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
                      className={`p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 shadow-sm transition-all duration-300 ${s.color}`}
                    >
                      <span className="text-lg">{s.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">

              {/* Name + Email */}
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
                    className={inputClass}
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
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Subject */}
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
                  className={inputClass}
                />
              </div>

              {/* Message */}
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
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Success banner */}
              {status === STATUS.SUCCESS && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400">
                  <span className="text-xl">✅</span>
                  <p className="text-sm font-medium">
                    Message sent! I'll get back to you soon.
                  </p>
                </div>
              )}

              {/* Error banner */}
              {status === STATUS.ERROR && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400">
                  <span className="text-xl">❌</span>
                  <p className="text-sm font-medium">{errMsg}</p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full sm:w-auto btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12" cy="12" r="10"
                        stroke="currentColor" strokeWidth="4" fill="none"
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
                    <Send className="w-5 h-5 rotate-45" />
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
}