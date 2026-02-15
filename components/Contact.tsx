"use client";

import { motion } from "framer-motion";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaGithub, FaGraduationCap, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="section-title">
          Get in <span className="gradient-text">Touch</span>
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
          Interested in collaboration, research opportunities, or just want to
          connect? Feel free to reach out.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:zhangfeng0528@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-4 glass-card hover:shadow-lg hover:shadow-primary-500/10 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
              <HiMail className="w-5 h-5 text-primary-500" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                zhangfeng0528@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+13012754686"
            className="inline-flex items-center gap-3 px-6 py-4 glass-card hover:shadow-lg hover:shadow-primary-500/10 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
              <HiPhone className="w-5 h-5 text-primary-500" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                (301) 275-4686
              </p>
            </div>
          </a>

          <a
            href="https://github.com/fzhang15"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 glass-card hover:shadow-lg hover:shadow-primary-500/10 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
              <FaGithub className="w-5 h-5 text-primary-500" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 dark:text-gray-400">GitHub</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                fzhang15
              </p>
            </div>
          </a>

          <a
            href="https://scholar.google.com/citations?user=mkEVonEAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 glass-card hover:shadow-lg hover:shadow-primary-500/10 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
              <FaGraduationCap className="w-5 h-5 text-primary-500" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 dark:text-gray-400">Google Scholar</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                3,374+ Citations
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/feng-zhang-7942a533/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 glass-card hover:shadow-lg hover:shadow-primary-500/10 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
              <FaLinkedinIn className="w-5 h-5 text-primary-500" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500 dark:text-gray-400">LinkedIn</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Feng Zhang
              </p>
            </div>
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-gray-200/50 dark:border-gray-800/50 text-center"
      >
        <p className="text-sm text-gray-500 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Feng Zhang. Built with Next.js &
          Tailwind CSS.
        </p>
      </motion.footer>
    </section>
  );
}
