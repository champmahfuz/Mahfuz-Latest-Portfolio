"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Code2, Terminal, User } from "lucide-react";

interface AvatarPlaceholderProps {
  imageSrc?: string;
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function AvatarPlaceholder({
  imageSrc = "/profile.jpg",
  name,
  size = "lg",
}: AvatarPlaceholderProps) {
  const [imageError, setImageError] = useState(false);

  const dimensions = {
    sm: "w-16 h-16",
    md: "w-28 h-28",
    lg: "w-48 h-48 sm:w-64 sm:h-64",
    xl: "w-64 h-64 sm:w-80 sm:h-80",
  }[size];

  const imageSizes = {
    sm: "64px",
    md: "112px",
    lg: "(min-width: 640px) 256px, 192px",
    xl: "(min-width: 640px) 320px, 256px",
  }[size];

  return (
    <div className="relative group flex items-center justify-center">
      {/* Outer ambient glow circles */}
      <div className="absolute -inset-2 bg-linear-to-r from-sky-500/30 via-indigo-500/30 to-purple-500/30 rounded-full blur-xl group-hover:blur-2xl transition duration-700 animate-pulse-slow pointer-events-none" />
      <div className="absolute -inset-0.5 bg-linear-to-tr from-sky-400 via-indigo-500 to-emerald-400 rounded-full opacity-60 group-hover:opacity-100 transition duration-500 blur-sm" />

      {/* Main Avatar Container */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className={`relative ${dimensions} rounded-full p-1.5 bg-slate-950/90 backdrop-blur-md shadow-2xl border border-white/10 overflow-hidden flex items-center justify-center`}
      >
        {!imageError ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes={imageSizes}
            className="object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          /* Sleek Illustrated Tech Avatar Fallback */
          <div className="w-full h-full rounded-full bg-linear-to-br from-slate-900 via-slate-800 to-indigo-950 flex flex-col items-center justify-center text-slate-300 relative overflow-hidden border border-slate-700/50 select-none">
            {/* Background geometric grid elements */}
            <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] bg-size-[12px_12px] opacity-20" />
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-sky-500/20 rounded-full blur-lg" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-500/20 rounded-full blur-lg" />

            {/* Avatar Stylized Silhouette / Icon */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-1 text-center px-2">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-linear-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-inner">
                <User className="w-8 h-8 sm:w-11 sm:h-11 text-sky-300" />
              </div>
              <div className="font-semibold text-xs sm:text-sm text-slate-200 tracking-wide mt-1">
                {name.split(" ")[0]} {name.split(" ")[1] || ""}
              </div>
              <div className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-sky-400 font-mono">
                <Code2 className="w-3 h-3" />
                <span>Full Stack Dev</span>
              </div>
            </div>

            {/* Code Corner Badge */}
            <div className="absolute bottom-2 right-4 bg-slate-900/80 border border-sky-500/30 px-2 py-0.5 rounded-full text-[9px] text-sky-300 font-mono flex items-center gap-1 backdrop-blur-sm">
              <Terminal className="w-2.5 h-2.5 text-sky-400" />
              <span>Next.js</span>
            </div>
          </div>
        )}
      </motion.div>

      {/* Floating Status Pill */}
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute -bottom-2 sm:-bottom-3 bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-[11px] sm:text-xs font-medium px-3 sm:px-4 py-1 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5 z-20"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span>Available for Work</span>
      </motion.div>

      {/* Floating Floating Icon Badges */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-2 -left-2 sm:-left-3 bg-slate-900/90 border border-sky-500/40 text-sky-400 p-2 sm:p-2.5 rounded-xl shadow-lg backdrop-blur-md hidden sm:flex items-center justify-center z-20"
        title="4+ Years Experience"
      >
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -top-1 -right-2 sm:-right-3 bg-slate-900/90 border border-indigo-500/40 text-indigo-400 p-2 sm:p-2.5 rounded-xl shadow-lg backdrop-blur-md hidden sm:flex items-center justify-center z-20"
        title="Full Stack Engineer"
      >
        <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
      </motion.div>
    </div>
  );
}
