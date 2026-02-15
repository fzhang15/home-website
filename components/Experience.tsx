"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Sr. Applied Scientist",
    company: "Amazon.com, Inc.",
    period: "May 2024 – Present",
    description: "LiDAR-Based Gesture Recognition and Multi-Sensor Fusion for Echo Devices",
    highlights: [
      "Developed and validated a deep neural network to recognize human gestures using cost-effective LiDAR sensors.",
      "Engineered a multimodal fusion framework that combines ultrasound and WiFi CSI data to enhance presence detection.",
    ],
  },
  {
    title: "Sr. Systems Architect Engineer",
    company: "Apple, Inc.",
    period: "Dec. 2022 – May 2024",
    description: "Integrated and Evaluated mmWave Radar Signals for Autonomous Systems",
    highlights: [
      "Led improvements in radar data filtering, representation, modeling, and performance bounding.",
      "Integrated radar data into the perception DNN, boosting system accuracy in challenging scenarios.",
    ],
  },
  {
    title: "Applied Scientist",
    company: "Amazon.com, Inc.",
    period: "May 2020 – Dec. 2022",
    description: "Developed Sensing Features for Echo Family Devices",
    highlights: [
      "Built machine learning algorithms to recognize human activity patterns using WiFi CSI, mmWave Radar, and thermal sensors.",
      "Developed comprehensive test plans to validate performance and ensure product robustness.",
    ],
  },
  {
    title: "Chief Scientist",
    company: "Origin Wireless, Inc.",
    period: "Dec. 2018 – May 2020",
    description: "Invented a Series of WiFi Sensing Systems",
    highlights: [
      "Created a robust, calibration-free WiFi motion detector with near-zero false alarms and through-the-wall coverage.",
      "Work highlighted by Engadget; commercialized on Linksys routers; contributed to CES 2020 Best Innovation Award.",
      "Developed the first practical WiFi sleep monitoring system using machine learning.",
      "Designed a super-resolution WiFi imaging system reusing a single 60GHz WiFi radio as a millimeter wave camera.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-primary-500/20" />

                <div className="glass-card p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-primary-500 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0 font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 italic">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 mt-1.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
