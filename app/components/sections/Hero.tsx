"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../ui/TypewriterEffect";
import { MagneticButton } from "../ui/MagneticButton";
import { Download, FolderKanban, Mail, ArrowRight } from "lucide-react";

export const Hero = () => {
  const roles = [
    "AI Engineer",
    "Machine Learning Developer",
    "Software Engineer",
    "Python Developer",
    "Open Source Enthusiast",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#0070f3]/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-2">Hi, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-4 text-white">
              Vishwas S
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center md:justify-start"
          >
            <TypewriterEffect words={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed"
          >
            Second year B.Tech student in Artificial Intelligence and Machine Learning with hands-on project experience in Python development and web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
          >
            <MagneticButton variant="primary" onClick={() => window.open("/resume.pdf", "_blank")}>
              <Download size={18} /> Download Resume
            </MagneticButton>
            <MagneticButton variant="outline" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              <FolderKanban size={18} /> View Projects
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              <Mail size={18} /> Hire Me
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="w-full md:w-2/5 flex justify-center"
        >
          <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(0,112,243,0.2)] hover:shadow-[0_0_80px_rgba(0,112,243,0.4)] transition-shadow duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0070f3]/30 to-transparent mix-blend-overlay z-10" />
            <img 
              src="/image.png" 
              alt="Vishwas S"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowRight size={18} className="text-[#0070f3] rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
};
