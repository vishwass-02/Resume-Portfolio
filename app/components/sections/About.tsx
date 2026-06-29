"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { Brain, Code2, Lightbulb, Rocket } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6 text-[#0070f3]" />,
      title: "Passion for AI",
      desc: "Deeply interested in Artificial Intelligence, Machine Learning, and their real-world applications."
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#00c6ff]" />,
      title: "Software Development",
      desc: "Building robust, scalable full-stack applications with modern technologies like React and Python."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#0070f3]" />,
      title: "Problem Solving",
      desc: "Approaching complex challenges with analytical thinking and data-driven solutions."
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#00c6ff]" />,
      title: "Continuous Learning",
      desc: "Always eager to learn new technologies and build real-world products that make an impact."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="A brief introduction to who I am and what drives me."
        />

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              I am an <span className="text-white font-medium">Artificial Intelligence and Machine Learning student</span> at Christ University. 
              My journey in tech is driven by an insatiable curiosity for how intelligent systems can solve complex, real-world problems.
            </p>
            <p>
              With hands-on experience in <span className="text-white font-medium">Python development</span>, data structures, and building web applications using modern frameworks, 
              I strive to bridge the gap between AI research and practical software solutions. 
            </p>
            <p>
              Whether it's developing an autonomous sensor car or an AI-powered appliance repair assistant, 
              I am committed to <span className="text-[#0070f3] font-medium">continuous learning</span> and building products that make a tangible difference.
            </p>
          </motion.div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col items-start gap-4 p-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
