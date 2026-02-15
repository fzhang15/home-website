"use client";

import { motion } from "framer-motion";
import { HiMail, HiDownload } from "react-icons/hi";
import { FaGithub, FaGraduationCap, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium"
          >
            Ph.D. in Electrical & Computer Engineering
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900 dark:text-white">Feng </span>
            <span className="gradient-text">Zhang</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            Decoding sensor data with deep learning for seamless
            human-machine interactions
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-500 mb-10">
            Sr. Applied Scientist @ Amazon &middot; 3,374+ Citations &middot;
            Multiple Patents
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:zhangfeng0528@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-all hover:shadow-lg hover:shadow-primary-500/25"
            >
              <HiMail className="w-4 h-4" />
              Get in Touch
            </a>
            <a
              href="/CV-Feng Zhang.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-all"
            >
              <HiDownload className="w-4 h-4" />
              Download CV
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-6 mt-10"
          >
            <a
              href="mailto:zhangfeng0528@gmail.com"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <HiMail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/fzhang15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=mkEVonEAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="Google Scholar"
            >
              <FaGraduationCap className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/feng-zhang-7942a533/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-gray-400 dark:bg-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
