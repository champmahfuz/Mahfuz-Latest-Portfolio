"use client";

import { ArrowUp, Code } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "./SocialIcons";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-md relative z-10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white">
              <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span>{personal.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              {personal.title} crafting high-performance, pixel-perfect web
              experiences.
            </p>
          </div>

          {/* Nav quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-medium">
            <a href="#about" className="hover:text-sky-400 transition">
              About
            </a>
            <a href="#experience" className="hover:text-sky-400 transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-sky-400 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-sky-400 transition">
              Skills
            </a>
            <a href="#education" className="hover:text-sky-400 transition">
              Education
            </a>
            <a href="#contact" className="hover:text-sky-400 transition">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 hover:bg-sky-500/30 transition shadow-sm"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Md Mahfuz Rahman. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Built with Next.js 15, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
