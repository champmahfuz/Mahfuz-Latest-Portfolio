"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A track record of engineering scalable applications, collaborating with leadership, and solving complex technical challenges.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 md:ml-40 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline marker node */}
              <div
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-4 border-slate-950 flex items-center justify-center ${
                  exp.status === "current"
                    ? "bg-gradient-to-tr from-sky-400 to-indigo-500 text-white shadow-lg shadow-sky-500/40"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {exp.status === "current" ? (
                  <Sparkles className="w-3.5 h-3.5 text-white animate-spin-slow" />
                ) : (
                  <Briefcase className="w-3.5 h-3.5 text-slate-300" />
                )}
              </div>

              {/* Time pill for larger screens on the left */}
              <div className="hidden sm:block absolute -left-44 top-2 text-right w-32">
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-lg border ${
                    exp.status === "current"
                      ? "bg-sky-500/10 text-sky-300 border-sky-500/30"
                      : "bg-slate-900 text-slate-400 border-white/5"
                  }`}
                >
                  {exp.period}
                </span>
              </div>

              {/* Experience Details Card */}
              <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 space-y-5">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.status === "current" && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-2 text-xs sm:text-sm text-slate-300 font-medium">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 hover:underline transition"
                      >
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </a>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        {exp.location}
                      </span>
                      <span className="sm:hidden flex items-center gap-1.5 text-slate-400">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto text-xs px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300">
                    {exp.type}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                    Key Responsibilities & Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="pt-3 flex flex-wrap items-center gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/90 text-sky-300 border border-sky-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
