"use client";

import { motion } from "framer-motion";
import { HiDocumentText } from "react-icons/hi";

const patents = [
  {
    title: "Method, apparatus, and system for object tracking and navigation",
    number: "US 2018/0183650",
  },
  {
    title: "Method, apparatus, and systems for wireless event detection and monitoring",
    number: "WO 2017/100706",
  },
  {
    title: "Methods, apparatus, servers, and systems for vital signs detection and monitoring",
    number: "WO 2017/156492",
  },
  {
    title: "Methods, apparatus, servers, and systems for object tracking",
    number: "WO 2017/180698",
  },
  {
    title: "Method, apparatus, server and system for real-time vital sign detection and monitoring",
    number: "US 10495725",
  },
  {
    title: "Apparatus, systems and methods for fall-down detection based on a wireless signal",
    number: "US 10397039",
  },
  {
    title: "Method, apparatus, and system for wireless motion monitoring",
    number: "US 10291460",
  },
  {
    title: "Respiration monitoring based on noisy channel state information (CSI) data",
    number: "US 12279190",
  },
];

export default function Patents() {
  return (
    <section id="patents" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Selected <span className="gradient-text">Patents</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {patents.map((patent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card p-5 hover:shadow-md transition-shadow flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                <HiDocumentText className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1 leading-relaxed">
                  {patent.title}
                </h4>
                <p className="text-xs font-mono text-gray-500 dark:text-gray-400">
                  {patent.number}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
