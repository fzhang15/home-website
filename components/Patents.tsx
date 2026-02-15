"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiDocumentText, HiChevronDown } from "react-icons/hi";

interface Patent {
  title: string;
  number: string;
  year: string;
  category: string;
}

const patents: Patent[] = [
  // Wireless Sensing & IoT
  { title: "Methods, devices, servers, apparatus, and systems for wireless internet of things applications", number: "US 10,833,912", year: "2020", category: "IoT Platform" },
  { title: "Method, apparatus, and system for object tracking sensing using broadcasting", number: "US 10,742,475", year: "2020", category: "Object Tracking" },
  { title: "Method, apparatus, and system for object tracking and navigation", number: "US 10,270,642", year: "2019", category: "Object Tracking" },
  { title: "Method, apparatus, and system for wireless object tracking", number: "US 11,340,345", year: "2022", category: "Object Tracking" },
  { title: "Method, apparatus, and system for outdoor target tracking", number: "US 11,397,258", year: "2022", category: "Object Tracking" },
  { title: "Method, apparatus, and system for wireless tracking with graph-based particle filtering", number: "US 11,500,056", year: "2022", category: "Object Tracking" },
  { title: "Method, apparatus, and system for qualified wireless sensing", number: "US 11,391,830", year: "2022", category: "Wireless Sensing" },
  { title: "Method, apparatus, and system for wireless inertial measurement", number: "US 10,866,302", year: "2020", category: "Wireless Sensing" },
  { title: "Method, apparatus, and system for wireless object scanning", number: "US 10,845,463", year: "2020", category: "Wireless Sensing" },
  { title: "Method, apparatus, and system for wireless material sensing", number: "US 11,181,486", year: "2021", category: "Wireless Sensing" },
  { title: "Method, apparatus, and system for wireless proximity sensing", number: "US 11,500,058", year: "2022", category: "Wireless Sensing" },
  { title: "Method, apparatus, and system for accurate wireless monitoring", number: "US 11,770,197", year: "2023", category: "Wireless Sensing" },
  { title: "Method, apparatus, and system for wireless monitoring with motion localization", number: "US App. 17/149,625", year: "2021", category: "Wireless Sensing" },
  { title: "Method, apparatus, and system for improving topology of wireless sensing systems", number: "US App. 16/909,913", year: "2020", category: "Wireless Sensing" },

  // Event Detection & Motion
  { title: "Method, apparatus, and systems for wireless event detection and monitoring", number: "US 10,380,881", year: "2019", category: "Event Detection" },
  { title: "Apparatus, systems and methods for event recognition based on a wireless signal", number: "US 10,374,863", year: "2019", category: "Event Detection" },
  { title: "Method, apparatus, and system for wireless motion monitoring", number: "US 10,291,460", year: "2019", category: "Motion Detection" },
  { title: "Method, apparatus, and system for wireless gait recognition", number: "US 11,928,894", year: "2024", category: "Motion Detection" },
  { title: "Method, apparatus, and system for fall-down detection based on a wireless signal", number: "US 11,531,087", year: "2022", category: "Fall Detection" },
  { title: "Apparatus, systems and methods for fall-down detection based on a wireless signal", number: "US 10,397,039", year: "2019", category: "Fall Detection" },

  // Vital Signs & Health
  { title: "Method, apparatus, server and system for real-time vital sign detection and monitoring", number: "US 10,495,725", year: "2019", category: "Vital Signs" },
  { title: "Method, apparatus, server and system for vital sign detection and monitoring", number: "US 10,735,298", year: "2020", category: "Vital Signs" },
  { title: "Methods, apparatus, servers, and systems for vital signs detection and monitoring", number: "US 11,012,285", year: "2021", category: "Vital Signs" },
  { title: "Method, apparatus, and system for vital signs monitoring using high frequency wireless signals", number: "US 11,408,978", year: "2022", category: "Vital Signs" },
  { title: "Method, apparatus, and system for wireless sleep monitoring", number: "US 11,439,344", year: "2022", category: "Sleep Monitoring" },
  { title: "Respiration monitoring based on noisy channel state information (CSI) data", number: "US 12,279,190", year: "2025", category: "Respiration" },
  { title: "Out-of-bed zone generation and monitoring associated with respiratory activity tracking", number: "US 11,925,447", year: "2024", category: "Respiration" },

  // People Counting & Vehicle
  { title: "Method, apparatus, and system for people counting and recognition based on rhythmic motion monitoring", number: "US 12,046,040", year: "2024", category: "People Counting" },
  { title: "Method, apparatus, and system for vehicle wireless monitoring", number: "US 12,036,948", year: "2024", category: "Vehicle" },
  { title: "Method, apparatus, and system for processing and presenting life log based on a wireless signal", number: "US 11,444,710", year: "2022", category: "Life Logging" },

  // Time-Reversal Technology
  { title: "Method, apparatus, server, and systems of time-reversal technology", number: "US 10,440,705", year: "2019", category: "Core Technology" },
];

const categories = Array.from(new Set(patents.map((p) => p.category)));

export default function Patents() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? patents : patents.slice(0, 8);

  return (
    <section id="patents" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Intellectual <span className="gradient-text">Property</span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">{patents.length}+</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">US Patents</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">{categories.length}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Technology Areas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">2019–2025</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Filing Period</p>
          </div>
        </div>

        {/* Category tags */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-500 border border-primary-500/20"
            >
              {cat} ({patents.filter((p) => p.category === cat).length})
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <AnimatePresence>
            {visible.map((patent, index) => (
              <motion.div
                key={patent.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="glass-card p-4 hover:shadow-md transition-shadow flex gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <HiDocumentText className="w-4 h-4 text-primary-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1 leading-relaxed line-clamp-2">
                    {patent.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-mono text-gray-500 dark:text-gray-400">
                      {patent.number}
                    </p>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-primary-500/70">{patent.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {patents.length > 8 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-400 transition-colors"
            >
              {showAll ? "Show less" : `Show all ${patents.length} patents`}
              <HiChevronDown
                className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
