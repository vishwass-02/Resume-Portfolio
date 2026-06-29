"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Artificial Intelligence Intern",
      company: "iStudio",
      duration: "June 2026 - Present",
      location: "Remote / Hybrid",
      description: "Selected through the Internship Common Aptitude Test (iCAT). Engaging in comprehensive training sessions designed to develop essential skills in AI, working towards a final project submission.",
      status: "Current"
    },
    {
      id: 2,
      role: "Software Developer Intern",
      company: "Athene AI",
      duration: "April 2026 - June 2026",
      location: "Bengaluru, Karnataka",
      description: "Successfully completed a 2-month hybrid internship. Demonstrated technical proficiency and collaborative spirit while consistently meeting assigned milestones and development responsibilities.",
      status: "Completed"
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey and internships."
        />

        <div className="max-w-4xl mx-auto relative mt-12">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0070f3] via-[#00c6ff] to-transparent md:-translate-x-1/2 opacity-30" />

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex flex-col md:flex-row items-center justify-between w-full mb-12">
              {/* Alternate Sides */}
              {index % 2 === 0 ? (
                <>
                  {/* Left Side Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="w-full md:w-5/12 pl-20 md:pl-0 md:pr-12 md:text-right flex flex-col md:items-end"
                  >
                    <GlassCard className="relative p-6 md:p-8 border-r-0 md:border-r-4 md:border-l-0 border-l-4 border-[#0070f3] w-full text-left md:text-right">
                      <div className="flex items-start md:items-center justify-start md:justify-end gap-3 mb-3 text-[#00c6ff] flex-row-reverse md:flex-row">
                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                          {exp.role}
                        </h3>
                        <Briefcase className="w-6 h-6 shrink-0 mt-1 md:mt-0" />
                      </div>
                      
                      <h4 className="text-lg font-medium text-gray-300 mb-5">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-col md:items-end gap-3 text-sm text-gray-400 mb-5">
                        <div className="flex items-center gap-2 flex-row-reverse md:flex-row">
                          <span>{exp.duration}</span>
                          <Calendar className="w-4 h-4 text-[#0070f3]" />
                        </div>
                        <div className="flex items-center gap-2 flex-row-reverse md:flex-row">
                          <span>{exp.location}</span>
                          <MapPin className="w-4 h-4 text-[#0070f3]" />
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="inline-block px-4 py-1.5 rounded-full bg-[#0070f3]/10 border border-[#0070f3]/30 text-[#00c6ff] text-xs font-medium">
                        {exp.status}
                      </div>
                    </GlassCard>
                  </motion.div>

                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050505] border-2 border-[#0070f3] z-10 flex items-center justify-center shadow-[0_0_15px_rgba(0,112,243,0.5)]">
                    <div className="w-3 h-3 rounded-full bg-[#00c6ff]" />
                  </div>

                  {/* Empty Right Side */}
                  <div className="hidden md:block w-5/12" />
                </>
              ) : (
                <>
                  {/* Empty Left Side */}
                  <div className="hidden md:block w-5/12" />

                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050505] border-2 border-[#0070f3] z-10 flex items-center justify-center shadow-[0_0_15px_rgba(0,112,243,0.5)]">
                    <div className="w-3 h-3 rounded-full bg-[#00c6ff]" />
                  </div>

                  {/* Right Side Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="w-full pl-20 md:w-5/12 md:pl-12"
                  >
                    <GlassCard className="relative p-6 md:p-8 border-l-4 border-[#0070f3] w-full">
                      <div className="flex items-start md:items-center gap-3 mb-3 text-[#00c6ff]">
                        <Briefcase className="w-6 h-6 shrink-0 mt-1 md:mt-0" />
                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                          {exp.role}
                        </h3>
                      </div>
                      
                      <h4 className="text-lg font-medium text-gray-300 mb-5">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-col gap-3 text-sm text-gray-400 mb-5">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#0070f3]" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#0070f3]" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="inline-block px-4 py-1.5 rounded-full bg-[#0070f3]/10 border border-[#0070f3]/30 text-[#00c6ff] text-xs font-medium">
                        {exp.status}
                      </div>
                    </GlassCard>
                  </motion.div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
