"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and current studies."
        />

        <div className="max-w-4xl mx-auto relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0070f3] via-[#00c6ff] to-transparent md:-translate-x-1/2 opacity-30" />

          {/* Timeline Item */}
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-12">
            {/* Left side empty for alternating layout */}
            <div className="hidden md:block w-5/12" />

            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050505] border-2 border-[#0070f3] z-10 flex items-center justify-center shadow-[0_0_15px_rgba(0,112,243,0.5)]">
              <div className="w-3 h-3 rounded-full bg-[#00c6ff]" />
            </div>

            {/* Content Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full pl-20 md:w-5/12 md:pl-0"
            >
              <GlassCard className="relative p-6 md:p-8 border-l-4 border-l-[#0070f3]">
                <div className="flex items-start md:items-center gap-3 mb-3 text-[#00c6ff]">
                  <GraduationCap className="w-6 h-6 shrink-0 mt-1 md:mt-0" />
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    Christ (Deemed to be University)
                  </h3>
                </div>
                
                <h4 className="text-lg font-medium text-gray-300 mb-5">
                  B.Tech in Artificial Intelligence and Machine Learning
                </h4>
                
                <div className="flex flex-col gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#0070f3]" />
                    <span>April 2024 - Current</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#0070f3]" />
                    <span>Bengaluru, Karnataka</span>
                  </div>
                </div>

                <div className="mt-6 inline-block px-4 py-1.5 rounded-full bg-[#0070f3]/10 border border-[#0070f3]/30 text-[#00c6ff] text-sm font-medium">
                  Current Student
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
