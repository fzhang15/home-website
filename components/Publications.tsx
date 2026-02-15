"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiStar } from "react-icons/hi";

const journalPapers = [
  {
    id: "J1",
    authors: "F. Zhang, W. Zhang, and Q. Ling",
    title: "Non-Cooperative Game for Capacity Offload",
    venue: "IEEE Transactions on Wireless Communications",
    detail: "Vol. 11, No. 4, pp. 1565-1575, April 2012",
  },
  {
    id: "J2",
    authors: "F. Zhang, C. Chen, B. Wang, and K. J. Ray Liu",
    title: "WiSpeed: A Statistical Electromagnetic Approach for Device-Free Indoor Speed Estimation",
    venue: "IEEE Internet of Things",
    detail: "Vol. 5, No. 3, pp. 2163-2177, April 2018",
    award: "Best Paper Award",
  },
  {
    id: "J3",
    authors: "F. Zhang, C. Chen, B. Wang, H. Lai, Y. Han, and K. J. Ray Liu",
    title: "WiBall: A Time-Reversal Focusing Ball Method for Decimeter-Accuracy Indoor Tracking",
    venue: "IEEE Internet of Things Journal",
    detail: "Vol. 5, No. 5, pp. 4031-4041, October 2018",
  },
  {
    id: "J4",
    authors: "F. Zhang, C. Chen, B. Wang, H. Lai, Y. Han, and K. J. Ray Liu",
    title: "WiDetect: Robust Motion Detection with a Statistical Electromagnetic Model",
    venue: "Proc. of ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",
    detail: "Article No.: 122, September 2019",
  },
  {
    id: "J5",
    authors: "F. Zhang, W. Wu, B. Wang, M. Wu, D. Bugos, H. Zhang, and K. J. Ray Liu",
    title: "SMARS: Sleep Monitoring via Ambient Radio Signals",
    venue: "IEEE Transactions on Mobile Computing",
    detail: "Vol. 20, No. 1, pp. 217-231, January 2021",
  },
  {
    id: "J6",
    authors: "C. Wu, F. Zhang, B. Wang, and K. J. Ray Liu",
    title: "EasiTrack: Decimeter-Level Indoor Tracking with Graph-based Particle Filtering",
    venue: "IEEE Internet of Things Journal",
    detail: "Vol. 7, No. 3, pp. 2397-2411, March 2020",
  },
  {
    id: "J7",
    authors: "C. Wu, F. Zhang, Y. Hu, and K. J. Ray Liu",
    title: "GaitWay: Monitoring and Recognizing Gait Through the Walls",
    venue: "IEEE Transactions on Mobile Computing",
    detail: "February 2020 (Early Access)",
  },
  {
    id: "J8",
    authors: "F. Wang, F. Zhang, C. Wu, B. Wang, and K. J. Ray Liu",
    title: "ViMo: Multi-person Vital Sign Monitoring using Commodity Millimeter Wave Radio",
    venue: "IEEE Internet of Things Journal",
    detail: "Vol. 8, No. 3, pp. 1294-1307, February 2021",
  },
  {
    id: "J9",
    authors: "F. Wang, F. Zhang, C. Wu, B. Wang, and K. J. Ray Liu",
    title: "Respiration Tracking for People Counting and Recognition",
    venue: "IEEE Internet of Things Journal",
    detail: "Vol. 7, No. 6, pp. 5233-5245, June 2020",
  },
  {
    id: "J10",
    authors: "C. Wu, F. Zhang, B. Wang, and K.J.R. Liu",
    title: "mSense: Towards Mobile Material Sensing with a Single Millimeter Radio",
    venue: "Proc. of ACM IMWUT",
    detail: "Vol. 4, No. 3, Article 106:1-20, September 2020",
  },
  {
    id: "J11",
    authors: "F. Zhang, C. Wu, B. Wang, and K. J. Ray Liu",
    title: "mmEye: Super-Resolution Millimeter Wave Imaging",
    venue: "IEEE Internet of Things Journal",
    detail: "Vol. 8, No. 8, pp. 6995-7008, November 2020",
  },
];

const conferencePapers = [
  {
    id: "C1",
    authors: "F. Zhang, C. Chen, B. Wang, H. Lai, and K. J. Ray Liu",
    title: "A Time-Reversal Spatial Hardening Effect for Indoor Speed Estimation",
    venue: "IEEE ICASSP",
    detail: "New Orleans, US, March 2017",
  },
  {
    id: "C2",
    authors: "F. Zhang, C. Chen, B. Wang, H. Lai, H. Lai, Y. Han, and K. J. Ray Liu",
    title: "WiDetect: A Robust and Low-Complexity Wireless Motion Detector",
    venue: "IEEE ICASSP",
    detail: "Calgary, Canada, April 2018",
  },
  {
    id: "C3",
    authors: "C. Wu, F. Zhang, Y. Fan, and K. J. Ray Liu",
    title: "RF-based Inertial Measurement",
    venue: "ACM SIGCOMM",
    detail: "August 2019",
  },
  {
    id: "C4",
    authors: "C. Wu, F. Zhang, B. Wang, and K. J. Ray Liu",
    title: "mmTrack: Passive Multi-Person Localization Using Commodity Millimeter Wave Radio",
    venue: "IEEE INFOCOM",
    detail: "2020",
  },
];

function highlightName(authors: string) {
  return authors.split(/(F\. Zhang)/).map((part, i) =>
    part === "F. Zhang" ? (
      <span key={i} className="font-semibold text-primary-500">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function Publications() {
  const [showAllJournal, setShowAllJournal] = useState(false);
  const [showConference, setShowConference] = useState(false);

  const visibleJournal = showAllJournal ? journalPapers : journalPapers.slice(0, 5);

  return (
    <section id="publications" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Selected <span className="gradient-text">Publications</span>
        </h2>

        {/* Journal Papers */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Journal Papers
          </h3>
          <div className="space-y-4">
            <AnimatePresence>
              {visibleJournal.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass-card p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-primary-500 bg-primary-500/10 px-2 py-1 rounded mt-0.5 flex-shrink-0">
                      {paper.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {highlightName(paper.authors)}
                      </p>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        &ldquo;{paper.title}&rdquo;
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                        {paper.venue}, {paper.detail}
                      </p>
                      {paper.award && (
                        <span className="inline-flex items-center gap-1 mt-2 px-2.5 py-1 text-xs font-medium rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                          <HiStar className="w-3 h-3" />
                          {paper.award}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {journalPapers.length > 5 && (
            <button
              onClick={() => setShowAllJournal(!showAllJournal)}
              className="mt-4 inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-400 transition-colors"
            >
              {showAllJournal ? "Show less" : `Show all ${journalPapers.length} papers`}
              <HiChevronDown
                className={`w-4 h-4 transition-transform ${showAllJournal ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </div>

        {/* Conference Papers */}
        <div>
          <button
            onClick={() => setShowConference(!showConference)}
            className="flex items-center gap-2 text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            Conference Papers
            <HiChevronDown
              className={`w-5 h-5 transition-transform ${showConference ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {showConference && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4 overflow-hidden"
              >
                {conferencePapers.map((paper, index) => (
                  <motion.div
                    key={paper.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="glass-card p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-mono font-bold text-primary-500 bg-primary-500/10 px-2 py-1 rounded mt-0.5 flex-shrink-0">
                        {paper.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          {highlightName(paper.authors)}
                        </p>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                          &ldquo;{paper.title}&rdquo;
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                          {paper.venue}, {paper.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
