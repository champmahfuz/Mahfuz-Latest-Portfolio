"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  Compass,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Education() {
  const { education, extracurricular } = portfolioData;

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Leadership</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Foundational computer science degree and leadership activities in Air Rover Scouting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Education Cards (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-sky-400" />
              <span>Academic Degrees</span>
            </h3>

            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {edu.degree}
                  </h4>
                  <span className="self-start sm:self-auto text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-sky-300">
                    {edu.result}
                  </span>
                </div>

                <div className="text-sm font-semibold text-sky-400 mb-2">
                  {edu.institution}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {edu.year}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                    {edu.field}
                  </span>
                </div>

                {edu.details && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/5">
                    {edu.details}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column: Scouting Leadership (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Compass className="w-6 h-6 text-emerald-400" />
              <span>Co-Curricular</span>
            </h3>

            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 space-y-5 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-sm">
                <Award className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                  Base ID: {extracurricular.baseId}
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  {extracurricular.role}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                  {extracurricular.organization}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-white/5">
                {extracurricular.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 text-xs text-slate-400 leading-relaxed">
                Scouting inculcated core values of resilience, proactive leadership, disciplined execution, and collaborative teamwork.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
