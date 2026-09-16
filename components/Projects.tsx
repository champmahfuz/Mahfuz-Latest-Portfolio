"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Plane,
  ShoppingBag,
  Activity,
  Layers,
  CheckCircle,
  X,
  Lock,
  ArrowUpRight,
  ShieldCheck,
  Unlock,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { portfolioData, Project } from "@/data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "othooy-ota":
        return <Plane className="w-6 h-6 text-sky-400" />;
      case "bengalio-ecommerce":
      case "othooy-eshop":
        return <ShoppingBag className="w-6 h-6 text-indigo-400" />;
      case "node-monitoring-dashboard":
        return <Activity className="w-6 h-6 text-emerald-400" />;
      default:
        return <Layers className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production & Enterprise <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            High-impact web platforms engineered for performance, security, and scalability.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              {/* Subtle top card accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 opacity-60 group-hover:opacity-100 transition duration-300" />

              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-md group-hover:scale-105 transition duration-300">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-slate-900/90 text-sky-400 border border-sky-500/20">
                    {project.badge || project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition duration-200 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition duration-200 text-sky-400" />
                </h3>
                <p className="text-xs text-sky-400/90 font-medium mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlight Features snippet */}
                <div className="space-y-1.5 mb-5">
                  {project.features.slice(0, 2).map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2 text-xs text-slate-400"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech Tags & Notice */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-900 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] text-slate-400">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1 text-[11px] text-slate-400">
                    {project.confidentialNotice ? (
                      <>
                        <Lock className="w-3 h-3 text-amber-400" />
                        <span>Company Project</span>
                      </>
                    ) : (
                      <>
                        <Unlock className="w-3 h-3 text-emerald-400" />
                        <span>Personal Project</span>
                      </>
                    )}
                  </span>
                  <span className="text-sky-400 font-semibold group-hover:underline">
                    View Case Details &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-slate-900/95 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-slate-400">Role: {selectedProject.role}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-sky-300 font-medium mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedProject.description}
              </div>

              {/* Key Features Breakdown */}
              <div className="space-y-3 bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-white/5">
                <h4 className="text-xs uppercase tracking-wider font-bold text-sky-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Key Features & System Capabilities:
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Matrix */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-sky-300 border border-sky-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Confidentiality Notice */}
              {selectedProject.confidentialNotice && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
                  <Lock className="w-4 h-4 shrink-0" />
                  <span>{selectedProject.confidentialNotice}</span>
                </div>
              )}

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap justify-end gap-3">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition"
                  >
                    Source Code
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-sm font-semibold transition"
                  >
                    Visit Live Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
