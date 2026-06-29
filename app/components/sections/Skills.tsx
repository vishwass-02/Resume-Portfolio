"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "C++", level: 80 },
        { name: "C", level: 75 },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "Angular", level: 85 },
        { name: "React / Next.js", level: 70 },
      ],
    },
    {
      title: "Tools & Core CS",
      skills: [
        { name: "Git & VS Code", level: 95 },
        { name: "Bash", level: 80 },
        { name: "Data Structures", level: 85 },
        { name: "OOP", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Skills & Technologies" 
          subtitle="A comprehensive overview of my technical expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <GlassCard className="h-full p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-[#00c6ff] text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#0070f3] to-[#00c6ff] rounded-full relative"
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-[2px]" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
