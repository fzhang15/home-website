"use client";

import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";

const education = [
  {
    degree: "Ph.D. in Electrical & Computer Engineering",
    school: "University of Maryland, College Park",
    period: "Sep. 2014 – Dec. 2018",
    gpa: "GPA: 3.86/4.0",
    advisor: "Advisor: Prof. K.J. Ray Liu",
  },
  {
    degree: "M.E. in Communication & Information Systems",
    school: "University of Science and Technology of China",
    period: "Sep. 2011 – Aug. 2014",
    advisor: "Advisor: Prof. Wenyi Zhang",
  },
  {
    degree: "B.E. in Electronic Information Engineering",
    school: "University of Science and Technology of China",
    period: "Sep. 2007 – Aug. 2011",
    advisor: "Advisor: Prof. Wenyi Zhang",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                <HiAcademicCap className="w-6 h-6 text-primary-500" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                    {edu.period}
                  </span>
                </div>
                <p className="text-primary-500 font-medium mb-1">
                  {edu.school}
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                  {edu.gpa && <span>{edu.gpa}</span>}
                  <span>{edu.advisor}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
