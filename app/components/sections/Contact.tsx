"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);
import { MagneticButton } from "../ui/MagneticButton";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a question or want to work together? Drop me a message!"
        />

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 space-y-6"
          >
            <GlassCard className="p-8 h-full flex flex-col gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0070f3]/10 flex items-center justify-center text-[#00c6ff] shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <a href="mailto:ojasvishwas.s@gmail.com" className="text-white hover:text-[#00c6ff] transition-colors font-medium">ojasvishwas.s@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0070f3]/10 flex items-center justify-center text-[#00c6ff] shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Phone</p>
                      <a href="tel:+917349328852" className="text-white hover:text-[#00c6ff] transition-colors font-medium">+91 7349328852</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0070f3]/10 flex items-center justify-center text-[#00c6ff] shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Location</p>
                      <p className="text-white font-medium">Bengaluru, Karnataka</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-auto">
                <h4 className="text-sm font-medium text-gray-400 mb-4">Social Profiles</h4>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/vishwassampath/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0070f3] hover:text-white transition-all duration-300">
                    <LinkedinIcon size={18} />
                  </a>
                  <a href="https://github.com/vishwass-02" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0070f3] hover:text-white transition-all duration-300">
                    <GithubIcon size={18} />
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3"
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0070f3] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0070f3] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0070f3] transition-colors"
                    placeholder="Internship Opportunity"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0070f3] transition-colors resize-none"
                    placeholder="Hello Vishwas, I would like to discuss..."
                  ></textarea>
                </div>

                <MagneticButton 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto mt-4"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <motion.div
                        whileHover={{ x: 5, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Send size={18} />
                      </motion.div>
                    </>
                  )}
                </MagneticButton>
              </form>
            </GlassCard>
            
            {/* Google Maps Placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden h-48 border border-white/10 relative">
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                <p className="text-gray-400 text-sm font-medium tracking-widest uppercase flex items-center gap-2">
                  <MapPin size={16} /> Bengaluru Map View
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1593693397690-362bb9ae26a4?auto=format&fit=crop&w=1200&q=80" 
                alt="Bengaluru" 
                className="w-full h-full object-cover filter grayscale blur-sm opacity-50"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
