"use client";

import { motion } from "framer-motion";
import { HiLightningBolt, HiChip, HiAcademicCap } from "react-icons/hi";

const highlights = [
  {
    icon: HiLightningBolt,
    title: "Deep Learning Expert",
    description:
      "Specialized in deep learning, RF sensing, and signal processing for IoT and autonomous systems.",
  },
  {
    icon: HiChip,
    title: "Product Integration",
    description:
      "Demonstrated success in integrating advanced radar, lidar, and Wi-Fi CSI technologies into real-world products.",
  },
  {
    icon: HiAcademicCap,
    title: "Research Impact",
    description:
      "3,374+ Google Scholar citations, h-index 34, 60+ patents, and recognized with best paper awards.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12 max-w-3xl">
          I am an experienced researcher and engineer specializing in deep
          learning, RF sensing, and signal processing for IoT and autonomous
          systems. My work focuses on decoding sensor data — from radar, lidar,
          and Wi-Fi CSI — to enable seamless human-machine interactions. I have
          contributed to products at Amazon and Apple, authored highly-cited
          publications, and hold multiple patents in wireless sensing technology.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
