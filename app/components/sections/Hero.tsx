"use client";

import React from "react";
import { motion } from "framer-motion";
import { BlurText } from "../ui/BlurText";
import { FadingVideo } from "../ui/FadingVideo";
import { TypewriterEffect } from "../ui/TypewriterEffect";
import { Download, FolderKanban, Mail, ArrowRight } from "lucide-react";

export const Hero = () => {
  const roles = [
    "AI Engineer",
    "Machine Learning Developer",
    "Software Engineer",
    "Python Developer",
    "Open Source Enthusiast",
  ];

  const sharedMotionProps = {
    initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
    whileInView: { filter: 'blur(0px)', opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.8, ease: 'easeOut' }
  } as const;

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Cinematic Video Background */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '120%', height: '120%' }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-20">
        
        {/* Left Side: Text and CTAs */}
        <div className="w-full md:w-3/5 text-center md:text-left flex flex-col items-center md:items-start space-y-6">
          <motion.div
            {...sharedMotionProps}
            className="liquid-glass rounded-full flex items-center gap-2 px-1 pr-4 py-1 mb-2 border border-white/5"
          >
            <span className="bg-white text-black text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Available</span>
            <span className="text-xs md:text-sm font-body text-white/80">Seeking Software Development Internships</span>
          </motion.div>

          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl md:text-2xl font-medium text-white/60 mb-2">Hi, I'm</h2>
            <BlurText 
              text="Vishwas S"
              className="text-6xl md:text-[5.5rem] font-bold text-white leading-[0.8] tracking-tight mb-4"
            />
          </div>

          <motion.div
            {...sharedMotionProps}
            transition={{ ...sharedMotionProps.transition, delay: 0.4 }}
            className="flex items-center justify-center md:justify-start text-xl md:text-2xl font-medium text-white/80"
          >
            <TypewriterEffect words={roles} />
          </motion.div>

          <motion.p
            {...sharedMotionProps}
            transition={{ ...sharedMotionProps.transition, delay: 0.6 }}
            className="text-white/70 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed font-light"
          >
            Second year B.Tech student in Artificial Intelligence and Machine Learning with hands-on project experience in Python development and web applications.
          </motion.p>

          <motion.div
            {...sharedMotionProps}
            transition={{ ...sharedMotionProps.transition, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
          >
            <button 
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-white font-medium hover:bg-white/10 transition-colors"
            >
              <Download size={18} /> Download Resume
            </button>
            <button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-2 text-white/90 font-medium hover:text-white hover:bg-white/5 transition-colors border border-white/10"
            >
              <FolderKanban size={18} /> View Projects
            </button>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-2 text-white/90 font-medium hover:text-white hover:bg-white/5 transition-colors border border-white/10"
            >
              <Mail size={18} /> Hire Me
            </button>
          </motion.div>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, type: "spring", delay: 0.5 }}
          className="w-full md:w-2/5 flex justify-center"
        >
          <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden liquid-glass-strong p-1">
            <img 
              src="/image.png" 
              alt="Vishwas S"
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 text-white/60 hover:text-white transition-colors"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowRight size={18} className="rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
};
