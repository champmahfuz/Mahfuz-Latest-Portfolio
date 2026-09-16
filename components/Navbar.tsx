"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, Code } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            window.history.replaceState(null, "", "#hero");
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="group flex cursor-pointer items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white focus:outline-none"
          aria-label="Go to home"
        >
          <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition duration-300">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="flex items-center gap-1">
            <span>Mahfuz</span>
            <span className="text-sky-400">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? "text-sky-400 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-sky-500/10 border border-sky-500/30 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={portfolioData.personal.cvDownloadUrl}
            download="Mahfuz_Rahman_CV.pdf"
            className="flex items-center gap-2 text-xs sm:text-sm font-medium px-4 py-2 rounded-xl bg-linear-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-md shadow-sky-500/25 transition-all duration-300 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileDown className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={portfolioData.personal.cvDownloadUrl}
            download="Mahfuz_Rahman_CV.pdf"
            className="flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 border-b border-white/10 backdrop-blur-xl overflow-hidden px-4 py-5 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition duration-200 ${
                    activeSection === item.href.substring(1)
                      ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                <a
                  href={portfolioData.personal.cvDownloadUrl}
                  download="Mahfuz_Rahman_CV.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-linear-to-r from-sky-500 to-indigo-600 text-white text-sm font-medium shadow-md"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Full CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
