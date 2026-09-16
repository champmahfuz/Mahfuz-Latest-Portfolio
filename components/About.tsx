"use client";

import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Zap,
  Users,
  CheckCircle2,
  Download,
  Terminal,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Code,
      title: "Full Stack Engineering",
      description:
        "Building end-to-end web applications with seamless frontend UI and rock-solid Node.js/Express and Next.js backend services.",
    },
    {
      icon: Layers,
      title: "Clean Architecture",
      description:
        "Structuring modular, maintainable, and type-safe codebases utilizing modern patterns, REST APIs, and database indexing.",
    },
    {
      icon: Zap,
      title: "Performance & UX",
      description:
        "Delivering pixel-perfect, lightning-fast interfaces that maximize user satisfaction and conversion rates across all devices.",
    },
    {
      icon: Users,
      title: "Leadership & Collaboration",
      description:
        "Proven experience working directly alongside CTOs, DevOps engineers, and cross-functional squads to execute complex technical roadmaps.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Transforming Ideas into High-Performance <span className="text-gradient-cyan">Web Experiences</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Dedicated Full Stack Web Developer based in Dhaka, Bangladesh with an unwavering focus on reliability, scalability, and code excellence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {personal.metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card glass-card-hover rounded-2xl p-6 text-center border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-sky-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-2">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two Column Narrative & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Story & Philosophy (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-card rounded-3xl p-8 border border-white/10 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-6 h-6 text-sky-400" />
              <span>My Journey & Philosophy</span>
            </h3>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              With around <strong>4 years of dedicated industry experience</strong>, I have contributed to large-scale products ranging from full-fledged flight booking travel portals (OTA) to e-commerce stores and internal monitoring systems.
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Currently at <strong>Symbolic Team</strong>, I collaborate directly with leadership and the CTO to define product architecture, analyze technical feasibility, and conduct cutting-edge technology research. Previously at <strong>Othooy International Ltd</strong> for 3.5 years, I specialized in data visualization dashboards and cloud deployment tools.
            </p>

            <div className="pt-2 space-y-2.5 border-t border-white/10">
              <div className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                What I Bring to the Table:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Full Lifecycle Web Development
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Scalable REST API Architecture
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Payment Gateway Integration
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Real-time Data & State Mgmt
                </span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={personal.cvDownloadUrl}
                download="Mahfuz_Rahman_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 text-sm font-semibold transition duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download Official CV (PDF)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{pillar.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
