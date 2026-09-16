import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 selection:bg-sky-500 selection:text-slate-950 font-sans">
      {/* Navigation */}
      <Navbar />

      <main className="relative z-10 flex flex-col">
        {/* Hero Section with Avatar Placeholder */}
        <Hero />

        {/* About Section & Core Pillars */}
        <About />

        {/* Experience Timeline */}
        <Experience />

        {/* Featured Projects */}
        <Projects />

        {/* Skills & Technologies Matrix */}
        <Skills />

        {/* Education & Scouting Extracurricular */}
        <Education />

        {/* Contact Form & Quick Reachout */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
