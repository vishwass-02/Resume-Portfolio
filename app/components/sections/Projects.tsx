"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { Github, ExternalLink, Info, X } from "lucide-react";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);
import { MagneticButton } from "../ui/MagneticButton";

const projectsData = [
  {
    id: 1,
    title: "Fix Lens",
    subtitle: "AI-Powered Appliance Repair Assistant",
    description: "An AI-driven application that diagnoses home appliance issues using text and image analysis, providing step-by-step repair guidance, tool requirements, and cost estimates.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "AI/ML", "Full-Stack", "Computer Vision"],
    githubUrl: "https://github.com/vishwass-02/Hackathon1",
    details: {
      problem: "People often struggle with diagnosing and fixing minor home appliance issues, leading to expensive repair bills.",
      solution: "Fix Lens uses computer vision and NLP to analyze user inputs (images and text) and generate actionable, step-by-step repair instructions.",
      technologies: "Python, AI Models, React, Node.js",
      challenges: "Ensuring high accuracy in image recognition for diverse appliance models.",
      learnings: "Deepened knowledge of deploying ML models in a full-stack environment.",
      future: "Integrating AR for live repair assistance."
    }
  },
  {
    id: 2,
    title: "Restaurant Menu System",
    subtitle: "Dynamic Web Application",
    description: "A responsive restaurant ordering web application with dynamic menu display, cart management, and real-time price calculation.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    tags: ["Angular", "TypeScript", "REST APIs"],
    githubUrl: "https://github.com/vishwass-02/Restaurant-",
    details: {
      problem: "Restaurants need efficient, user-friendly digital ordering systems to streamline operations.",
      solution: "Developed a responsive web app enabling seamless browsing, ordering, and cart management with real-time updates.",
      technologies: "Angular, TypeScript, HTML/CSS, Backend APIs",
      challenges: "Managing complex state across the application for the shopping cart.",
      learnings: "Mastered modular routing and state management in Angular.",
      future: "Adding real-time order tracking and payment gateway integration."
    }
  },
  {
    id: 3,
    title: "Satellite Detection System",
    subtitle: "Satellite Image Analysis",
    description: "A system designed to detect and analyze satellites from imagery data.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Computer Vision", "Machine Learning"],
    githubUrl: "https://github.com/vishwass-02/satellite-detection-system",
    details: {
      problem: "Tracking and identifying satellites accurately requires processing large amounts of image data.",
      solution: "Built a detection model to process imagery and identify satellites effectively.",
      technologies: "Python, Computer Vision Libraries",
      challenges: "Handling noisy image data and improving detection accuracy.",
      learnings: "Enhanced computer vision and machine learning skills.",
      future: "Integration with real-time satellite video feeds."
    }
  },
  {
    id: 4,
    title: "Task Management System",
    subtitle: "Productivity Application",
    description: "A timetable and task tracking application with task completion logic and real-time task status updates.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    tags: ["Visual Studio", "C/C++", "UI Design"],
    githubUrl: "https://github.com/vishwass-02/CIA-2-L-T",
    details: {
      problem: "Students struggle to keep track of their daily tasks and academic timetables efficiently.",
      solution: "Designed a simple interface with real-time status updates that automatically moves finished tasks to a 'Done' list.",
      technologies: "Visual Studio, Programming",
      challenges: "Creating an intuitive UI that requires minimal user effort.",
      learnings: "Improved skills in application lifecycle management and desktop app development.",
      future: "Cloud synchronization across multiple devices."
    }
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Showcasing my best work in AI, Full-Stack, and Embedded Systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col group p-0 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-[#00c6ff] font-medium">{project.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-300 mb-6 line-clamp-3 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2.5 bg-[#0070f3]/10 hover:bg-[#0070f3]/20 text-[#0070f3] border border-[#0070f3]/30 rounded-lg flex items-center justify-center gap-2 transition-colors font-medium text-sm"
                    >
                      <Info size={16} /> Case Study
                    </button>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors flex items-center justify-center"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <button className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Case Study */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[800px] md:max-h-[85vh] bg-[#111] border border-white/10 rounded-2xl z-50 overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="relative h-48 md:h-64 shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors z-10"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-3xl font-bold text-white mb-1">{selectedProject.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-[#00c6ff]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 overflow-y-auto space-y-6 flex-grow custom-scrollbar">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs">P</span>
                    The Problem
                  </h4>
                  <p className="text-gray-400 leading-relaxed">{selectedProject.details.problem}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">S</span>
                    The Solution
                  </h4>
                  <p className="text-gray-400 leading-relaxed">{selectedProject.details.solution}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <h5 className="font-semibold text-white mb-2">Technologies Used</h5>
                    <p className="text-sm text-gray-400">{selectedProject.details.technologies}</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <h5 className="font-semibold text-white mb-2">Challenges</h5>
                    <p className="text-sm text-gray-400">{selectedProject.details.challenges}</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <h5 className="font-semibold text-white mb-2">Key Learnings</h5>
                    <p className="text-sm text-gray-400">{selectedProject.details.learnings}</p>
                  </div>
                  <div className="p-4 bg-[#0070f3]/10 rounded-xl border border-[#0070f3]/20">
                    <h5 className="font-semibold text-[#00c6ff] mb-2">Future Improvements</h5>
                    <p className="text-sm text-gray-300">{selectedProject.details.future}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
