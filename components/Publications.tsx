"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiExternalLink } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

const metrics = [
  { label: "Citations", value: "3,374+" },
  { label: "h-index", value: "34" },
  { label: "i10-index", value: "54" },
];

const topPapers = [
  {
    title: "mmTrack: Passive multi-person localization using commodity millimeter wave radio",
    authors: "C Wu, F Zhang, B Wang, KJR Liu",
    venue: "IEEE INFOCOM 2020",
    citations: 163,
  },
  {
    title: "TR-BREATH: Time-reversal breathing rate estimation and detection",
    authors: "C Chen, Y Han, Y Chen, HQ Lai, F Zhang, B Wang, KJR Liu",
    venue: "IEEE Trans. Biomedical Engineering, 2017",
    citations: 158,
  },
  {
    title: "SMARS: Sleep monitoring via ambient radio signals",
    authors: "F Zhang, C Wu, B Wang, M Wu, D Bugos, H Zhang, KJR Liu",
    venue: "IEEE Trans. Mobile Computing, 2021",
    citations: 155,
  },
  {
    title: "WiSpeed: A statistical electromagnetic approach for device-free indoor speed estimation",
    authors: "F Zhang, C Chen, B Wang, KJR Liu",
    venue: "IEEE Internet of Things Journal, 2018",
    citations: 151,
  },
  {
    title: "ViMo: Multiperson vital sign monitoring using commodity millimeter-wave radio",
    authors: "F Wang, F Zhang, C Wu, B Wang, KJR Liu",
    venue: "IEEE Internet of Things Journal, 2020",
    citations: 142,
  },
  {
    title: "Achieving centimeter-accuracy indoor localization on WiFi platforms: A multi-antenna approach",
    authors: "C Chen, Y Chen, Y Han, HQ Lai, F Zhang, KJR Liu",
    venue: "IEEE Internet of Things Journal, 2017",
    citations: 137,
  },
  {
    title: "The promise of radio analytics: A future paradigm of wireless positioning, tracking, and sensing",
    authors: "B Wang, Q Xu, C Chen, F Zhang, KJR Liu",
    venue: "IEEE Signal Processing Magazine, 2018",
    citations: 133,
  },
  {
    title: "GaitWay: Monitoring and recognizing gait speed through the walls",
    authors: "C Wu, F Zhang, Y Hu, KJR Liu",
    venue: "IEEE Trans. Mobile Computing, 2020",
    citations: 120,
  },
  {
    title: "WiDetect: Robust motion detection with a statistical electromagnetic model",
    authors: "F Zhang, C Wu, B Wang, HQ Lai, Y Han, KJ Liu",
    venue: "Proc. ACM IMWUT, 2019",
    citations: 120,
  },
  {
    title: "DeFall: Environment-independent passive fall detection using WiFi",
    authors: "Y Hu, F Zhang, C Wu, B Wang, KJR Liu",
    venue: "IEEE Internet of Things Journal, 2021",
    citations: 110,
  },
  {
    title: "mSense: Towards mobile material sensing with a single millimeter-wave radio",
    authors: "C Wu, F Zhang, B Wang, KJR Liu",
    venue: "Proc. ACM IMWUT, 2020",
    citations: 107,
  },
  {
    title: "mmEye: Super-resolution millimeter wave imaging",
    authors: "F Zhang, C Wu, B Wang, KJR Liu",
    venue: "IEEE Internet of Things Journal, 2020",
    citations: 93,
  },
  {
    title: "Respiration tracking for people counting and recognition",
    authors: "F Wang, F Zhang, C Wu, B Wang, KJR Liu",
    venue: "IEEE Internet of Things Journal, 2020",
    citations: 93,
  },
  {
    title: "RF-based inertial measurement",
    authors: "C Wu, F Zhang, Y Fan, KJR Liu",
    venue: "ACM SIGCOMM, 2019",
    citations: 80,
  },
  {
    title: "Wireless AI in smart car: How smart a car can be?",
    authors: "Q Xu, B Wang, F Zhang, DS Regani, F Wang, KJR Liu",
    venue: "IEEE Access, 2020",
    citations: 73,
  },
];

function highlightName(authors: string) {
  return authors.split(/(F Zhang|F\. Zhang)/).map((part, i) =>
    part === "F Zhang" || part === "F. Zhang" ? (
      <span key={i} className="font-semibold text-primary-500">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function Publications() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? topPapers : topPapers.slice(0, 6);

  return (
    <section id="publications" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Research <span className="gradient-text">Impact</span>
        </h2>

        {/* Metrics */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-3xl font-bold gradient-text">{m.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{m.label}</p>
            </div>
          ))}
          <a
            href="https://scholar.google.com/citations?user=mkEVonEAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary-500 hover:text-primary-400 transition-colors"
          >
            <FaGraduationCap className="w-4 h-4" />
            View Google Scholar Profile
            <HiExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Top Papers */}
        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Most-Cited Publications
        </h3>
        <div className="space-y-3">
          <AnimatePresence>
            {visible.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="glass-card p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-lg font-bold text-primary-500 bg-primary-500/10 px-3 py-1 rounded-lg flex-shrink-0 min-w-[52px] text-center">
                    {paper.citations}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1 leading-snug">
                      {paper.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-0.5">
                      {highlightName(paper.authors)}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                      {paper.venue}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {topPapers.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-400 transition-colors"
          >
            {showAll ? "Show less" : `Show all ${topPapers.length} top papers`}
            <HiChevronDown
              className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        )}

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
          69 total publications including journals, conferences, and patents.{" "}
          <a
            href="https://scholar.google.com/citations?user=mkEVonEAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:underline"
          >
            See full list on Google Scholar →
          </a>
        </p>
      </motion.div>
    </section>
  );
}
