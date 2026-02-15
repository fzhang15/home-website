"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "PyTorch", "MATLAB", "C++", "C"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Expertise",
    skills: [
      "Deep Learning",
      "RF Sensing / Imaging",
      "Signal Processing",
      "Machine Learning",
      "Computer Vision",
    ],
    color: "from-primary-500 to-teal-500",
  },
  {
    title: "Tools & Platforms",
    skills: [
      "LiDAR",
      "mmWave Radar",
      "WiFi CSI",
      "Embedded Systems",
      "Ultrasound",
      "Thermal Sensors",
    ],
    color: "from-violet-500 to-purple-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3
                className={`text-lg font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500/10 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
