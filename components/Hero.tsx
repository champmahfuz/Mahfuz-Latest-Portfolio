"use client";

import { motion } from "framer-motion";
import {
  FileDown,
  Mail,
  Phone,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "./SocialIcons";
import AvatarPlaceholder from "./AvatarPlaceholder";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = portfolioData;

  const techBadges = [
    "Next.js 15",
    "React.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "REST APIs",
    "JWT Auth",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] scroll-mt-24 flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Decorative Neon Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-137.5 sm:w-187.5 h-87.5 bg-linear-to-tr from-sky-600/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 text-xs sm:text-sm font-medium text-sky-300 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-time Roles & Contracts</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-semibold text-slate-400 uppercase tracking-widest">
                Hello, I am
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                <span className="text-gradient">{personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-gradient-cyan pt-1">
                {personal.title} & Solution Architect
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Passionate Web Application Developer with around{" "}
              <strong className="text-sky-300 font-semibold">
                4 years of experience
              </strong>{" "}
              crafting pixel-perfect, scalable, and user-centric web
              applications using cutting-edge technologies like{" "}
              <span className="text-white font-medium">React JS</span>,{" "}
              <span className="text-white font-medium">Next.js</span>, and{" "}
              <span className="text-white font-medium">Node.js</span>.
            </p>

            {/* Quick Meta Location & Contact preview */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-400" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-indigo-400" />
                {personal.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-400" />
                {personal.phone}
              </span>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition duration-300 w-full sm:w-auto"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.cvDownloadUrl}
                download="Mahfuz_Rahman_CV.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm sm:text-base hover:border-sky-500/40 transition duration-300 w-full sm:w-auto shadow-md"
              >
                <FileDown className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-sm sm:text-base border border-white/5 hover:text-white transition duration-300 w-full sm:w-auto"
              >
                <span>View Projects</span>
              </a>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center gap-3 pt-3">
              <span className="text-xs text-slate-400 font-medium mr-1">
                Find me on:
              </span>
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-950/40 transition duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 hover:bg-slate-800 transition duration-200"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-950/40 transition duration-200"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Direct Email"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-950/40 transition duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Avatar Placeholder & Highlight Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            {/* Avatar Placeholder */}
            <div className="relative mb-8">
              <AvatarPlaceholder
                imageSrc={personal.avatar}
                name={personal.name}
                size="lg"
              />
            </div>

            {/* Quick Skills / Experience highlights in a neat glass card */}
            <div className="w-full max-w-sm glass-card rounded-2xl p-5 border border-white/10 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Career Highlights
                </span>
                <span className="text-xs text-sky-400 font-mono">
                  4+ Yrs Exp
                </span>
              </div>
              <div className="space-y-2.5 pt-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Symbolic Team (Current Full Stack Developer)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>3.5+ Yrs at Othooy International Ltd</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Flight Booking OTA & E-Commerce Architect</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Marquee / Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold shrink-0">
              Core Tech Stack:
            </span>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/80 border border-white/10 text-slate-300 hover:text-sky-300 hover:border-sky-500/30 transition duration-200 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
