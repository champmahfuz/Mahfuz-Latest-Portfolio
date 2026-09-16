"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Wrench,
  Check,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "databases" | "tools">("all");

  const categories = [
    { id: "all", label: "All Skills", icon: Sparkles },
    { id: "frontend", label: "Frontend", icon: Code },
    { id: "backend", label: "Backend & APIs", icon: Server },
    { id: "databases", label: "Databases", icon: Database },
    { id: "tools", label: "DevOps & Tools", icon: Wrench },
  ];

  const getFilteredSkills = () => {
    switch (activeTab) {
      case "frontend":
        return skills.frontend;
      case "backend":
        return skills.backend;
      case "databases":
        return skills.databases;
      case "tools":
        return skills.devopsAndTools;
      default:
        return [
          ...skills.frontend,
          ...skills.backend,
          ...skills.databases,
          ...skills.devopsAndTools,
        ];
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background neon ambient */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my programming languages, frameworks, state management tools, and developer workflows.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 scale-105"
                    : "glass-card text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          {getFilteredSkills().map((skill, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              key={skill.name}
              className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 border border-white/10 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-sky-400 border border-white/10 group-hover:border-sky-500/30 group-hover:scale-110 transition duration-300">
                  <Cpu className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-mono text-slate-400 group-hover:text-sky-300">
                  {skill.level}%
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition duration-200 mb-2">
                  {skill.name}
                </h4>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlighted Proficiency Summary */}
        <div className="mt-14 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="text-xs uppercase font-bold text-sky-400 tracking-wider">
              Primary Strengths
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Extensive focus on React JS, Next.js App Router, TypeScript, Redux, Node.js, Express, and MongoDB.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs uppercase font-bold text-indigo-400 tracking-wider">
              Design Systems & Styling
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Proficient in Tailwind CSS, Bootstrap, React Bootstrap, and Ant Design for rapid and responsive UI implementation.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
              Deployment & Tooling
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Hands-on with Git, GitHub version control, Vercel, Render, Netlify, Postman, and modern cloud ecosystems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
