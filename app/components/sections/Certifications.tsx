"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { Award, ShieldCheck } from "lucide-react";

export const Certifications = () => {
  const certs = [
    {
      title: "Artificial Intelligence and Machine Learning in Materials Engineering",
      issuer: "NPTEL",
      icon: <Award className="text-[#00c6ff] w-8 h-8" />
    },
    {
      title: "Essentials of Cloud Computing",
      issuer: "Infosys Springboard",
      icon: <ShieldCheck className="text-[#0070f3] w-8 h-8" />
    },
    {
      title: "Introduction to Data Science",
      issuer: "CISCO Networking Academy",
      icon: <Award className="text-[#00c6ff] w-8 h-8" />
    }
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Certifications" 
          subtitle="Professional qualifications and continuous learning achievements."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <GlassCard className="h-full flex flex-col items-center text-center p-8 group">
                <div className="p-4 bg-white/5 rounded-full border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(0,112,243,0.1)] group-hover:shadow-[0_0_20px_rgba(0,112,243,0.3)]">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-xs font-medium text-[#00c6ff] mt-auto pt-4 uppercase tracking-wider">{cert.issuer}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
